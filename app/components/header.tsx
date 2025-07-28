import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Trimmr" src="/logo.svg" height={18} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="cursor-pointer">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background-black overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="px-5 pb-5 border-b flex items-center border-solid gap-3">
              <Avatar>
                <AvatarImage src="/avatar-image.jpg"/>
              </Avatar>

              <div>
                <p  className="font-bold">Fulano de Tal</p>
                <p className="text-xs">enderecodeemail@email.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              <SheetClose asChild>
                <Button className="justify-start gap-2 hover:bg-secondary-black" asChild>
                <Link href="/">
                  <HomeIcon size={18} />
                  Início
                </Link>
                </Button>
              
              </SheetClose>
              <Button className="justify-start gap-2 hover:bg-secondary-black" variant="ghost">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
                
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.title}
                  className="justify-start gap-2 hover:bg-secondary-black"
                  variant="ghost"
                >
                  <Image
                    alt={option.title}
                    src={option.imageUrl}
                    height={18}
                    width={18}
                  />
                  {option.title}
                </Button>
              ))}
            </div>
          
            <div className="flex flex-col gap-2 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18}/>
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
