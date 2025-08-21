import styles from "./Hero.module.css"

import Button from "../Button/Button"

export default function Hero() {
  return (
    <section>
      <div className={`${styles.heroContainer} container`}>
        <h1 className={styles.heading}>Thanks for Escaping with us!</h1>
        <Button fullWidth>Shop the merch</Button>
      </div>

      <div className={styles.collage}>
        <img src="https://placecats.com/300/450" className={styles.collageImage1} />
        <img src="https://placecats.com/millie/300/450" className={styles.collageImage2} />
      </div>
    </section>
  )
}

