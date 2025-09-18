import BackToShopBanner from "@/components/BackToShopBanner"

export default function CheckoutSuccess() {
  return (
    <div className="flex min-h-dvh justify-center">
      <BackToShopBanner
        headingText="Thank You for Your Purchase"
        linkText="Shop Again"
      />
    </div>
  )
}
