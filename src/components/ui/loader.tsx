import { LoaderCircle } from "lucide-react"

interface LoaderProps {
  size?: number
}

export default function Loader({ size = 24 }: LoaderProps) {
  return <LoaderCircle className="loading animate-spin" size={size} />
}
