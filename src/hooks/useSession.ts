import { useCallback, useEffect, useState } from "react";

export function useSession() {
  const [session, setSession] = useState(true);

  const callSession = useCallback(async () => {
    const response = await fetch("/api/session");

    if (response.ok) setSession(true);
    else setSession(false);
  }, []);
  useEffect(() => {
    callSession();
  }, [callSession]);

  return { session };
}
