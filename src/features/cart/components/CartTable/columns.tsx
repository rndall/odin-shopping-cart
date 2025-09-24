import type { ColumnDef } from "@tanstack/react-table"
import type { CartItem } from "../../types"
import type { Product } from "@/features/products/types"
import type { Row } from "@tanstack/react-table"

import { useCart } from "@/features/products/hooks/useCart"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import ItemCount from "@/features/products/components/ItemCount/ItemCount"
import { Link } from "react-router"

import { getFormattedPrice } from "@/utlis/getFormattedPrice"

export interface ColumnMeta {
  columnClasses: string
}

interface CellProps {
  row: Row<CartItem>
}

export const columns: ColumnDef<CartItem>[] = [
  {
    accessorKey: "item",
    header: "Item",
    cell: ItemCell,
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ItemCountCell,
    size: 180,
    meta: { columnClasses: "hidden sm:table-cell" } as ColumnMeta,
  },
  {
    id: "price",
    header: "Price",
    cell: PriceCell,
    size: 80,
    meta: { columnClasses: "hidden sm:table-cell" } as ColumnMeta,
  },
  {
    id: "remove",
    cell: RemoveCell,
    size: 30,
  },
]

function ItemCell({ row }: CellProps) {
  const item = row.getValue("item") as Product
  const productLink = `/products/${item.id}`

  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-7.5">
      <Link className="shrink-0" to={productLink}>
        <div className="flex aspect-[3_/_4] max-w-[104px] items-center bg-gray-200 p-3 sm:max-w-22">
          <img className="object-contain" src={item.image} />
        </div>
      </Link>

      <div className="flex flex-col gap-2">
        <Link to={productLink}>
          <h2 className="font-heading hover:text-primary text-base text-wrap uppercase transition-colors">
            {item.title}
          </h2>
        </Link>

        <div className="flex flex-col gap-2 sm:hidden">
          <p className="text-base">{getFormattedPrice(item)}</p>

          <div>
            <ItemCountCell row={row} inputOnlySm />
          </div>
        </div>
      </div>
    </div>
  )
}

function ItemCountCell({
  row,
  inputOnlySm,
}: CellProps & {
  inputOnlySm?: boolean
}) {
  const { handleAdjustItemQuantity } = useCart()
  const handleQuantityChange = (value: number) => {
    handleAdjustItemQuantity({ itemId: row.original.item.id, quantity: value })
  }

  return (
    <ItemCount
      quantity={row.getValue("quantity")}
      setQuantity={handleQuantityChange}
      inputOnlySm={inputOnlySm}
    />
  )
}

function PriceCell({ row }: CellProps) {
  const item = row.getValue("item") as Product

  return <div className="hidden sm:block">{getFormattedPrice(item)}</div>
}

function RemoveCell({ row }: CellProps) {
  const { handleRemoveItem } = useCart()

  return (
    <Button
      onClick={() => handleRemoveItem(row.original.item.id)}
      className="opacity-40 hover:bg-transparent hover:opacity-100"
      size="icon"
      variant="ghost"
    >
      <X className="size-6" />
    </Button>
  )
}
