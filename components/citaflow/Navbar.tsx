import Link from "next/link";
import { ArrowRightIcon, SquareCheckBig } from "lucide-react";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-[#F5F2EE]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-green-900 p-2">
            <SquareCheckBig className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">CitaFlow</span>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/automations"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Automatizaciones
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Dashboard
          </Link>
          <Button className="bg-green-900 hover:bg-green-950">
            Ver demo <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}