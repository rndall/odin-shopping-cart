import { cn } from "@/lib/utils"

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:max-w-[40rem] sm:px-8 md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] 2xl:max-w-[96rem]",
        className,
      )}
    >
      {children}
    </div>
  )
}
