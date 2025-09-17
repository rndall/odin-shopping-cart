import styles from "./CheckoutFooter.module.css";

import { useNavigate, Link } from "react-router";

import Button from "../../../../components/ui/Button/Button";

import { useCart } from "../../../products/hooks/useCart";
import { useState } from "react";

interface CheckoutFooterProps {
  subtotal: string;
}

export default function CheckoutFooter({ subtotal }: CheckoutFooterProps) {
  const { handleClearCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    setTimeout(() => {
      handleClearCart();
      setIsLoading(false);
      navigate("/checkout-success");
    }, 2000);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.footerSubtotal}>
        <div className={styles.subtotal}>
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>

        <div>
          <Button onClick={handleCheckout} isLoading={isLoading} fullWidth>
            Checkout
          </Button>
        </div>
      </div>

      <div className={styles.backToShoppingBtn}>
        <Link to="/shop">
          <Button fullWidth variant="outlined">
            Back to Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
