"use client"
import {useEffect, useState} from 'react';
import Link from 'next/link';

const OrderDrive = () => {
    const [sticky, setSticky] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setSticky(window.scrollY)
        })
    }, [sticky]);

    return (
        <div className="fixed top-[515px] z-10 w-full flex items-center justify-center">
            {
                sticky < 100
                    ? <Link href="/drive" className="bg-transparent text-white rounded border-4 border-white cursor-pointer w-[264px] h-[40px] flex items-center justify-center font-semibold hover:bg-white hover:text-[#171a20] transition-all duration-1000">Demo Drive</Link>
                    :
                    sticky >3500
                    ? <div className="w-[264px] h-[40px] rounded flex items-center justify-center font-medium bg-[#171A20] text-white mt-5">Shop Now</div>
                    : <div className="flex gap-6">
                        <Link href="" className="w-[264px] cursor-pointer h-[40px] rounded flex items-center justify-center font-medium bg-[rgba(23,26,32,0.8)] text-white">Order Now</Link>
                        <Link href="/drive" className="w-[264px] cursor-pointer h-[40px] rounded flex items-center justify-center font-medium bg-[rgba(244,244,244,0.65)] text-[rgba(23,26,32,0.8)]">Demo Drive</Link>
                    </div>
            }
        </div>
    );
};

export default OrderDrive;
