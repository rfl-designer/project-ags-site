import { HeaderItem } from "./HeaderItem";
import imagemHero from "../assets/img/imagem-hero-agd.png"

export const HeroItem = () => {
    return(
        <div className="bg-cinza-base h-auto px-4 overflow-hidden md:h-screen md:m-0 ">
            <div className="py-4 border-b border-cinza-medium">
            <HeaderItem />
            </div>
            <div className="container m-auto grid grid-cols-1 md:grid-cols-2 items-center md:h-full">
                <div className="col-span-1 h-auto py-12 mr-16">
                    <h2 className="font-bold text-4xl pb-8 text-preto-disable">Olá Mundo!!!</h2>
                    <p className="text-base pb-8 text-preto-disable">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi ut veniam reprehenderit ipsam eius nulla provident facilis ipsa saepe odit cupiditate dolorem magni consectetur, doloribus iure corporis? Dignissimos, inventore.</p>
                    <button className="px-4 py-2 bg-amarelo-base hover:bg-cinza-strong rounded-lg text-cinza-base "><a href="#">Next</a></button>
                </div>
                <div className="col-span-1 bg-cinza-base">
                    <img src={imagemHero} alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
        
    )
}