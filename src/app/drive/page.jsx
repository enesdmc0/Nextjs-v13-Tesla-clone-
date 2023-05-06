import Header from '@/components/Header';
import DemoDrive from '@/components/DemoDrive';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import {header, footer} from "@/data/data.json"
const Drive = () => {
    return (
        <div className="mb-5">
            <Header data={header}/>
            <DemoDrive/>
            <Contact/>
            <Footer data={footer}/>
        </div>
    );
};

export default Drive;
