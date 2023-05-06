import Image from "next/image";
import Inventory from "@/components/Inventory";

const ProductPromotion = ({data}) => {
    return (
        <div className="relative">
            {data?.map(item => (
                <div key={item.id} className="relative w-full top-[52px]  h-container snap-end scroll-smooth">
                    <Image className="object-cover" fill src={item.image} alt=""/>
                    <div className="absolute top-20 w-full flex items-center flex-col gap-80">
                        <div className="flex flex-col text-center">
                            <h2 className="text-[40px] font-medium">{item.name}</h2>
                            <Inventory/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPromotion;
