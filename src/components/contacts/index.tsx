import { BsFillTelephoneFill } from "react-icons/bs";
import { BsMailboxFlag } from "react-icons/bs";
import { BsPinMap } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export function Contacts() {
  return (
    <div  className=" p-32 h-full w-full bg-contacts-bg mb-24 ">
      <h1 id="contacts" className="text-5xl px-2 mb-20 max-w-fit z-[0] relative after:absolute after:w-full after:block after:left-0 after:bottom-0 after:bg-abt-after after:z-[-1] after:h-[21px]">
        ENTRE EM CONTATO
      </h1>
      {/*Area do formulário */}
      <div  className="flex w-full max-w-full shadow-2xl rounded-xl ml-5">
        {/* //div da parte esquerda */}
        <div className="bg-header w-[50%] h-full flex flex-col min-w-96 p-8 rounded-s-lg ">
          <ul className=" w-full max-w-full text-2xl pr-9">
            <li className="flex gap-3 pb-3 ">
              <BsFillTelephoneFill className="bg-white  h-10 w-10 p-2 rounded-xl text-header-txt" />
              <span className="text-white font-semibold w-full">
                11 4002-8922
              </span>
            </li>
            <li className="flex gap-3 pb-3">
              <BsMailboxFlag className="bg-white  h-10 w-10 p-2 rounded-xl text-header-txt" />
              <span className="text-white font-semibold w-full ">
                contato@gmail.com
              </span>
            </li>
            <li className="flex gap-3 pb-3">
              <BsPinMap className="bg-white  h-10 w-10 p-2 rounded-xl text-header-txt" />
              <span className="text-white font-semibold w-full">
                Av. Paulista, 1324 - Bela Vista, São Paulo - SP, 01310-100
              </span>
            </li>
            <hr className=" w-full border-2 border-hr rounded-sm " />
            <li className="flex gap-3 pb-3 pt-4">
              <BsInstagram className="bg-white h-10 w-10 rounded-xl p-2 text-header-txt" />
              <span className="text-white font-semibold w-full">
                @palavrascafeinadas
              </span>
            </li>
            <li className="flex  gap-3 pb-3 ">
              <BsFacebook size={30} className="text-white h-10 w-10" />
              <span className="text-white font-semibold w-full">
                Palavras Cafeinadas
              </span>
            </li>
            <li className="flex flex-col items-center justify-center w-full pt-28">
              <img
                src="/src/assets/image (1).png"
                alt="Logo palavras cafeínadas"
                className="w-48"
              />
              <span className="text-white text-3xl pt-2">
                Palavras Cafeínadas
              </span>
            </li>
          </ul>
        </div>

        {/*Div direita (form) */}
        <form className="bg-slate-500/15 flex flex-col items-start w-full rounded-e-lg px-14 pt-24">
          {/*div dos campos do form */}
          <div className="flex w-full flex-col gap-4">
            <label className="text-4xl font-semibold">Nome</label>
            <input
              type="text"
              className="p-5 rounded-xl border-hr border-2 outline-none "
            />
            <label className="text-4xl  pt-5 font-semibold">Email</label>
            <input
              type="email"
              className="p-5 rounded-xl border-hr border-2 outline-none"
            />

            <label className="text-4xl pt-5 font-semibold">Mensagem</label>
            <textarea className="rounded-xl p-4 border-hr border-2 outline-none"></textarea>
            <button className="p-5 mt-12 bg-header-txt w-2/5 rounded-lg text-2xl text-white font-semibold shadow-xl">
              ENVIAR MENSAGEM →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
