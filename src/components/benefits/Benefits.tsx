import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { White } from "../ui/white/White";
import { IconLock, IconPdf, IconRedBorder } from "../../assets";
import pdf from "../../assets/downloads/personal_data_rules.pdf";

export const Benefits = () => {
  return (
    <div className="container container--mob-nopad">
      <White>
        <div className={styles.benefits}>
          <h2 className={clsx(styles.title, "wow animate slideInRight")}>
            Partners reward model benefits
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <div className={styles.text}>
                <div className={styles.icon}>
                  1<IconRedBorder className="wow" />
                </div>
                <p>
                  The Partner receives rewards for the attracted and paying
                  clients. The reward is not a one-time, but a regular from 7 to
                  9 months
                </p>
              </div>
              <div className={styles.text}>
                <div className={styles.icon}>
                  2<IconRedBorder className="wow" />
                </div>
                <p>
                  The size and period of the Agent's reward increase depending
                  on the number of attracted clients;
                </p>
              </div>
              <div className={styles.text}>
                <div className={styles.icon}>
                  3<IconRedBorder className="wow" />
                </div>
                <p>
                  Upon termination of the use of the service by the Client, and
                  then upon renewal, the Partner's reward will be resumed
                </p>
              </div>
              <div className={styles.text}>
                <div className={styles.icon}>
                  4<IconRedBorder className="wow" />
                </div>
                <p>
                  When the client is used by the client, and then when renewed,
                  the agent’s remuneration is resumed;
                </p>
              </div>
              <div className={styles.text}>
                <div className={styles.icon}>
                  5<IconRedBorder className="wow" />
                </div>
                <p>
                  Partners payments are made within 48 hours after receiving the
                  payment from the Client;
                </p>
              </div>
              <div className={styles.text}>
                <div className={styles.icon}>
                  6<IconRedBorder className="wow" />
                </div>
                <p>
                  A Partner can earn from ten active Clients up to $10,000 per
                  month.
                </p>
              </div>
            </div>
            <div
              className={clsx(styles.center, "wow animate animate__fadeInUp")}
            >
              <h4 className={styles.center__title}>
                Examples of the partners rewards calculation
              </h4>
              <div className={styles.center__block}>
                <a href="/" className={styles.link}>
                  Excel example 1
                </a>
                <a href="/" className={styles.link}>
                  {" "}
                  Excel example 2
                </a>
                <a href="/" className={styles.link}>
                  Excel example 3
                </a>
              </div>
            </div>
            {/* </div> */}
            <div className={styles.right}>
              <a href="/" className={styles.link}>
                Partners reward calculator
              </a>
              <a href={pdf} target="_blank" className={styles.link}>
                Agency agreement template <IconPdf />
              </a>
              <a href="/" className={styles.link}>
                Agent Library and Agency News
                <IconLock />
              </a>
            </div>
          </div>
        </div>
      </White>
    </div>
  );
};
