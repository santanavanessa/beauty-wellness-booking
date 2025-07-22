import { SearchIcon } from "lucide-react";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "@/app/components/ui/input";
import Image from "next/image";

const Home = () => {
  return ( 
    <div>
      {/* Header */}
      <Header/>
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, pessoa!</h2>
        <p>Terça-feira, 22 de julho</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button className="bg-primary-purple">
            <SearchIcon/>
          </Button>
        </div>

       <div className="relative w-full mt-6 h-[150px]">
         <Image src="/banner-01.svg" fill className="object-cover rounded-xl" alt="Agende nos melhores"/>
       </div>
      </div>
      
    </div>
   );
}
 
export default Home;