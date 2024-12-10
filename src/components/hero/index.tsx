export function Hero() {
  return (
    <div className="bg-[url('/src/assets/BackGround.png')] bg-cover bg-center h-screen bg-no-repeat flex  ">
      {/*Div do conteudo */}
      <div className="flex flex-col h-screen w-full ml-28 pt-28">

        <div className= "w-7/12 text-8xl flex leading-snug font-bold text-white pb-6">
          <span>Leia acompanhado de uma culinária de qualidade.</span>
        </div>

        <div className="w-1/3 text-3xl flex leading-snug  text-white pb-10">
          <span> Aonde a paixão por livros e o amor por café sempre tem lugar á mesa.
          </span>
        </div>

        <button className="bg-header p-5 font-bold text-2xl rounded-xl text-white uppercase w-80 hover:bg-darkcoffee transition-all duration-700  ">
          Venha conhecer →
        </button>

        
      </div>
    </div>
  );
}
