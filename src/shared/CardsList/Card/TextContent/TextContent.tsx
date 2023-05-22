import React from "react";
import { UserLink } from "./UserLink";
import styles from './textContent.css';
import { Title } from "./Title";

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink />
        <span className={styles.createdAt}>4 часа назад</span>
      </div>
      <Title />
    </div>
  );
}
