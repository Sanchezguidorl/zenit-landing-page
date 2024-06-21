"use client";

import { useRef, useState } from "react";

function CallToActionInput() {
  const [send, setSend] = useState<boolean>(false);
  const FormRef= useRef<HTMLFormElement>(null);
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data= new FormData(form);
    
    const result = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });
    if(result.ok){
      FormRef.current?.reset();
      setSend(true);
    }
    console.log(result)
  };
  return (
    <div id="CallToAction" className=" text-xs">
      <form
      ref={FormRef}
      onSubmit={(event) => handleSubmit(event)}
        action="https://formspree.io/f/xwpeepvr"
        className=" flex input-action-container"
      >
        <input
          disabled={send}
          required
          type="text"
          name="text"
          onChange={()=>{}}
          className={` h-8 w-80 p-2 mr-2 ${
            send ? "bg-white text-no-dark " : "bg-transparent"
          } focus:outline-none border rounded-l-full`}
          id=""
          placeholder={
            send
              ? "Pronto serás contactado"
              : "Escribe tu número o dirección email"
          }
        />
        <input type="text" name="message" className="hidden" defaultValue={"Quiero ser contactado por Cygnus"} />
        <div className="relative min-w-40">
          <button
            type="submit"
            className={` font-semibold text-[10px] sm:text-xs uppercase rounded-r-full ${
              !send
                ? " text-white bg-gradient-action"
                : " text-no-dark bg-white "
            } px-4 flex justify-center items-center h-8 hover:brightness-150 transition-all duration-500 absolute top-0 z-10`}
          >
            {send ? "Solicitado" : "Solicitar contacto"}
          </button>
          {!send && (
            <button className=" justify-center text-[10px] sm:text-xs font-semibold uppercase bg-gradient-action rounded-r-full text-white px-4 flex items-center h-8 absolute top-0 button-clone -z-0">
              Solicitar contacto
            </button>
          )}
        </div>
      </form>
      <p className=" w-full text-[10px]  sm:text-[12px] font-medium opacity-70 pl-2">
        Obtén una cotización gratuita para la solución que tu negocio necesita
      </p>
    </div>
  );
}

export default CallToActionInput;
