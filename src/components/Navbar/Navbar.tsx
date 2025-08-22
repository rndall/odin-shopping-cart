import { NavLink, useLocation } from "react-router"

import styles from "./Navbar.module.css"

import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer}`} style={{ position: "relative" }}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <NavLink to="/" className={styles.navLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="shop" className={styles.navLink}>Shop</NavLink>
            </li>
          </ul>
        </nav>
        {
          location.pathname.includes("shop") &&
          <NavLink to="shop/cart" className={styles.cartLink}><ShoppingCart size={20} /></NavLink>
        }
      </div>
    </header >
  )
}

