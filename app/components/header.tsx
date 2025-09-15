import Image from "next/image"
import { MenuIcon } from "lucide-react"

import Sidebar from "./sidebar"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Navbar } from "./navbar"

const Header = () => {
  return (
    <Card className="w-full rounded-none">
      <CardContent className="flex flex-row items-center justify-between gap-10 p-5 lg:px-14">
        <Link href="/">
          <Image alt="Trimmr" src="/logo.svg" height={18} width={120} />
        </Link>

        <div className="flex items-center justify-between gap-1">
          <Navbar />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="cursor-pointer transition-colors hover:bg-gray-01"
              >
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
