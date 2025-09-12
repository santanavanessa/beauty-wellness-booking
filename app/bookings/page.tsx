import { getServerSession } from "next-auth"
import Header from "../components/header"
import { authOptions } from "../lib/auth"
import { db } from "../lib/prisma"
import { notFound } from "next/navigation"
import BookingItem from "../components/booking-item"
import { getConfirmedBookings } from "../data/get-confirmed-bookings"
import { getConcludedBookings } from "../data/get-concluded-bookings"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    // TODO mostrar pop-up de login
    return notFound()
  }

  const confirmedBookings = await getConfirmedBookings()

  const concludedBookings = await getConcludedBookings()
  return (
    <>
      <Header />
      <div className="space-y-5 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-gray-02">Você não tem agendamentos.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mt-6 mb-3 text-xs font-bold text-gray-02 uppercase">
              Confirmados
            </h2>
          </>
        )}
      </div>
    </>
  )
}

export default Bookings
