import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ key, post }) => {
  return (
    <div className={styles.container} key={key}>
      {post.image && (
        <div className={styles.imageContainer}>
          <Image src={post.image} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.slug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title.substring(0, 60)}</h1>
        </Link>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>  
  );
};

export default Card;
