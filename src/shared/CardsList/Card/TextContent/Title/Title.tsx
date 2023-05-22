import React from "react";
import styles from './title.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a className={styles.postLink} href="#post-url">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, animi.
      </a>
    </h2>
  );
}
