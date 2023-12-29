import { useCallback, useEffect, useState } from "react";

export function useSession() {
  const [session, setSession] = useState(false);

  const callSession = useCallback(async () => {
    const response = await fetch("/api/session");
    console.log(response.ok);

    if (response.ok) setSession(true);
    else setSession(false);
  }, []);
  useEffect(() => {
    callSession();
  }, [callSession]);

  return { session };
}
