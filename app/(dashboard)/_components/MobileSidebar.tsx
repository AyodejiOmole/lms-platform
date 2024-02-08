import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const MobileSidebar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 yransition">
                <Menu className="cursor-pointer"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <Sidebar/>
            </SheetContent>
        </Sheet>
        
     );
}
 
export default MobileSidebar;