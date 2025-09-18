import { Link } from "react-router"
import { Button } from "./ui/button"

interface BackToShopBannerProps {
  headingText: string
  linkText: string
}

export default function BackToShopBanner({
  headingText,
  linkText,
}: BackToShopBannerProps) {
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center space-y-8">
      <h1 className="text-center font-[Anton,_sans-serif] text-3xl uppercase">
        {headingText}
      </h1>
      <Link to="/shop">
        <Button size="lg">{linkText}</Button>
      </Link>
    </div>
  )
}
