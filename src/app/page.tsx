'use client'
import Marquee from "react-fast-marquee";
import Header from "@/app/header";
import "./page.css"

export default function Home() {


    return (
        <div className="bg-blue-50 flex flex-row justify-center min-h-screen min-w-full">
            <div className="max-w-5xl">
                <Header/>
                <main className="max-h-screen">
                    <Marquee className="h-full rounded-md">
                        <img src="chocolate.jpg" alt="Chocolate cake" className="HomeMarqueeImage"/>
                        <img src="oreo.jpg" alt="Oreo cake" className="HomeMarqueeImage"/>
                        <img src="sprinkle.jpg" alt="Sprinkle cake"className="HomeMarqueeImage" />
                    </Marquee>
                    <div className="border-gray-500 border-solid border-2 p-4 rounded-md">
                        Order your custom, made with love, gorgeous cake from the master chef herself: Carmi.<br/>
                        All cakes are custom made, with or without dairy and with any reasonable decorations.<br/>
                        (We tried putting the Eiffel Tower on top of a cake; France was not happy.)
                    </div>
                </main>
                <footer className="bg-white mt-4 p-4 rounded-sm">
                    <div>Contact Us</div>
                    <div>Privacy</div>
                    <div>Terms</div>
                    <div>&copy; 2023 Cakes by Carmi.</div>
                </footer>
            </div>
        </div>
    )
}
