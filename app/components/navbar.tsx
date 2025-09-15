"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="hidden md:flex">
      <Button className="justify-start gap-2 text-sm" variant="ghost" asChild>
        <Link href="/bookings">
          <Calendar size={18} />
          Agendamentos
        </Link>
      </Button>
    </div>
  )
}
