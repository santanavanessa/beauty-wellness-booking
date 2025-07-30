import Image from "next/image";
import { Barbershop } from "../generated/prisma";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] p-0 bg-secondary-black mb-6">
            <CardContent className="p-0">
                {/* Imagem */}
                <div className="relative h-[159px] w-full">
                    <Image alt={barbershop.name} fill className="object-cover rounded-t-2xl" src={barbershop.imageUrl}/>

                    <Badge className="absolute left-2 top-2 bg-dark-purple/70  z-50" variant="secondary">
                        <StarIcon size={12} className="fill-primary-purple text-primary-purple"/>
                        <p className="font-semibold text-xs">5,0</p>
                    </Badge>
                </div>

                {/* Texto */}
                <div className="px-2 py-3">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-03 truncate">{barbershop.address}</p>
                    <Button className="mt-3 w-full bg-gray-01" asChild>
                        <Link href={`/barbershops/${barbershop.id}`}>
                            Reservar
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;