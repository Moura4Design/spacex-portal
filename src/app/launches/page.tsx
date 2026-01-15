"use client";

import { useQuery } from "@apollo/client/react";
import { GET_LAUNCHES_PAST } from "@/graphql/queries";
import type { GetLaunchesPastData, GetLaunchesPastVars } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { LaunchesLoading } from "@/components/layout/launches/launches-table-skeleton";
import { useInfiniteScroll } from "@/lib/useInfiniteScroll";
import { useRef, useState, useCallback, useId } from "react";
import { LaunchesMobileList } from "@/components/layout/launches/LaunchesMobileList";
import { LaunchesTable } from "@/components/layout/launches/LaunchesTable";

const PAGE_SIZE = 30;

export default function LaunchesPage() {
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const statusId = useId();

  const { data, loading, error, fetchMore, refetch } = useQuery<
    GetLaunchesPastData,
    GetLaunchesPastVars
  >(GET_LAUNCHES_PAST, {
    variables: { limit: PAGE_SIZE, offset: 0 },
    notifyOnNetworkStatusChange: true,
  });

  const launches = data?.launchesPast ?? [];
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || isFetchingMore || !hasMore) return;

    setIsFetchingMore(true);
    try {
      const res = await fetchMore({
        variables: { limit: PAGE_SIZE, offset: launches.length },
          updateQuery: (prev, { fetchMoreResult }) => {
            const newItems = fetchMoreResult?.launchesPast ?? [];
            if (newItems.length === 0) {
              setHasMore(false);
              return prev;
            }
            if (newItems.length < PAGE_SIZE) setHasMore(false);
            return { ...prev, launchesPast: [...prev.launchesPast, ...newItems] };
          },
        });

      } finally {
        setIsFetchingMore(false);
      }
    }, [fetchMore, hasMore, isFetchingMore, launches.length, loading]);

  useInfiniteScroll({
    targetRef: sentinelRef,
    enabled: hasMore && !loading && !isFetchingMore,
    onLoadMore: loadMore,
  });


  function formatDate(iso: string) {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "—";
    return d.toLocaleDateString("pt-PT", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }
  // console.log("laumches ===>", launches)
  if (loading && launches.length === 0) return <LaunchesLoading />;

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-12">
        <p
          role="alert"
          className="mx-auto max-w-md rounded-md border bg-muted px-3 py-2 text-center text-sm"
        >
          Erro ao carregar dados.
          <Button
            onClick={() => refetch()}
            size="sm"
            variant="link"
            className="ml-2 h-auto p-0"
          >
            Tentar novamente
          </Button>
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12" aria-describedby={statusId}>
      <h1 className="mb-8 text-3xl font-bold text-center">Lista de Lançamentos</h1>
      {/* Mobile list */}
      <LaunchesMobileList
        launches={launches}
        formatDate={formatDate}
      />

      {/* DESKTOP/TABLET: tabela */}
      <LaunchesTable
        launches={launches}
        formatDate={formatDate}
      />
      <div ref={sentinelRef} className="h-10" aria-hidden="true" />
      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className="mt-4 text-center text-sm"
      >
        {isFetchingMore
          ? "A carregar mais lançamentos…"
          : hasMore
            ? " "
            : "Chegaste ao fim da lista."}
      </p>
    </main>
  );
}


