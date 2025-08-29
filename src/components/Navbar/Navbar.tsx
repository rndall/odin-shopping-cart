import styles from "./Navbar.module.css";

import { NavLink, useLocation } from "react-router";

import { ShoppingCart } from "lucide-react";

interface NavbarProps {
  cartItemCount: number;
}

export default function Navbar({ cartItemCount }: NavbarProps) {
  const location = useLocation();

  const showShoppingCartIcon = () => {
    const { pathname } = location;

    return pathname.includes("shop") || pathname.includes("products");
  };

  return (
    <header className={styles.header}>
      <div
        className={`${styles.navContainer}`}
        style={{ position: "relative" }}
      >
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={styles.navLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="shop" className={styles.navLink}>
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
        {showShoppingCartIcon() && (
          <NavLink to="shop/cart" className={styles.cartLink}>
            <div className={styles.cartContainer}>
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <div className={styles.cartItems}>
                  <p>{cartItemCount}</p>
                </div>
              )}
            </div>
          </NavLink>
        )}
      </div>
    </header>
  );
}
