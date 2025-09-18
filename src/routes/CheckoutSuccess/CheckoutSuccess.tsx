import styles from "./CheckoutSuccess.module.css"

import BackToShopBanner from "../../components/BackToShopBanner"

export default function CheckoutSuccess() {
  return (
    <div className={styles.container}>
      <BackToShopBanner
        headingText="Thank You for Your Purchase"
        linkText="Shop Again"
      />
    </div>
  )
}
