import styles from "./ProductsGridItem.module.css";

import { Link } from "react-router";

import { Star } from "lucide-react";

import Button from "../../../../components/ui/Button/Button";
import ItemCount from "../ItemCount/ItemCount";

import type { Product } from "../../types";
import type { HandleAddToCartFn } from "../../../cart/types";

import { useState } from "react";

interface ProductsGridItemProps {
  product: Product;
  handleAddToCart: HandleAddToCartFn;
}

export default function ProductsGridItem({
  product,
  handleAddToCart,
}: ProductsGridItemProps) {
  const { image, title, rating, price } = product;

  const [itemQuantity, setItemQuantity] = useState(1);

  const handleQuantityChange = (value: number) => setItemQuantity(value);

  const onAddToCartClick = () => {
    handleAddToCart({ item: product, quantity: itemQuantity });

    setItemQuantity(1);
  };

  return (
    <div className={styles.product}>
      <div className={styles.productContainer}>
        <Link to={`/products/${product.id}`} className={styles.itemLink}>
          <div className={styles.imageBg}>
            <img className={styles.productImage} src={image} />
          </div>

          <div className={styles.productDetails}>
            <div className={styles.productHeading}>
              <h2 className={styles.productTitle}>{title}</h2>

              <div className={styles.productRating}>
                <p>{rating.rate}</p>
                <Star fill="yellow" size={20} />
              </div>
            </div>

            <p className={styles.productPrice}>${price.toFixed(2)}</p>
          </div>
        </Link>

        <ItemCount quantity={itemQuantity} setQuantity={handleQuantityChange} />

        <Button onClick={onAddToCartClick} size="sm" fullWidth>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
