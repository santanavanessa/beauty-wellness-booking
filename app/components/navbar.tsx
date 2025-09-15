"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, LogInIcon } from "lucide-react"
import Link from "next/link"
import SignInDialog from "./sign-in-dialog"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"

export function Navbar() {
  const { data } = useSession()
  return (
    <div className="hidden md:flex md:justify-between">
      <Button className="gap-4 text-sm font-bold" variant="ghost" asChild>
        <Link href="/bookings">
          <Calendar size={18} />
          Agendamentos
        </Link>
      </Button>
      {data?.user ? (
        <div className="mx-6 flex items-center">
          <Avatar className="mx-4">
            <AvatarImage src={data?.user?.image ?? ""} width={36} height={36} />
          </Avatar>
          <div>
            <p className="text-sm font-bold">{data.user.name}</p>
          </div>
        </div>
      ) : (
        <>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-xl border-none text-sm font-bold"
              >
                Login
              </Button>
            </DialogTrigger>

            <DialogContent className="w-[90%] bg-secondary-black">
              <SignInDialog />
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}
