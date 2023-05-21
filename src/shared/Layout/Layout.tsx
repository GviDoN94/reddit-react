import React, { ReactNode } from "react";
import styles from './layout.css';
import { Header } from "../Header/Header";


interface ILayoutProps {
  children?: ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
    </div>
  );
}
