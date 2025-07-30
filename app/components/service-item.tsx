"use client"

import Image from "next/image"
import { BarbershopService } from "../generated/prisma"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import { ptBR } from "date-fns/locale"
import { useState } from "react"
import { time } from "console"

interface ServiceitemProps {
  service: Omit<BarbershopService, "price"> & { price: number }
}

const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00"
]

const ServiceItem = ({ service }: ServiceitemProps) => {
  const [selectedDay, setSelectadDay] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const handleDateSelect = (date: Date | undefined) => {
    setSelectadDay(date)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }
  return (
    <>
      <Card className="bg-secondary-black">
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

              <Sheet>
                <SheetTrigger asChild>
                  <Button className="gap-4 bg-gray-01" size="sm">
                    Reservar
                  </Button>
                </SheetTrigger>
                <SheetContent className="items-center bg-secondary-black  overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Fazer Reserva</SheetTitle>
                  </SheetHeader>

                  <div className="border-b border-solid py-5 lg:py-1">
                    <Calendar
                      className="flex justify-center"
                      mode="single"
                      locale={ptBR}
                      selected={selectedDay}
                      onSelect={handleDateSelect}
                      fromDate={new Date()}
                      styles={{
                        head_cell: {
                          width: "100%",
                          textTransform: "capitalize",
                        },
                        cell: {
                          width: "100%",
                        },
                        button: {
                          width: "100%",
                        },
                        nav_button_previous: {
                          width: "32px",
                          height: "32px",
                        },
                        nav_button_next: {
                          width: "32px",
                          height: "32px",
                        },
                        caption: {
                          textTransform: "capitalize",
                        },
                        months: {
                          width: "100%",
                        },
                        month: {
                          width: "100%",
                        },
                        table: {
                          width: "100%",
                        },
                      }}
                    />
                  </div>

                  {selectedDay && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-6">
                    {TIME_LIST.map((time) => (
                     <div>
                       <Button
                        key={time}
                        variant="outline"
                        className={selectedTime === time ? "rounded-full bg-primary-purple" : "rounded-full"}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                     </div>
                    ))}
                  </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ServiceItem
