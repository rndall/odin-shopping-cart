import styles from "./Hero.module.css";

import { Link } from "react-router";

import Button from "../ui/Button/Button";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <h1 className={styles.heading}>Thanks for Escaping with us!</h1>

        <div className={styles.lgBelow}>
          <Link to="shop">
            <Button fullWidth>Shop the merch</Button>
          </Link>
        </div>

        <div className={styles.lgAbove}>
          <Link to="shop">
            <Button>Shop the merch</Button>
          </Link>
        </div>
      </div>

      <div className={styles.collage}>
        <div className={styles.collageContainer}>
          <div className={styles.collageBackground}>
            <img
              src="https://placecats.com/neo/600/900"
              className={styles.collageImage1}
            />
            <img
              src="https://placecats.com/millie/400/600"
              className={styles.collageImage2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
