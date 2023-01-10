import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { IconShevron } from "../../assets";

export const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={clsx(styles.title, "wow animate slideInRight")}>
            Partner’s interactions scheme
          </h2>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.blocks}>
            <div className={clsx(styles.block, "wow animate rotateInDownLeft")}>
              <span className="blue">The Partner gets an ID</span>
              <br />
              <span className="blue">and a code for the 20% </span>
              <br />
              <span className="blue">discount</span>

              <IconShevron
                className={clsx(
                  styles["block__icon--down"],
                  styles.block__icon,
                  styles["block__icon--mob"]
                )}
              />
            </div>
            <div className="wow animate fadeIn" data-wow-delay="0.8s">
              <IconShevron
                className={clsx(styles.block__icon, styles["block__icon--pc"])}
              />
            </div>
            <div
              className={clsx(styles.block, "wow animate rotateInDownLeft")}
              data-wow-delay="0.2s"
            >
              <span className="blue">The Partner contacts a</span>
              <br />
              <span className="blue">client and makes a</span>
              <br />
              <span className="blue">presentation of our</span>
              <br />
              <span className="blue">service</span>
              <IconShevron
                className={clsx(
                  styles["block__icon--down"],
                  styles.block__icon
                )}
              />
            </div>
            <div className="wow animate fadeIn" data-wow-delay="0.8s">
              <IconShevron
                className={clsx(styles.block__icon, styles["block__icon--pc"])}
              />
            </div>
            <div
              className={clsx(styles.block, "wow animate fadeIn")}
              data-wow-delay="0.4s"
            >
              <span className="blue">The Client registers on </span>
              <br />
              <span className="blue">the JDL platform as a</span>
              <br />
              <span className="blue">customer, using 2 weeks</span>
              <br />
              <span className="blue">free trial period</span>
              <IconShevron
                className={clsx(
                  styles["block__icon--down"],
                  styles.block__icon,
                  styles.white
                )}
              />
            </div>
          </div>

          <div className={clsx(styles.blocks, styles["blocks--reverse"])}>
            <div
              className={clsx(styles.block, "wow animate rotateInDownRight")}
              data-wow-delay="0.4s"
            >
              <span className="blue">In the 48 hours the</span>
              <br />
              <span className="blue">partner will receive his</span>
              <br />
              <span className="blue">reward.</span>
            </div>
            <div className="wow animate fadeIn" data-wow-delay="0.8s">
              <IconShevron
                className={clsx(
                  styles.block__icon,
                  styles["block__icon--left"]
                )}
              />
            </div>
            <div
              className={clsx(styles.block, "wow animate rotateInDownRight")}
              data-wow-delay="0.2s"
            >
              <span className="blue">The Client uses partners</span>
              <br />
              <span className="blue">20% discount code to</span>
              <br />
              <span className="blue">buy his first monthly paid</span>
              <br />
              <span className="blue">package</span>
              <IconShevron
                className={clsx(
                  styles["block__icon--down"],
                  styles.block__icon,
                  styles["block__icon--mob"]
                )}
              />
            </div>
            <div className="wow animate fadeIn" data-wow-delay="0.8s">
              <IconShevron
                className={clsx(
                  styles.block__icon,
                  styles["block__icon--left"]
                )}
              />
            </div>
            <div
              className={clsx(styles.block, "wow animate rotateInDownRight")}
            >
              <span className="blue">The Client makes sure in </span>
              <br />
              <span className="blue"> the jdls benefits and </span>
              <br />
              <span className="blue">opportunities</span>
              <IconShevron
                className={clsx(
                  styles["block__icon--down"],
                  styles.block__icon,
                  styles["block__icon--mob"]
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
