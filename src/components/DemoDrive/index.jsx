"use client"
import {useState} from 'react';
import Image from 'next/image';
import img1 from "@/assets/d-img1.jpg";
import img2 from "@/assets/d-img2.jpg";
import img3 from "@/assets/d-img3.jpg";
import img4 from "@/assets/d-img4.jpg";
const DemoDrive = () => {
    const data = [
        {id: 1, text: "Model S", image: img1},
        {id: 2, text: "Model 3", image: img2},
        {id: 3, text: "Model X", image: img3},
        {id: 4, text: "Model Y", image: img4},
    ]
    const [activeCar, setActiveCar] = useState(data[0])
    const handleClick = (id) => {
        const findCar = data.filter(item => item.id === id);
        setActiveCar(findCar[0])
    }

    return (
        <div className="w-[930px] p-8 m-auto mt-20 flex flex-col gap-10">
            <div>
                <h1 className="text-[#171A20] text-[40px] font-medium">Schedule a Demo Drive</h1>
                <p className="text-[#393C41] text-[14px] font-medium w-[770px] leading-5">Demo Drive a Tesla at a store near you. Drivers must have a valid U.S. driver's license and be 18 years of age or older.</p>
            </div>
            <div className="flex gap-20 items-center justify-between">
                <div className="w-[205px] h-[250px] flex flex-col items-center justify-between">
                    {data?.map(item => (
                        <button onClick={() => handleClick(item.id)} className={`${item.id === activeCar.id ? "border-3 border-blue-700 text-gray-900" : "text-gray-500 border-gray-400 border"} transition-all duration-300 flex items-center font-medium justify-center w-full h-[50px] rounded`} key={item.id} >{item.text}</button>
                    ))}
                </div>
                <div className="relative w-[644px] h-[293px]">
                    <Image className="object-cover" fill src={activeCar.image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default DemoDrive;
