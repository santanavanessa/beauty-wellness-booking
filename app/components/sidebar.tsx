"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Link from "next/link"
import { quickSearchOptions } from "../constants/search"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import SignInDialog from "./sign-in-dialog"

const Sidebar = () => {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="min-w-[250px] overflow-y-auto bg-secondary-black md:min-w-[300px] lg:min-w-[520px]">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid px-5 py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage
                src={data?.user?.image ?? ""}
                width={18}
                height={18}
              />
            </Avatar>

            <div>
              <p className="font-bold text-gray-03">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon" className="bg-primary-purple">
                  <LogInIcon />
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[90%] bg-secondary-black">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2 hover:bg-secondary-black"
            asChild
          >
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button
          className="justify-start gap-2 hover:bg-secondary-black"
          variant="ghost"
          asChild
        >
          <Link href="/bookings">
            <CalendarIcon size={18} />
            Agendamentos
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <div key={option.title}>
            <Button
              className="justify-start gap-2 hover:bg-secondary-black"
              variant="ghost"
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  height={18}
                  width={18}
                  className="float-left mr-2"
                />
                {option.title}
              </Link>
            </Button>
          </div>
        ))}
      </div>
      {data?.user && (
        <div className="flex flex-col gap-2 py-5">
          <Button
            variant="ghost"
            className="justify-start gap-2"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} />
            Sair da conta
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default Sidebar
