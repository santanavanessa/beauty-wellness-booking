"use client"

import { SmartphoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PhoneItemProps {
    phone: string
    index: number
}
const Phoneitem = ({phone, index}: PhoneItemProps) => {

    
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone);
    toast.success("Telefone copiado com sucesso!");
  }


    return ( 
         <div className="flex justify-between" key={`${phone}-${index}`}>
            {/* Esquerda */}
            <div className="flex items-center gap-2">
              <SmartphoneIcon/>
              <p className="text-sm">{phone}</p>
            </div>

            {/* Direita */}

            <Button variant="outline" 
              onClick={() => handleCopyPhoneClick(phone)}
              className="border-gray-01 cursor-pointer"
              size="sm"  
            >
              Copiar
            </Button>
          </div>
     );
}
 
export default Phoneitem;