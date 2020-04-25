import { useEffect, useState } from "react";
import { Network } from "@ionic-native/network";

export default function useNetwork() {
  const [networkState, setNetworkState] = useState<{
    type: string;
    downlinkMax: string;
  }>();
  useEffect(() => {
    setNetworkState({ type: Network.type, downlinkMax: Network.downlinkMax });
    const subscription = Network.onChange().subscribe(() =>
      setNetworkState({ type: Network.type, downlinkMax: Network.downlinkMax })
    );

    return () => subscription.unsubscribe();
  }, []);
  return networkState;
}
