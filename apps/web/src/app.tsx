import * as commonStyles from "./assets/styles/common.module.scss";
import * as styles from "./app.module.scss";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layout/Header/header";
import Footer from "./layout/Footer/footer";

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={[commonStyles.container, styles.content].join(" ")}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
