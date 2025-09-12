import { Card, CardContent } from "@/components/ui/card"
import { Barbershop, BarbershopService } from "../generated/prisma"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

interface BookingSummaryProps {
  service: Pick<BarbershopService, "name" | "price">
  barbershop: Pick<Barbershop, "name">
  selectedDate: Date
}

const BookingSummary = ({
  service,
  barbershop,
  selectedDate,
}: BookingSummaryProps) => {
  return (
    <Card>
      <CardContent className="space-y-3 p-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{service.name}</h2>
          <p className="text-sm font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(service.price))}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-02">Data</h2>
          <p>
            {format(selectedDate, "d, 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-gray-02">Horário</h2>
          <p>{format(selectedDate, "HH:mm")}</p>
        </div>

        <div>
          <h2 className="text-sm text-gray-02">Barbearia</h2>
          <p>{barbershop.name}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default BookingSummary
