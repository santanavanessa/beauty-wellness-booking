"use client"
// TODO: Receber agendamento como prop

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { format, isFuture } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Prisma } from "../generated/prisma"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import BookingSummary from "./booking-summary"
import PhoneItem from "./phone-item"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { toast } from "sonner"
import { deleteBooking } from "../actions/delete-booking"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: {
        include: {
          barbershop: true
        }
      }
    }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const {
    service: { barbershop },
  } = booking
  const isConfirmed = isFuture(booking.date)
  const handleCancelBooking = async () => {
    try {
      await deleteBooking(booking.id)
      setIsSheetOpen(false)
      toast.success("Reserva cancelada com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao cancelar reserva. Tente novamente.")
    }
  }
  const handleSheetOpenChange = (isOpen: boolean) => {
    setIsSheetOpen(isOpen)
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
      <SheetTrigger className="w-full min-w-[90%]">
        <Card className="min-w-[90%] p-0">
          <CardContent className="flex justify-between rounded-xl bg-secondary-black p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={booking.service.barbershop.imageUrl} />
                </Avatar>
                <p className="text-sm xl:text-base">
                  {booking.service.barbershop.name}
                </p>
              </div>
              <h3 className="xl:text-02 ml-8 text-start text-base font-semibold">
                {booking.service.name}
              </h3>
              <Badge
                className="ml-7 w-fit bg-dark-purple text-xs text-primary-purple lg:text-sm"
                variant={isConfirmed ? "default" : "secondary"}
              >
                {isConfirmed ? "Confirmado" : "Finalizado"}
              </Badge>
            </div>

            {/* Direita */}

            <div className="flex w-[110px] flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm capitalize">
                {format(booking.date, "MMMM", { locale: ptBR })}
              </p>
              <p className="text-2xl">
                {format(booking.date, "dd", { locale: ptBR })}
              </p>
              <p className="text-sm">
                {format(booking.date, "HH:mm", { locale: ptBR })}
              </p>
            </div>
          </CardContent>
        </Card>
      </SheetTrigger>
      <SheetContent className="w-[85%] overflow-y-auto bg-secondary-black">
        <SheetHeader>
          <SheetTitle className="text-left">Informações da Reserva</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-2 px-5 text-center sm:text-left">
          <div className="relative mt-6 flex h-[180px] w-full items-end">
            <Image
              src="/map.svg"
              alt={`Mapa da barbearia ${booking.service.barbershop.name}`}
              fill
              className="rounded-xl object-cover"
            />

            <Card className="z-50 mx-5 mb-3 w-full rounded-xl border bg-secondary-black p-0 shadow">
              <CardContent className="flex items-center gap-3 rounded-xl py-3">
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
        </div>
        <div className="my-6 px-5">
          <Badge
            className="w-fit bg-dark-purple text-primary-purple"
            variant={isConfirmed ? "default" : "secondary"}
          >
            {isConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>

          <div className="mt-6 mb-3">
            <BookingSummary
              barbershop={barbershop}
              service={booking.service}
              selectedDate={booking.date}
            />
          </div>

          <div className="space-y-3 p-5">
            {barbershop.phones.map((phone, index) => (
              <PhoneItem key={index} phone={phone} index={index} />
            ))}
          </div>
        </div>
        <SheetFooter className="mt-6">
          <div className="mx-2 flex flex-row space-x-2">
            <SheetClose asChild>
              <Button
                variant="outline"
                className="flex-1 hover:bg-background-black"
              >
                Voltar
              </Button>
            </SheetClose>
            {isConfirmed && (
              <Dialog>
                <DialogTrigger className="w-full" asChild>
                  <Button className="flex-1 border bg-red hover:bg-dark-red">
                    Cancelar Reserva
                  </Button>
                </DialogTrigger>
                <DialogContent className="flex max-w-[318px] flex-col content-center bg-background-black">
                  <DialogHeader className="flex space-y-1.5 text-center sm:text-left">
                    <DialogTitle>Você deseja cancelar sua reserva?</DialogTitle>
                    <DialogDescription>
                      Ao cancelar, você perderá sua reserva e não poderá
                      recuperá-la. Essa ação é irreversível.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex flex-1 flex-row justify-center gap-4">
                      <DialogClose asChild className="flex-1">
                        <Button
                          variant="outline"
                          className="hover:bg-secondary-black"
                        >
                          Voltar
                        </Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          onClick={handleCancelBooking}
                          className="flex-1 border bg-red hover:bg-dark-red"
                        >
                          Confirmar
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default BookingItem
