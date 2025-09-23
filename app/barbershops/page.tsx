import BarbershopItem from "../components/barbershop-item"
import Header from "../components/header"
import Search from "../components/search"
import { db } from "../lib/prisma"

interface BarbershopsPageProps {
  searchParams?: Promise<{
    title?: string
    service?: string
  }>
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  // ✅ resolve a Promise
  const resolvedSearchParams = await searchParams

  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        resolvedSearchParams?.title
          ? {
              name: {
                contains: resolvedSearchParams.title,
                mode: "insensitive",
              },
            }
          : {},
        resolvedSearchParams?.service
          ? {
              services: {
                some: {
                  name: {
                    contains: resolvedSearchParams.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="w-full gap-3 p-5 lg:px-14">
        <Search />
      </div>
      <div className="mb-5 px-5 lg:px-14">
        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-03 uppercase lg:text-sm">
          Resultados para &quot;
          {resolvedSearchParams?.title || resolvedSearchParams?.service}
          &quot;
        </h2>
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopsPage
