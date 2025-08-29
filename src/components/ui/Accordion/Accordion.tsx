import styles from "./Accordion.module.css";

interface AccordionProps {
  children: React.ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  return <div className={styles.accordion}>{children}</div>;
}
