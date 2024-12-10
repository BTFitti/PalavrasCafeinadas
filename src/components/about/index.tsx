export function About() {
  return (
    <div id="about" className=" w-full h-screen">
      <div className=" px-5 h-full  pt-12 md:pt-28 flex justify-between md:ml-28 md:mr-44 ">
        <div className="w-full h-full md:pr-32 ">
          <h1 className="text-3xl md:text-5xl px-2 max-w-fit z-[0] relative flex after:absolute after:w-full after:block after:left-0 after:bottom-0 after:bg-abt-after after:z-[-1] after:h-[21px]">
            SOBRE NÓS
          </h1>

          <p className="text-xl md:text-2xl ml-4 font-light pb-3 pt-7 leading-snug">
            A principal proposta da Cafeteria Palavras Cafeinadas é oferecer um
            espaço aconchegante, contendo um ambiente moderno e um atendimento
            completo, nela é possível provar refeições saborosas e ler
            excelentes livros.
          </p>

          <p className="text-xl md:text-2xl ml-4 font-light leading-snug pb-10 md:pb-16">
            O sonho de Carolina era criar um espaço aonde pudesse unir seu amor
            por culinária e a enorme paixão por literatura, venha saber mais
            dessa jornada:
          </p>

          <button className="bg-header p-5 font-bold text-2xl rounded-xl text-white uppercase w-80 hover:bg-darkcoffee transition-all duration-700 ">
            FALE CONOSCO →
          </button>
        </div>
        <img
          src="/src/assets/canecas.png"
          alt="Canecas de café"
          className="md:w-[40vh] md:h-[40vh] hidden md:flex  "
        />
      </div>
    </div>
  );
}
