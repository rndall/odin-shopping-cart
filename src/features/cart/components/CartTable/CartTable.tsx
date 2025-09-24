import { useCart } from "@/features/products/hooks/useCart"

import { columns } from "./columns"
import { DataTable } from "./data-table"

export default function CartTable() {
  const { cart } = useCart()

  return (
    <div className="my-4 sm:my-9">
      <DataTable columns={columns} data={cart} />
    </div>
  )
}
