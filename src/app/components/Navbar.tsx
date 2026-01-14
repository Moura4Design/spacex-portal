import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link href="/" className="text-lg font-bold">
          SpaceX Portal
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <Link href="/launches">
            <Button variant="ghost">Lançamentos</Button>
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>

          <SheetContent side="right">
            <VisuallyHidden>
              <SheetTitle>Menu de navegação</SheetTitle>
            </VisuallyHidden>

            <div className="mt-6 flex flex-col gap-4">
              <Link href="/launches">
                <Button variant="ghost" className="w-full">
                  Lançamentos
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  )
}
