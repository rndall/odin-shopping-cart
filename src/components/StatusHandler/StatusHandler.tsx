import style from "./StatusHandler.module.css";

import Loader from "../ui/Loader/Loader";

interface StatusHandlerProps {
  loading?: boolean;
  error?: string;
}

export default function StatusHandler({ loading, error }: StatusHandlerProps) {
  if (!loading && !error) return null;

  const status = loading ? <Loader size={48} /> : error;

  return (
    <div className={style.statusHandler}>
      <p>{status}</p>
    </div>
  );
}
