import React, { useEffect, useContext } from "react";
import { Header } from "../header/header";
import { Categories } from "../categories";
import { DiscountForm } from "../discount-form";
import { CardItem } from "../../components/card-item";
import styles from "./index.module.scss";
import { getDiscountPercent } from "../../utils/getDiscountPercent";
import { themeContext } from "../../context/theme";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllItems, fetchAllCategories } from "../../store/async-actions"; 
import {
  getDiscountItems,
  getIsLoading,
  getError,
} from "../../store/selectors";

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const { theme } = useContext(themeContext);

  const saleItems = useSelector(getDiscountItems);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (error) {
    return <div>ERROR</div>;
  }

  return isLoading ? (
    <div className={styles.loading}>Loading... Please wait...</div>
  ) : (
    <>
      <Header />
      <Categories elementsCount={4} breadCrumbs={false} />
      <DiscountForm />
      <div
        className={cn(styles.saleWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <h2
          className={cn(styles.saleText, {
            [styles.dark]: theme === "dark",
          })}
        >
          Sale
        </h2>
        <div
          className={cn(styles.sales, {
            [styles.dark]: theme === "dark",
          })}
        >
          {saleItems.map(({ price, discont_price, title, image, id }) => (
            <CardItem
              key={id}
              price={price}
              discont={discont_price}
              discontPercent={getDiscountPercent(price, discont_price)}
              title={title}
              image={image}
              id={id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
