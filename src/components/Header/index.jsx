"use client"
import {useState, useEffect} from 'react';
import {usePathname} from 'next/navigation';
import Tesla from "@/components/Tesla";
import {useDispatch} from 'react-redux';
import {toggleMenu} from '@/redux/tesla-slider';

const Header = ({data}) => {
    const [sticky, setSticky] = useState(0)
    const dispatch = useDispatch()
    const pathname = usePathname()


    useEffect(() => {
        window.addEventListener("scroll", () => {
            setSticky(window.scrollY)
        })
    }, [sticky]);

    const handleClick = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className={`${pathname === "/drive" || sticky > 500 ? "text-gray-900" : "text-white" } flex h-14 items-center justify-between px-12 ${pathname !== "/drive" && "fixed" } bg-transparent w-full top-[52px] z-10`}>
            <Tesla/>
            <div className="flex gap-20">
                <nav className="flex gap-4 text-sm font-medium">
                    {data?.slice(0,7).map(item => (
                        <div className="h-8 cursor-pointer flex items-center rounded hover:bg-black hover:bg-opacity-10 justify-center px-2 transition-all duration-700" key={item.id}>{item.text}</div>
                    ))}
                </nav>
                <nav className="flex gap-4 text-sm font-medium">
                    {data?.slice(7, 10).map(item => (
                        <div onClick={item.id === 10 && handleClick} className="h-8 cursor-pointer flex items-center rounded justify-center px-2 hover:bg-black hover:bg-opacity-10" key={item.id}>{item.text}</div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Header;
