import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Navbar() {
  return (
    <header>
      <nav className="w-full border-b bg-slate-950 text-white" aria-label="Navegação principal">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold">
            SpaceX Portal
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-4">
            <Button asChild variant="ghost">
              <Link href="/launches">Lançamentos</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="text-black">
              <VisuallyHidden>
                <SheetTitle>Menu de navegação</SheetTitle>
                <SheetDescription>
                  Menu principal para navegação do portal SpaceX
                </SheetDescription>
              </VisuallyHidden>

              <div className="mt-6 flex flex-col gap-4">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/launches">Lançamentos</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
