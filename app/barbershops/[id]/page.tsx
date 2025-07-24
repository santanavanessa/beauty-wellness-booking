import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
    params: {
        id: string;
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    // Chamar o meu banco de dados

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        }
    })

    if (!barbershop) {
    return notFound()
  }

    return ( 

      <div>
         {/* Imagem */}
         
         <div className="relative w-full h-[250px]">
         

        <Image alt={barbershop?.name} src={barbershop?.imageUrl} fill className="object-cover"/>

        <Button size="icon" className=" bg-secondary-black absolute left-4 top-4">
            <ChevronLeftIcon/>
        </Button>

         <Button size="icon" className=" bg-secondary-black absolute left-4 top-4" asChild>
            <Link href="/">
                <ChevronLeftIcon/>
            </Link>
         </Button>
        <MenuIcon className="bg-secondary-black absolute right-4 top-4"/>
       </div>
       <div className="p-5 border-b border-solid">
        <h1 className="mb-3 text-xl font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
            <MapPinIcon className="text-primary-purple" size={18}/>
            <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
            <StarIcon className="fill-primary-purple text-primary-purple" size={18}/>
            <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
        </div>
        {/* Descrição */}

         <div className="border-b border-solid p-5 space-y-2">
            <h2 className="mb-3 text-xs font-bold uppercase text-gray-03">Sobre nós</h2>
            <p className="text-justify text-sm">{barbershop?.description}</p>
        </div>
       
      </div>

       

        
     );
}
 
export default BarbershopPage;