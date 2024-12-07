export function Hero() {
  return (
    <main className=" w-full bg-slate-200 ">
      <div className="bg-[url('/src/assets/BackGround.png')] bg-cover bg-center h-screen bg-no-repeat w-full flex">
      <div className="w-full ml-40 pt-28">
        {/* //div h1 */}
        <div className="w-2/4">
        <h1 className="text-white text-7xl leading-relaxed font-bold pb-5 ">Leia acompanhado de uma culinária de qualidade</h1>
        </div>
        {/*div texto abaixo h1 */}
        <div className="w-1/2 pb-20">
        <span className="text-4xl text-white ">Aonde a paixão por livros e o amor por café sempre tem lugar á mesa.</span>
        </div>
       
        <button className="bg-header p-5 font-bold text-2xl rounded-xl text-white uppercase">
          Venha conhecer →
        </button>
       
        
        
    
      </div>
        {/*Div para centralizar o texto no bg */}
        {/* <div className="bg-slate-200 w-full max-w-80 p-10 text-4xl absolute top-28 flex items-center justify-center">
          <span className="text-5xl">Leia acompanhado de uma culinária de qualidade Leia acompanhado de uma culinária de qualidade</span>
        </div> */}
      </div>
    </main>
  );
}
