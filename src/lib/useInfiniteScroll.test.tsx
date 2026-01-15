import { describe, it, expect, vi, beforeEach } from "vitest";
import { useRef } from "react";
import { render } from "@testing-library/react";
import { useInfiniteScroll } from "./useInfiniteScroll";

// mock do IntersectionObserver
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  observe = vi.fn();
  disconnect = vi.fn();

  constructor(cb: IntersectionObserverCallback) {
    this.callback = cb;
  }

  trigger(isIntersecting: boolean) {
    const entry = [{ isIntersecting }] as IntersectionObserverEntry[];
    this.callback(entry, this as unknown as IntersectionObserver);
  }
}

describe("useInfiniteScroll", () => {
  let instance: MockIntersectionObserver | null = null;

 beforeEach(() => {
  instance = null;

  const IO = class {
    constructor(cb: IntersectionObserverCallback) {
      instance = new MockIntersectionObserver(cb);
      return instance;
    }
  };

  (window as any).IntersectionObserver = IO;
});


  function TestComponent({
    enabled,
    onLoadMore,
  }: {
    enabled: boolean;
    onLoadMore: () => void;
  }) {
    const ref = useRef<HTMLDivElement | null>(null);

    useInfiniteScroll({
      targetRef: ref,
      enabled,
      onLoadMore,
    });

    return <div ref={ref} />;
  }

  it("chama onLoadMore quando entra em interseção", () => {
    const onLoadMore = vi.fn();

    render(<TestComponent enabled={true} onLoadMore={onLoadMore} />);

    instance!.trigger(true);

    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it("não observa quando enabled = false", () => {
    const onLoadMore = vi.fn();

    render(<TestComponent enabled={false} onLoadMore={onLoadMore} />);

    expect(onLoadMore).not.toHaveBeenCalled();
  });
});
