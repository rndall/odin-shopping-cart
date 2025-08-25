import style from "./StatusHandler.module.css"

export default function StatusHandler({ loading, error }: { loading: boolean, error: string }) {
  if (!loading && !error) return null

  const status = loading ? "Loading..." : error;

  return (
    <div className={style.statusHandler}>
      <p>{status}</p>
    </div>
  )
}

