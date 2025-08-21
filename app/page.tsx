import Header from "./components/header"

import Image from "next/image"
import { db } from "./lib/prisma"
import { quickSearchOptions } from "./constants/search"
import BookingItem from "./components/booking-item"
import BarbershopItem from "./components/barbershop-item"
import Search from "./components/search"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Home = async () => {
  {
    /*Chamar a barbearia -> barbershop é o nome da tabela*/
  }

  const barbershops = await db.barbershop.findMany({})

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, pessoa!</h2>
        <p>Terça-feira, 22 de julho</p>

        {/* Busca */}

        <div className="mt-6">
          <Search />
        </div>

        {/* Busca Rápida */}

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="bg-secondary-black" key={option.title} asChild>
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  alt={option.title}
                  src={option.imageUrl}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/* Imagem */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores"
          />
        </div>

        {/* Agendamento */}
        <BookingItem />

        <h2 className="mt-6 mb-3 font-bold text-gray-03 uppercase">
          Recomendados
        </h2>
        <div className="borer-b flex gap-3 overflow-auto border-solid [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mt-6 mb-3 font-bold text-gray-03 uppercase">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
