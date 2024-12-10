export function Cafeteria() {
  return (
    <div id="cafeteria" className="h-full bg-cafeteria pt-28 md:pt-52 pb-32 w-full relative select-none  ">
      <div className="md:w-full absolute -top-9 md:-top-24">
        <img
          src="/src/assets/cafeonda.png"
          className="w-full "
          alt="Cafés em onda"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full md:pt-14">
        <h1 className=" text-4xl md:text-5xl text-white">CAFETERIA</h1>
        <hr className="border-hr border-2 rounded-sm w-32 md:w-44 mt-3 " />
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center w-full gap-4 pt-12 ">
        <div className="bg-white w-[40dvh] md:h-full p-4 rounded-lg">
          <img src="/src/assets/imgcarrossel1.png" alt="" />
          <h1 className="md:text-xl font-semibold pt-2 ">
            Brigadeiro de Capuccino
          </h1>
          <p className="text-lg font-normal text-gray-500 pt-2">
            O brigadeiro de cappuccino é uma das guloseimas que enfeitam o
            balcão da doceria...
          </p>
        </div>

        <div className="bg-white w-[40dvh] h-full p-4 rounded-lg">
          <img src="/src/assets/imgcarrossel3.png" alt="" />
          <h1 className="text-xl font-semibold pt-2 ">Bolo de Chocolate</h1>
          <p className="text-lg font-normal text-gray-500 pt-2">
            O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteria,
            ele possui um recheio com...
          </p>
        </div>

        <div className="bg-white w-[40dvh] h-full p-4 rounded-lg ">
          <img src="/src/assets/imgcarrossel2.png" alt="" />
          <h1 className="text-xl font-semibold pt-2 ">Pão de Mel</h1>
          <p className="text-lg font-normal text-gray-500 pt-2">
            O pão de mel é um dos doces mais tradicionais que temos, ele é
            recheado com doce de leite...
          </p>
        </div>
      </div>
    </div>
  );
}
