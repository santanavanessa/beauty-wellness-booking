import Image from "next/image"
import { Barbershop } from "../generated/prisma"

import { StarIcon } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="mb-6 min-w-[167px] bg-secondary-black p-0">
      <CardContent className="p-0">
        {/* Imagem */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-t-2xl object-cover"
            src={barbershop.imageUrl}
          />

          <Badge
            className="absolute top-2 left-2 z-50 bg-dark-purple/70"
            variant="secondary"
          >
            <StarIcon
              size={12}
              className="fill-primary-purple text-primary-purple"
            />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        {/* Texto */}
        <div className="px-2 py-3">
          <h3 className="truncate font-semibold">{barbershop.name}</h3>
          <p className="truncate text-sm text-gray-03">{barbershop.address}</p>
          <Button className="mt-3 w-full bg-gray-01 font-semibold" asChild>
            <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
