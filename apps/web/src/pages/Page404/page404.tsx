import * as styles from "./page404.module.scss";
import React from "react";

export default function Page404() {
  return (
    <div className={styles.error}>
      <h1>404</h1>
      <h3>Page not found</h3>
    </div>
  );
}
