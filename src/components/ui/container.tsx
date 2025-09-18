import { cn } from "@/lib/utils"

interface ContainerProps extends React.ComponentProps<"div"> {
  children: React.ReactNode
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container, px-4, sm:px-8, mx-auto", className)}>
      {children}
    </div>
  )
}
