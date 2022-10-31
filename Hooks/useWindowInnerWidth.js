import { useMemo, useSyncExternalStore } from 'react';

const useWindowInnerWidth = (serverFallback) => {
  const getServerSnapShot = () => serverFallback;

  const [getSnapShot, subscribe] = useMemo(() => {
    return [
      () => window.innerWidth,
      (notify) => {
        window.addEventListener('resize', notify);
        return () => {
          window.removeEventListener('resize', notify);
        };
      },
    ];
  }, []);

  return useSyncExternalStore(
    subscribe,
    typeof window !== 'undefined' ? getSnapShot : getServerSnapShot,
    getServerSnapShot,
  );
};

export default useWindowInnerWidth;
