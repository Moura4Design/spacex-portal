import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { spacexGraphQL } from "@/lib/serverFetch";
import { GET_LAUNCH_DETAILS_SSR } from "@/graphql/queries";
import type { LaunchDetailsData } from "@/lib/types";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let data: LaunchDetailsData;

  try {
    data = await spacexGraphQL<LaunchDetailsData>(GET_LAUNCH_DETAILS_SSR, { id });
  } catch {
    throw new Error("Não foi possível carregar os detalhes deste lançamento.");
  }

  // Ensures the launch is matched by id (without relying on index [0])
  const launch = data.launchesPast?.find((l) => l.id === id) ?? null;

  if (!launch) notFound();

  const img =
    launch.links?.mission_patch_small ||
    launch.links?.flickr_images?.find((x): x is string => !!x) ||
    null;

  const missionName = launch.mission_name ?? "Indisponível";
  const rocketName = launch.rocket?.rocket_name ?? "Indisponível";
  const detailsText = launch.details ?? "Sem descrição disponível.";

  return (
    <main className="mx-auto max-w-4xl p-6" aria-labelledby="page-title">
      <Card className="mt-6">
        <CardHeader>
          <h1 id="page-title" className="text-2xl font-semibold leading-tight">
            Detalhes do lançamento
          </h1>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="shrink-0">
              {img ? (
                <Image
                  src={img}
                  alt={`Emblema da missão ${missionName}`}
                  width={80}
                  height={80}
                  className="rounded"
                />
              ) : (
                <div className="h-[80px] w-[80px] rounded bg-muted" aria-hidden="true" />
              )}
            </div>

            <dl className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <dt className="font-semibold">Nome da missão:</dt>
                <dd className="text-foreground">{missionName}</dd>
              </div>

              <div className="flex flex-wrap items-baseline gap-2">
                <dt className="font-semibold">Foguete:</dt>
                <dd className="text-foreground">{rocketName}</dd>
              </div>
            </dl>
          </div>


          <section aria-labelledby="descricao-title" className="space-y-2">
            <h2 id="descricao-title" className="font-semibold">Descrição</h2>
            <p className="text-sm text-muted-foreground">{detailsText}</p>
          </section>

          {(launch.links?.wikipedia || launch.links?.video_link) && (
            <nav aria-label="Links relacionados" className="flex flex-col gap-2 sm:flex-row sm:gap-4 text-sm">
              {launch.links?.wikipedia ? (
                <a
                  className="underline"
                  href={launch.links.wikipedia}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Wikipedia numa nova aba"
                >
                  Wikipedia <span className="sr-only">(abre numa nova aba)</span>
                </a>
              ) : null}

              {launch.links?.video_link ? (
                <a
                  className="underline"
                  href={launch.links.video_link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir vídeo do YouTube numa nova aba"
                >
                  Vídeo (YouTube){" "}
                  <span className="sr-only">(abre numa nova aba)</span>
                </a>
              ) : null}
            </nav>
          )}
        </CardContent>

        <CardFooter className="flex justify-end">
          <Link className="text-sm underline" href="/launches">
            Voltar à lista
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
