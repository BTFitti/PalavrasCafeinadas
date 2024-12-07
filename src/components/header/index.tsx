import { BsFillTelephoneFill } from "react-icons/bs";
export function Header() {
  return (
    <header className="w-full bg-header text-white text-2xl">
      <nav className="w-full flex items-center justify-around py-5 mx-auto ">
        <a href="#" className="  border-b-4 pb-1 border-hr hover:border-hr-hover transition-all duration-700 ease-in-out ">
          Sobre nós
        </a>

        <a href="#" className=" border-b-4 pb-1 border-hr hover:border-hr-hover transition-all duration-700 ease-in-out ">
          Cafeteria
        </a>

        <div className="flex flex-col items-center ">
          <img src="/src/assets/image (1).png" alt="Caféinado" className=" h-20" />
          <p>Palavras Cafeínadas</p>
        </div>

        <a href="#" className=" border-b-4 pb-1 border-hr hover:border-hr-hover transition-all duration-700 ease-in-out ">
          Contato
        </a>

        <a  href="#" className="flex items-center justify-center gap-2  border-b-4 pb-1 border-hr hover:border-hr-hover transition-all duration-700 ease-in-out ">
          <BsFillTelephoneFill />
          <span className=" " >114002-8922</span>
        </a>
      </nav>
    </header>
  );
}
