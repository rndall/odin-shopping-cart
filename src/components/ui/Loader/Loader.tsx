import styles from "./Loader.module.css";

import { LoaderCircle } from "lucide-react";

interface LoaderProps {
  size?: number;
}

export default function Loader({ size = 24 }: LoaderProps) {
  return <LoaderCircle className={styles.loader} size={size} />;
}
