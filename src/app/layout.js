import "../styles/reset.css";
import "../styles/globals.css";
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import StoreProvider from '@/redux/store-provider';
import {navbar} from "@/data/data.json"
const gotham = localFont({
    src: [
        {
            path: '../assets/fonts/thin.otf',
            weight: "100",
        },
        {
            path: '../assets/fonts/light.otf',
            weight: "300",
        },
        {
            path: '../assets/fonts/book.otf',
            weight: "400",
        },
        {
            path: '../assets/fonts/medium.otf',
            weight: "500",
        },
        {
            path: '../assets/fonts/bold.ttf',
            weight: "600",
        },
        {
            path: '../assets/fonts/regular.otf',
            weight: "700",
        },
        {
            path: '../assets/fonts/black.otf',
            weight: "800",
        },
        {
            path: '../assets/fonts/ultra.otf',
            weight: "900",
        },
    ],
});
export default function RootLayout({children}) {
    return (
        <html lang="en" className={gotham.className} >
        <body>
        <StoreProvider>
            <Navbar data={navbar}/>
            <main>{children}</main>
        </StoreProvider>
        </body>
        </html>
    )
}
