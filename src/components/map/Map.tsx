import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { BigMap } from "./BigMap";
import useWindowSize from "../../hooks/useWindowSize";
import { SmallMap } from "./SmallMap";

export const Map = () => {
  const size = useWindowSize();
  return (
    <div className={clsx(styles.map)}>
      <div className={styles.wrapper}>
        <h2 className={clsx(styles.title, "wow animate slideInLeft")}>
          Partners map
        </h2>
        <div className={styles.icon}>
          {size > 500 ? <BigMap /> : <SmallMap />}
        </div>
      </div>
    </div>
  );
};
