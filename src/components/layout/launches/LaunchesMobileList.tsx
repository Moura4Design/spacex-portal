import Link from "next/link";
import { Button } from "@/components/ui/button";

type LaunchItem = {
  id: string;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean | null;
};

export function LaunchesMobileList({
  launches,
  formatDate,
}: {
  launches: LaunchItem[];
  formatDate: (iso: string) => string;
}) {
  return (
    <section className="md:hidden space-y-3" aria-label="Lista de lançamentos">
      {launches.map((launch) => {

        return (
          <article
            key={launch.id}
            className="rounded-lg border bg-muted p-4 text-foreground"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="truncate text-base font-semibold">
                  {launch.mission_name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {formatDate(launch.launch_date_utc)}
                </p>
              </div>

              <span className="shrink-0 rounded-full border px-2 py-1 text-xs">
               
              </span>
            </div>

            <div className="mt-3 flex justify-end">
              <Button asChild size="sm" className="h-8 px-3 text-xs">
                <Link href={`/launches/${launch.id}`}>Detalhes</Link>
              </Button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
