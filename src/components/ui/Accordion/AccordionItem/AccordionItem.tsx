import styles from "./AccordionItem.module.css";

import { Plus, Minus } from "lucide-react";

import { useState } from "react";

interface AccordionItemProps {
  trigger: string;
  content: string;
}

export default function AccordionItem({
  trigger,
  content,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.triggerButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.triggerContainer}>
          <p className={styles.trigger}>{trigger}</p>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <div
        data-testid="accordion-item-content"
        className={`${styles.contentContainer} ${isOpen ? styles.contentVisible : ""}`}
      >
        <div className={styles.contentOuter}>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </div>
  );
}
