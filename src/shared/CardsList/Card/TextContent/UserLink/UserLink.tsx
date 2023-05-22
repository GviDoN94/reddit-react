import React from "react";
import styles from './userLink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://cdn.dribbble.com/userupload/3977833/file/original-eae541dd78f455f106443868aa7e3b7f.png?compress=1&resize=400x300&vertical=top"
        alt="avatar"
      />
      <a className={styles.userName} href="#user-url">Дмитрий Гришин</a>
    </div>
  );
}
