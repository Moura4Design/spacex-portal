import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <p>Lançamento não encontrado.</p>
      <Link className="underline" href="/launches">
        Voltar
      </Link>
    </main>
  );
}