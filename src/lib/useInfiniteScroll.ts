"use client";

import { useEffect } from "react";

type Props = {
  targetRef: React.RefObject<Element | null>;
  enabled: boolean;
  onLoadMore: () => void;
};

export function useInfiniteScroll({
  targetRef,
  enabled,
  onLoadMore,
}: Props) {
  useEffect(() => {
    if (!enabled) return;
    const el = targetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onLoadMore();
      },
      { rootMargin: "400px" } // load before reaching the end
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, onLoadMore, targetRef]);
}
