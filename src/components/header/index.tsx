import { BsFillTelephoneFill } from "react-icons/bs";
export function Header() {
  return (
    <header className="w-full bg-header text-white text-xs sm:text-2xl fixed z-50 ">
      <nav className="w-full flex items-center justify-around py-3 mx-auto ">
        <a href="#about" className="  border-b-4 pb-1 border-hr hidden md:flex hover:border-darkcoffee transition-all duration-700 ease-in-out ">
          Sobre nós
        </a>

        <a href="#cafeteria" className=" border-b-4 pb-1 border-hr hidden md:flex hover:border-darkcoffee transition-all duration-700 ease-in-out ">
          Cafeteria
        </a>

        <div className="flex flex-col items-center ">
          <img src="/src/assets/image (1).png" alt="Caféinado"  className=" h-20 md:h-20" />
          <a href="#" className="text-2xl">Palavras Cafeínadas</a>
        </div>

        <a href="#contacts" className=" border-b-4 pb-1 border-hr hidden md:flex hover:border-darkcoffee transition-all duration-700 ease-in-out ">
          Contato
        </a>

        <a  href="#" className="items-center justify-center gap-2 border-b-4 pb-1 hidden md:flex border-hr hover:border-darkcoffee transition-all duration-700 ease-in-out ">
          <BsFillTelephoneFill />
          <span>114002-8922</span>
        </a>
      </nav>
    </header>
  );
}
