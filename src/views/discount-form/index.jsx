import React, {useContext} from "react";
import styles from "./index.module.scss";
import discountFormBackImg from "../../assets/discountFormBackbround.png";
import { themeContext } from "../../context/theme";
import cn from "classnames";

export const DiscountForm = () => {
  const { theme } = useContext(themeContext);

  return (
    <div className={cn(styles.discountFormWrapper, {
      [styles.dark]: theme === "dark",
    })}>
      <div className={styles.discountForm}>
        <div className={styles.discountFormText}>5% off on the first order</div>
        <div className={styles.discountFormInfoWrapper}>
          <div
            className={styles.discountFormBackImg}
            style={{ backgroundImage: `url(${discountFormBackImg})` }}
          ></div>
          <div className={styles.discountFormInform}>
            <input type="text" placeholder="Name" className={styles.discountFormInputs}></input>
            <input type="tel" pattern="\(\d\d\d\) ?\d\d\d-\d\d-\d\d" placeholder="Phone number"className={styles.discountFormInputs}></input>
            <input type="email" placeholder="Email" className={styles.discountFormInputs}></input>
            <button className={styles.discountFormButton}>Get a discount</button>
          </div>
        </div>
      </div>
    </div>
  );
};
