import Header from "./components/header"

import Image from "next/image"
import { db } from "./lib/prisma"
import { quickSearchOptions } from "./constants/search"
import BookingItem from "./components/booking-item"
import BarbershopItem from "./components/barbershop-item"
import Search from "./components/search"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getServerSession } from "next-auth"
import { authOptions } from "./lib/auth"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./data/get-confirmed-bookings"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const confirmedbookings = await getConfirmedBookings()

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="p-5 lg:px-14">
        <h2 className="text-xl font-bold lg:text-2xl">
          Olá, {session?.user ? session.user.name + "!" : " boas-vindas!"}
        </h2>

        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span>{format(new Date(), "MMMM", { locale: ptBR })}</span>
        </p>

        {/* Busca */}

        <div className="mt-6 xl:mt-10">
          <Search />
        </div>

        {/* Busca Rápida */}

        <div className="mt-6 flex w-full gap-3 overflow-x-scroll lg:hidden [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-1 bg-gray-01 text-sm font-semibold"
              key={option.title}
              asChild
            >
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

        {/* Banner */}
        <div className="relative mt-6 h-[170px] w-full object-fill sm:h-[250px] md:h-[300px] lg:h-[480px]">
          <Image
            src="/banner-01.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos melhores com Trimmr"
          />
        </div>

        {confirmedbookings.length > 0 && (
          <div>
            <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase lg:text-sm">
              Agendamentos
            </h2>

            {/* AGENDAMENTO */}
            <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
              {confirmedbookings.map((booking) => (
                <BookingItem
                  key={booking.id}
                  booking={JSON.parse(JSON.stringify(booking))}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="p-5 lg:px-14">
        <h2 className="mt-6 mb-3 font-bold text-gray-03 uppercase lg:mt-0 lg:text-sm">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="p-5 lg:px-14">
        <h2 className="mb-3 font-bold text-gray-03 uppercase lg:text-sm">
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
