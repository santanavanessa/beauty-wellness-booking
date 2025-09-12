import Phoneitem from "@/app/components/phone-item"
import ServiceItem from "@/app/components/service-item"
import Sidebar from "@/app/components/sidebar"

import { db } from "@/app/lib/prisma"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  //Chamar o banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* Imagem */}

      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="outline"
          className="absolute top-4 left-4 cursor-pointer bg-secondary-black transition-colors hover:bg-gray-01"
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute top-4 right-4 cursor-pointer bg-secondary-black transition-colors hover:bg-gray-01"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <Sidebar />
        </Sheet>
      </div>

      {/* Título */}

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary-purple" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon
            className="fill-primary-purple text-primary-purple"
            size={18}
          />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* Descrição */}

      <div className="space-y-2 border-b border-solid p-5">
        <h2 className="text-xs font-bold text-gray-03 uppercase">Sobre nós</h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>

      {/* Serviços */}

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="text-xs font-bold text-gray-03 uppercase">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              barbershop={JSON.parse(JSON.stringify(barbershop))}
              service={JSON.parse(JSON.stringify(service))}
            />
          ))}
        </div>
      </div>

      {/* Contato */}

      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone, index) => (
          <Phoneitem phone={phone} index={index} key={`${phone}-${index}`} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
