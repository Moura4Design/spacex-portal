import { Skeleton } from "@/components/ui/skeleton";

export function LaunchesLoading() {
  return (
    <div
      className="flex min-h-[40vh] flex-col items-center justify-center gap-4 px-4 text-center"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="A carregar dados"
    >
      <Skeleton className="h-8 w-48 rounded-md sm:w-56" />
      {/* Visible text */}
      <p className="text-sm">
        A carregar dados…
      </p>

      {/* Screen reader–only text */}
      <span className="sr-only">
        Os dados estão a ser carregados, por favor aguarde
      </span>
    </div>
  );
}

