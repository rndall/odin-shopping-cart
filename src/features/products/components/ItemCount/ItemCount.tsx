import style from "./ItemCount.module.css"

import Button from "../../../../components/ui/Button/Button"

interface ItemCountProps {
  quantity: number;
  setQuantity: (value: number) => void;
}

export default function ItemCount({ quantity, setQuantity }: ItemCountProps) {
  return (
    <div className={style.itemCount}>
      <Button size="xs" pill={false} onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
      <input type="number" name="itemCount" value={quantity} min={1} onChange={({ target }) => {
        const newValue = Math.max(1, Number(target.value))
        setQuantity(newValue)
      }} />
      <Button size="xs" pill={false} onClick={() => setQuantity(Math.max(1, quantity + 1))}>+</Button>
    </div>
  )
}

