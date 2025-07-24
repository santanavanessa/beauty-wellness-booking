import BarbershopItem from "./barbershop-item";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO: Receber agendamento como prop

const BookingItem = () => {
    return ( 
        <>
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

        

        </>
     );
}
 
export default BookingItem;