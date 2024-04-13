import React from "react";
import styles from "@/components/layout/Header/style.module.css";
import SearchPost from "./SearchPost";

const Header = ({ inputs }) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.search}>
            <SearchPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
