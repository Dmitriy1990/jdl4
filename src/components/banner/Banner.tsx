import React, { useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { IconArrowDown, IconDiscount, IconShevron } from "../../assets";

export const Banner = () => {
  return (
    <div>
      <section className={styles.banner} id="banner">
        <div className="container ">
          <div className={styles["banner-inner"]}>
            <h1 className={clsx(styles.h1, "wow animate fadeInLeft")}>
              Partner’s Section Just Do Luck
            </h1>
            <div className={styles.texts}>
              <div
                className={clsx(styles.texts__item, "wow animate bounceInUp")}
              >
                <span className="blue">This is cool and interesting</span>
                <br />
                <span className="blue">to be a partner in the </span>
                <br />
                <span className="blue">promising startup.</span>
              </div>
              <div
                className={clsx(styles.texts__item, "wow animate bounceInUp")}
                data-wow-delay="0.2s"
              >
                <div className={styles.pc}>
                  <span className="green">Growing and regular</span>
                  <br />
                  <span className="green">income</span>
                </div>
                <div className={styles.mob}>
                  <span className="green">Growing and</span>
                  <br />
                  <span className="green">regular income</span>
                </div>
              </div>
              <div
                className={clsx(styles.texts__item, "wow animate bounceInUp")}
                data-wow-delay="0.4s"
              >
                <span className="lightblue">Long term benefit</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bar}>
          <div className="container">
            <div className={styles["bar-inner"]}>
              <div className={styles["bar-block"]}>
                <div
                  className={clsx(
                    styles["bar-block__text"],
                    "wow animate fadeInUp"
                  )}
                >
                  Figure out what
                  <br /> should you do
                </div>
                <IconShevron className={styles["bar-block__icon"]} />
              </div>

              <div className={styles["bar-block"]}>
                <div
                  className={clsx(
                    styles["bar-block__text"],
                    "wow animate fadeInUp"
                  )}
                >
                  Apply and
                  <br /> Sign the contract
                </div>
                <IconShevron
                  className={clsx(
                    styles["bar-block__icon"],
                    styles["bar-block__icon--mob"]
                  )}
                />
              </div>
              <div className={styles["bar-block"]}>
                <div
                  className={clsx(
                    styles["bar-block__text"],
                    "wow animate fadeInUp"
                  )}
                >
                  Receive
                  <br /> training
                </div>
                <IconShevron className={styles["bar-block__icon"]} />
              </div>

              <div className={styles["bar-block"]}>
                <div
                  className={clsx(
                    styles["bar-block__text"],
                    "wow animate fadeInUp"
                  )}
                >
                  Get to the
                  <br /> interesting work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container container--mob-nopad">
        <div className={styles.white}>
          <span className={clsx(styles.scroll, "")}>
            <IconArrowDown />
          </span>
          <h2 className={clsx(styles.title, "wow animate fadeInUp")}>
            Partner’s commission model
          </h2>
          <p className={clsx(styles.desc, "wow animate fadeInLeft")}>
            One of the basic laws of the Universe says
          </p>
          <div className={styles["table-wrap"]}>
            <div
              className={clsx(styles["table-scroll"], "wow animate slideInUp")}
            >
              <table className={clsx(styles.table, styles["table--one"])}>
                <tr className={clsx(styles.row)}>
                  <td className={clsx(styles.cell)}></td>
                  <td className={clsx(styles.cell, styles.header)} colSpan={7}>
                    LEVEL A: <span>UP TO 10 CLIENTS</span>
                  </td>
                </tr>
                <tr className={clsx(styles.row)}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.head,
                      styles.border__bottom
                    )}
                  >
                    Agent's income
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    1 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7 month
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from sales of services
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    1%
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from payments for limits of participants
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    3%
                  </td>
                </tr>
              </table>
            </div>
            {/* 2 */}

            <div
              className={clsx(styles["table-scroll"], "wow animate slideInUp")}
            >
              <table className={clsx(styles.table, styles["table--two"])}>
                <tr className={clsx(styles.row)}>
                  <td className={clsx(styles.cell)}></td>
                  <td
                    className={clsx(styles.cell, styles.header, styles.blue)}
                    colSpan={8}
                  >
                    LEVEL B: <span>UP TO 10 to 30 CLIENTS</span>
                  </td>
                </tr>
                <tr className={clsx(styles.row)}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.head,
                      styles.border__bottom
                    )}
                  >
                    Agent's income
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    1 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    8 month
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from sales of services
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    8%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    1%
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from payments for limits of participants
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    4%
                  </td>
                </tr>
              </table>
            </div>
            {/* 3 */}
            <div
              className={clsx(styles["table-scroll"], "wow animate slideInUp")}
            >
              <table className={clsx(styles.table, styles["table--three"])}>
                <tr className={clsx(styles.row)}>
                  <td className={clsx(styles.cell)}></td>
                  <td
                    className={clsx(styles.cell, styles.header, styles.red)}
                    colSpan={9}
                  >
                    LEVEL C: <span> FROM 30 CLIENTS</span>
                  </td>
                </tr>
                <tr className={clsx(styles.row)}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.head,
                      styles.border__bottom
                    )}
                  >
                    Agent's income
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    1 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    8 month
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    9 month
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from sales of services
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    9%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    8%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    7%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    6%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    4%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    3%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    2%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    1%
                  </td>
                </tr>

                <tr className={styles.row}>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__left,
                      styles.border__bottom
                    )}
                  >
                    from payments for limits of participants
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td className={clsx(styles.cell, styles.border__bottom)}>
                    5%
                  </td>
                  <td
                    className={clsx(
                      styles.cell,
                      styles.border__bottom,
                      styles.border__right
                    )}
                  >
                    5%
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className={styles["table-wrap"]}>
            <div className={styles.data}>
              <h4 className={styles.data__title}>Data:</h4>
              <div className={styles["data-inner"]}>
                <div
                  className={clsx(
                    styles["table-scroll"],
                    "wow animate slideInUp"
                  )}
                >
                  <table className={styles.table1}>
                    <thead>
                      <tr>
                        <th className={styles.th}>Type of service packages</th>
                        <th className={styles.th}>Free</th>
                        <th className={styles.th}>Min</th>
                        <th className={styles.th}>Mid</th>
                        <th className={styles.th}>Max</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className={styles.td}>
                          Service package price for Organizer, $/month
                        </td>
                        <td className={styles.td}>0</td>
                        <td className={styles.td}>333</td>
                        <td className={styles.td}>899</td>
                        <td className={styles.td}>1699</td>
                      </tr>
                      <tr>
                        <td className={styles.td}>
                          The cost of exceeding the limit by players, $/person
                        </td>
                        <td className={styles.td}>-</td>
                        <td className={styles.td}>-</td>
                        <td className={styles.td}>0,02</td>
                        <td className={styles.td}>0,02</td>
                      </tr>
                      <tr>
                        <td className={styles.td}>
                          Maximum number of players in one game, pcs
                        </td>
                        <td className={styles.td}>-</td>
                        <td className={styles.td}>5 000</td>
                        <td className={styles.td}>15 000</td>
                        <td className={styles.td}>30 000</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="/" className={styles.link}>
                    JDL service packages
                  </a>
                </div>

                <div
                  className={clsx(styles.discount, "wow animate slideInRight")}
                  data-wow-delay="0.2s"
                >
                  <div className={styles.discount__text}>
                    First month discount for the client from the partner
                  </div>
                  <div className={styles.discount__value}>= 20%</div>
                  <IconDiscount className={styles.discount__icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
