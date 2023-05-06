"use client"
import Link from 'next/link';
import {TfiWorld} from 'react-icons/tfi';
import CloseButton from '@/components/CloseButton';
import {useSelector} from 'react-redux';

const Navbar = ({data}) => {
    const {openMenu} = useSelector(state => state.tesla)
    return (
        <div className={`${openMenu ? "visible bg-[rgba(0,0,0,.3)] backdrop-blur-sm" : "hidden"} fixed w-screen h-screen z-20 `}>
            <div className="w-[310px] flex flex-col p-10 h-full absolute bg-white top-0 right-0 gap-9 ">
                <CloseButton/>
                <nav className="flex flex-col gap-5 text-[#393c41] font-medium text-[14px] overflow-scroll pb-40">
                    {data?.map((item, i) => (
                        <Link key={i} className="transition-all h-8 duration-300 px-3 py-1 rounded hover:bg-gray-200" href="/">{item}</Link>
                    ))}
                    <div className="flex gap-3 h-14 items-center transition-all duration-300 px-3 py-3 rounded hover:bg-gray-200">
                        <TfiWorld size={20}/>
                        <div className="flex flex-col cursor-pointer ">
                            <span>United States</span>
                            <span className="text-xs text-gray-500 w-12 border-b-2 hover:border-b-blue-950">English</span>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Navbar;
