import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logoIcon}
        loading="lazy"
        alt=""
        src="/logo@2x.png"
      />
      <div className={styles.headerInner}>
        <div className={styles.frameParent}>
          <div className={styles.phonesWrapper}>
            <b className={styles.phones}>Phones</b>
          </div>
          <div className={styles.tabletsWrapper}>
            <b className={styles.tablets}>Tablets</b>
          </div>
          <div className={styles.laptopsWrapper}>
            <b className={styles.laptops}>Laptops</b>
          </div>
          <div className={styles.earbudsWrapper}>
            <b className={styles.earbuds}>Earbuds</b>
          </div>
          <div className={styles.headphonesWrapper}>
            <b className={styles.headphones}>Headphones</b>
          </div>
          <div className={styles.aboutWrapper}>
            <b className={styles.about}>About</b>
          </div>
          <div className={styles.contactWrapper}>
            <b className={styles.contact}>Contact</b>
          </div>
          <div className={styles.tablets1}>
            <img
              className={styles.cartIcon}
              loading="lazy"
              alt=""
              src="/cart.svg"
            />
          </div>
          <img
            className={styles.profileIcon}
            loading="lazy"
            alt=""
            src="/profile.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
