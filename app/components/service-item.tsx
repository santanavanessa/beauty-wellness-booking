import Image from "next/image"
import { BarbershopService } from "../generated/prisma"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceitemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceitemProps) => {
  return (
    <>
      <Card>
        <CardContent className="flex items-center gap-3 p-3">
          {/* Imagem */}
          <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
            <Image
              alt={service.name}
              src={service.imageUrl}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          {/* Direita */}

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{service.name}</h3>
            <p className="text-sm text-gray-03">{service.description}</p>
            {/* Preço e botão */}
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-primary-purple">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>

              <Button className="gap-4 bg-gray-01" size="sm">
                Reservar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ServiceItem
