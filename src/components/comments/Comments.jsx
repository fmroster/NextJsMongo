"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const [desc, setDesc] = useState("");
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postSlug,
        desc,
      }),
    }),
      mutate();
  };
  console.log(data);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data?.map((comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  <Image
                    src={comment.user.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.image}
                  />

                  <div className={styles.userInfo}>
                    <span className={styles.username}>{comment.user.name}</span>
                    <span className={styles.date}>{comment.createdAt}</span>
                  </div>
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
