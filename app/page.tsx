import { SearchIcon } from "lucide-react"
import Header from "./components/header"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { Avatar, AvatarImage } from "./components/ui/avatar"
import { db } from "./lib/prisma"
import BarbershopItem from "./components/barbershop-item"


const Home =  async () => {

  {/*Chamar a barbearia -> barbershop é o nome da tabela*/}

  const barbershops = await db.barbershop.findMany({});

  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    }
  })

  return (
    <div>
      {/* Header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, pessoa!</h2>
        <p>Terça-feira, 22 de julho</p>

        {/* Busca */}

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."  className="bg-secondary-black"/>
          <Button className="bg-primary-purple">
            <SearchIcon />
          </Button>
        </div>

        {/* Busca Rápida */}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="bg-secondary-black">
            <Image alt="serviços cabelo" src="/cabelo.png" width={16} height={16}/>
            Cabelo
          </Button>
          <Button className="bg-secondary-black">
            <Image alt="serviços barba" src="/barba.png" width={16} height={16}/>
            Barba
          </Button>
          <Button className="bg-secondary-black">
            <Image alt="serviços de acabamento" src="/acabamento.png" width={16} height={16}/>
            Acabamento
          </Button>
           <Button className="bg-secondary-black">
            <Image alt="serviços de sobrancelha" src="/sobrancelha.png" width={16} height={16}/>
            Sobrancelha
          </Button>
           <Button className="bg-secondary-black">
            <Image alt="serviços de massagem" src="/massagem.png" width={16} height={16}/>
            Massagem
          </Button>
           <Button className="bg-secondary-black">
            <Image alt="serviços de hidratação" src="/hidratacao.png" width={16} height={16}/>
            Hidratação
          </Button>
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

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-03 ">Agendamentos</h2>

        <Card className="p-0 bg-secondary-black">
          <CardContent className="flex justify-between p-0">
           {/* Esquerda */}

           <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit bg-dark-purple text-primary-purple">Confirmado</Badge>
            <h3 className="font-bold">Corte de Cabelo</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage  
                  src="https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png"/>
              </Avatar>
              <p>Barbearia Corte & Estilo</p>
            </div>
           </div>

           {/* Direita */}
          
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">22</p>
              <p className="text-sm">21:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-03 ">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden ">
          {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
        ))}
        </div>

        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-03 ">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden ">
          {popularBarbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
        ))}
        </div>
      </div>

      {/* Footer */}

     <footer>
       <Card className="rounded-none">
        <CardContent className="p-5 text-center">
          <p className="text-sm text-gray-03">
            Desenvolvido com 🤍 por {" "}
            <span className="hover:cursor-pointer">
              <a 
                href="https://www.linkedin.com/in/vanessa-a-santana/" 
                className="hover:underline underline-offset-2 font-bold text-primary-purple" target="_blank">
              Vanessa Santana</a>
            </span>
          </p>
        </CardContent>
      </Card>
     </footer>
    </div>
  )
}

export default Home
