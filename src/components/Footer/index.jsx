import Link from "next/link";

const Footer = ({data}) => {
    return (
        <div className="relative text-xs font-medium text-[#5C5E62] mt-4 z-30 flex items-center justify-center w-full">
         <nav className="flex gap-3">
             {
                 data?.map((item, i) => (
                     <Link key={i} href="/">{item}</Link>
                 ))
             }
         </nav>
        </div>
    );
};

export default Footer;
