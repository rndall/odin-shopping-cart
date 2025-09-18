import Loader from "../ui/Loader/Loader"

interface StatusHandlerProps {
  loading?: boolean
  error?: string
}

export default function StatusHandler({ loading, error }: StatusHandlerProps) {
  if (!loading && !error) return null

  const status = loading ? <Loader size={48} /> : error

  return (
    <div className="grid h-[80dvh] place-items-center">
      <p>{status}</p>
    </div>
  )
}
