import style from "./ProductsCollection.module.css";

import ProductsGrid from "../ProductsGrid/ProductsGrid";

export default function ProductsCollection() {
  return (
    <section className={style.collection}>
      <div className={`${style.collectionContainer} container`}>
        <h1 className={style.heading}>All Products</h1>

        <ProductsGrid />
      </div>
    </section>
  );
}
