import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type ProductAccordionItems = { trigger: string; content: string }

type ProductAccordionProps = {
  items: ProductAccordionItems[]
}

export default function ProductAccordion({ items }: ProductAccordionProps) {
  return (
    <Accordion type="multiple">
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
