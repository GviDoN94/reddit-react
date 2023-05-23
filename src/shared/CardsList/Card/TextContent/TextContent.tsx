import React from "react";
import styles from './textContent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cdn.dribbble.com/userupload/3977833/file/original-eae541dd78f455f106443868aa7e3b7f.png?compress=1&resize=400x300&vertical=top"
            alt="avatar"
          />
          <a className={styles.userName} href="#user-url">Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a className={styles.postLink} href="#post-url">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, animi.
        </a>
      </h2>
    </div>
  );
}
