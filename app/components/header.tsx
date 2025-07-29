import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import {
  Sheet, SheetTrigger
} from "./ui/sheet"
import Sidebar from "./sidebar"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image alt="Trimmr" src="/logo.svg" height={18} width={120} />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4 cursor-pointer hover:bg-gray-01 transition-colors"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
