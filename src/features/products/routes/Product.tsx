import styles from "./Product.module.css";

import { useLoaderData } from "react-router";

export default function Product() {
  const productData = useLoaderData();

  return (
    <section className={styles.section}>
      <div className="container">Test</div>
    </section>
  );
}
