import { FunctionComponent } from "react";
import styles from "./Tabs.module.css";

const Tabs: FunctionComponent = () => {
  return (
    <section className={styles.tabs}>
      <div className={styles.phoneTab}>
        <button className={styles.phoneTab1}>
          <b className={styles.phone}>Phone</b>
        </button>
        <button className={styles.tabletTab}>
          <b className={styles.tablet}>Tablet</b>
        </button>
        <div className={styles.laptopTabParent}>
          <div className={styles.laptopTab}>
            <button className={styles.laptopTab1}>
              <b className={styles.laptop}>Laptop</b>
            </button>
            <button className={styles.earbudsTab}>
              <b className={styles.earbuds}>Earbuds</b>
            </button>
            <button className={styles.headphonesTab}>
              <b className={styles.headphones}>Headphones</b>
            </button>
          </div>
          <div className={styles.hotPicks}>
            <h1 className={styles.hotPicks1}>Hot Picks</h1>
          </div>
        </div>
      </div>
      <div className={styles.productCard}>
        <div className={styles.appleiPhoneProMax}>
          <h2 className={styles.appleIphone14}>Apple iPhone 14 Pro Max</h2>
          <div className={styles.learnMoreButtonWrapper}>
            <button className={styles.learnMoreButton}>
              <b className={styles.learnMore}>Learn more</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
