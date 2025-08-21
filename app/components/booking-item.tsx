// TODO: Receber agendamento como prop

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const BookingItem = () => {
  return (
    <>
      <h2 className="mt-6 mb-3 font-bold text-gray-03 uppercase">
        Agendamentos
      </h2>

      <Card className="bg-secondary-black p-0">
        <CardContent className="flex justify-between p-0">
          {/* Esquerda */}

          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit bg-dark-purple text-primary-purple">
              Confirmado
            </Badge>
            <h3 className="font-bold">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage src="https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png" />
              </Avatar>
              <p>Barbearia Corte & Estilo</p>
            </div>
          </div>

          {/* Direita */}

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Julho</p>
            <p className="text-2xl">22</p>
            <p className="text-sm">21:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
