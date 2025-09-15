import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Barbershop } from "../generated/prisma"

interface BarbershopInfoProps {
  barbershop: Barbershop
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  return (
    <div className="relative flex h-[180px] w-full items-end">
      <Image
        alt={`Mapa da barbearia ${barbershop.name}`}
        src="/map.svg"
        fill
        className="rounded-xl object-cover"
      />

      <Card className="z-50 mx-5 mb-3 w-full border-0 lg:mx-12 lg:mb-5">
        <CardContent className="mx-auto my-auto flex w-fit items-center gap-3 rounded-xl bg-background-black px-5 py-3">
          <Avatar>
            <AvatarImage src={barbershop.imageUrl} />
          </Avatar>

          <div>
            <h3 className="font-bold">{barbershop.name}</h3>
            <p className="text-xs">{barbershop.address}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
