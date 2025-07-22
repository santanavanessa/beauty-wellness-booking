import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
    return ( 
        <Card className="rounded-none">
            <CardContent className="p-5 flex flex-row justify-between items-center">
                <Image alt="Trimmr" src="/logo.svg" height={18} width={120}/>   
                <Button size="icon" variant="outline">
                    <MenuIcon/>
                </Button>    
            </CardContent>
        </Card>
     );
}
 
export default Header;