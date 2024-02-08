import Image from "next/image";

const Logo = () => {
    return ( 
        <Image
            width={40}
            height={40}
            alt="Logo"
            src="/logo.svg"/>
     );
}
 
export default Logo;