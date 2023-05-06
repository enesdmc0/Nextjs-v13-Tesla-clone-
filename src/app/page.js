import Offer from '@/components/Offer';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import ProductPromotion from '@/components/ProductPromotion';
import OrderDrive from '@/components/OrderDrive';
import Footer from '@/components/Footer';
import {productPromotion, header, footer} from '@/data/data.json';
import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <div className="min-h-screen overflow-x-hidden relative" style={{scrollSnapType: 'y mandatory'}}>
            <Offer/>
            <Header data={header}/>
            <OrderDrive/>
            <Presentation/>
            <ProductPromotion data={productPromotion}/>
            <Footer data={footer}/>
        </div>
    );
}

