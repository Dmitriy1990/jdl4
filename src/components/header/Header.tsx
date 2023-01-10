import React, { useState, useEffect } from "react";
import { IconLogo, IconLogoMob } from "../../assets";
import styles from "./style.module.scss";
import clsx from "clsx";
import { Link } from "react-scroll";
import useWindowSize from "../../hooks/useWindowSize";

export const Header = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <header className={clsx(styles.header)}>
      <div className="container">
        <div className={styles["header-inner"]}>
          <a href="/" className={styles["header__logo"]}>
            <span className={styles["header__logo--pc"]}>
              <IconLogo />
            </span>

            <span className={styles["header__logo--mob"]}>
              <IconLogoMob />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
