import { FunctionComponent } from "react";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <Header />
      <div className={styles.message}>
        <div className={styles.shippingWrapper}>
          <img className={styles.shippingIcon} alt="" src="/shipping.svg" />
        </div>
        <b className={styles.freeShippingFor}>
          Free shipping for all orders above Rm50!
        </b>
      </div>
      <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
      <Tabs />
    </div>
  );
};

export default Desktop;
