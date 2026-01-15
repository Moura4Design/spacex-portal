import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <section className="relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          SpaceX Portal
        </h1>

        <p className="mt-4 text-white/80">
          Explora lançamentos, detalhes e links oficiais via API GraphQL
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild variant="secondary" size="lg">
            <Link href="/launches">Lançamentos</Link>
          </Button>

          <Link href="#about">
            <Button variant="secondary" size="lg">
              Sobre o projeto
            </Button>
          </Link>
        </div>

        <div id="about" className="mt-16 text-white/70">
          <h2 className="sr-only">Sobre o projeto</h2>
          <p>
            Projeto em Next.js (App Router), Tailwind e Apollo Client para consumir a API GraphQL da SpaceX.
          </p>
        </div>
      </section>
    </main>
  )
}
