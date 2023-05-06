"use client"
import {useEffect, useState} from 'react';

const Inventory = () => {
    const [sticky, setSticky] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setSticky(window.scrollY)
        })
        console.log(sticky, "ınventory");
    }, [sticky]);
    console.log(sticky, "ınventory");
    return (
        <>
            {
                sticky < 3600 && <p className="underline cursor-pointer">View Inventory</p>
            }
        </>
    );
};

export default Inventory;
