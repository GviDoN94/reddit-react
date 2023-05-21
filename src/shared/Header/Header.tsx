import React from "react";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import styles from './header.css';
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";
import { SortBlock } from "./SortBlock/SortBlock";

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
