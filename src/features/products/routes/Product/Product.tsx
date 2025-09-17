import styles from "./Product.module.css";

import { useCart } from "../../hooks/useCart";
import { useLoaderData } from "react-router";

import { Star } from "lucide-react";

import type { Product } from "../../types";

import ItemCount from "../../components/ItemCount/ItemCount";
import Button from "../../../../components/ui/Button/Button";
import Accordion from "../../../../components/ui/Accordion/Accordion";
import AccordionItem from "../../../../components/ui/Accordion/AccordionItem/AccordionItem";

import useIsVisible from "../../../../hooks/useIsVisible";
import { productLoader } from "../../../../api/loaders";

import { useRef, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { productDetailQuery } from "../../api/productsApi";

export default function Product() {
  const { handleAddToCart } = useCart();
  const { productId } = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof productLoader>>
  >;
  const { data: product } = useSuspenseQuery(productDetailQuery(productId));
  const { image, title, price, rating, description } = product;
  const [itemQuantity, setItemQuantity] = useState(1);

  const addToCartBtnRef = useRef<HTMLButtonElement>(null);

  const isAddToCardBtnVisible = useIsVisible(addToCartBtnRef);

  const onAddToCartClick = () => {
    handleAddToCart({ item: product, quantity: itemQuantity });

    setItemQuantity(1);
  };

  return (
    <>
      <section className={styles.section}>
        <div className={`${styles.container} container`}>
          <div className={styles.imageBg}>
            <img className={styles.productImage} src={image} />
          </div>

          <div className={styles.productInfo}>
            <div className={styles.productDetails}>
              <h1 className={styles.productTitle}>{title}</h1>

              <div className={styles.productPriceRating}>
                <p className={styles.productPrice}>${price.toFixed(2)}</p>
                <div className={styles.productRating}>
                  <p>{rating.rate}</p>
                  <Star fill="yellow" size={20} />
                </div>
              </div>

              <div className={styles.productCta}>
                <ItemCount
                  quantity={itemQuantity}
                  setQuantity={(value: number) => setItemQuantity(value)}
                />
                <Button
                  fullWidth
                  ref={addToCartBtnRef}
                  onClick={onAddToCartClick}
                >
                  Add to Cart
                </Button>
              </div>

              <div className={styles.accordionContainer}>
                <Accordion>
                  <AccordionItem trigger="Description" content={description} />
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.stickyAddToCart} ${
            isAddToCardBtnVisible ? "" : styles.stickyAddToCartVisible
          }`}
        >
          <Button fullWidth>Add to Cart</Button>
        </div>
      </section>
    </>
  );
}
