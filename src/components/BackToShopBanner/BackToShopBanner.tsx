import styles from "./BackToShopBanner.module.css";

import { Link } from "react-router";
import Button from "../ui/Button/Button";

interface BackToShopBannerProps {
  headingText: string;
  linkText: string;
}

export default function BackToShopBanner({
  headingText,
  linkText,
}: BackToShopBannerProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{headingText}</h1>
      <Link to="/shop">
        <Button size="lg">{linkText}</Button>
      </Link>
    </div>
  );
}
