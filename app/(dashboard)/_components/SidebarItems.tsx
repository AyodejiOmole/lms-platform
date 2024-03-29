"use client";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

const SidebarItem = ({
    icon: Icon,
    label,
    href
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`)
    
    const handleClick = () => {
        router.push(href);
    }
    return ( 
        <button
            onClick={handleClick}
            type="button"
            className={`flex items-center gap-x-2 text-slate-500 transition-all hover:text-slate-500 text-sm font-[500] pl-6 hover:bg-slate-300/20 ${isActive ? "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700" : ""}`}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon
                    size={22}
                    className={`text-slate-500 ${isActive && "text-sky-700"}`}
                />
                {label}
            </div>

            <div className={`ml-auto opacity-0 border-2 border-sky-700 h-full transition-all ${isActive && "opacity-100"}`}/>
        </button>
    );
}
 
export default SidebarItem;