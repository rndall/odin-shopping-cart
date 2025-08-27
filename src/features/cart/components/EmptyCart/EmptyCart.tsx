import styles from "./EmptyCart.module.css";

import { Link } from "react-router";
import Button from "../../../../components/ui/Button/Button";

export default function EmptyCart() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Your Shopping Cart is Empty</h1>
      <Link to="/shop">
        <Button size="lg">Start Shopping</Button>
      </Link>
    </div>
  );
}
