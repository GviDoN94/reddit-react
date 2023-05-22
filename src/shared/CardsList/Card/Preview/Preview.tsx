import React from "react";
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/7179546/file/still-3d043e27788b038adbd4a271de00448e.gif?compress=1&resize=400x300&vertical=top"
        alt="priview"
      />
    </div>
  );
}
