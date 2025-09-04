import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem/AccordionItem";

interface AccordionProps {
  children:
    | React.ReactElement<typeof AccordionItem>
    | React.ReactElement<typeof AccordionItem>[];
}

export default function Accordion({ children }: AccordionProps) {
  return <div className={styles.accordion}>{children}</div>;
}
