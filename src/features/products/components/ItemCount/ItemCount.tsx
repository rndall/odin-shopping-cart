import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ItemCountProps {
  quantity: number
  setQuantity: (value: number) => void
  inputOnlySm?: boolean
}

export default function ItemCount({
  quantity,
  setQuantity,
  inputOnlySm,
}: ItemCountProps) {
  return (
    <div className="flex items-center -space-x-[2px]">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className={`rounded-tr-none rounded-br-none ${inputOnlySm ? "hidden sm:block" : ""}`}
        disabled={quantity === 1}
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        -
      </Button>
      <Input
        className={`z-10 w-[8ch] text-center sm:rounded-none ${inputOnlySm ? "" : "rounded-none"}`}
        type="number"
        name="itemCount"
        value={quantity}
        min={1}
        onChange={({ target }) => {
          const newValue = Math.max(1, Number(target.value))
          setQuantity(newValue)
        }}
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className={`rounded-tl-none rounded-bl-none ${inputOnlySm ? "hidden sm:block" : ""}`}
        onClick={() => setQuantity(Math.max(1, quantity + 1))}
      >
        +
      </Button>
    </div>
  )
}
