"use client";
import '../../../styles/sections/Contact.css';
import { useRef, useState } from "react";

function Contact() {
  const [successfullSend, setSuccessfullSend] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorSend, setErrorSend] = useState<boolean>(false);
  const formRef= useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    try {
      const result = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (result.ok) {
        setSuccessfullSend(true);
        setErrorSend(false);
        setLoading(false);
        if(formRef.current){
          formRef.current.reset();
        }
      }else{
        throw  new Error("");
      }

    } catch (error) {
      setLoading(false);
      setErrorSend(true);
    }
  };

  return (
    <div className="py-20 relative" id="Contact">
      <div className="flex justify-center items-center mb-24 gap-1">
        <div className="w-1/3 bg-gradient-contact-r h-1"></div>
        <div className="gradient-mask-silver uppercase">
          <h3 className="text-3xl">Contáctanos</h3>
        </div>
        <div className="w-1/3 bg-gradient-contact-l h-1"></div>
      </div>
      <form
        ref={formRef}
        className="flex w-full flex-wrap justify-center gap-4 sm:px-20 pb-10 pt-32 px-4 items-end relative"
        onSubmit={(event) => handleSubmit(event)}
        action="https://formspree.io/f/xwpeepvr"
        method="POST"
      >
        {errorSend ? (
          <p
            className={`absolute top-0 error-submit mx-4 ${
              errorSend ? " fadeIn" : "opacity-0"
            }`}
          >
            {" "}
            El formulario cuenta con errores. Por favor, corrija los errores y
            vuelva a intentarlo
          </p>
        ) : (
          <p
            className={`absolute top-0 successfull-submit mx-4 ${
              successfullSend ? " fadeIn" : "opacity-0"
            }`}
          >
            {" "}
            El formulario fue enviado correctamente. En la brevedad nos
            pondremos en contacto para resolver su consulta
          </p>
        )}
        {loading && (
          <div className="w-full h-full absolute overlay-loading ">
            <div className="loader">
              <div className="inner one"></div>
              <div className="inner two"></div>
              <div className="inner three"></div>
            </div>
          </div>
        )}
        <div className="flex flex-col flex-1">
          <label className="mb-3" htmlFor="name">
            Nombre Completo
          </label>
          <input
            className="rounded-sm h-10 px-2 bg-semitransparent"
            id="name"
            type="text"
            name="name"
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>

        <div className="flex flex-col flex-1">
          <label className="mb-3" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            className="rounded-sm h-10 px-2 bg-semitransparent"
            id="email"
            type="email"
            name="email"
            placeholder="Ingresa tu email de contacto"
            required
          />
        </div>
        <div className="flex flex-col w-full mt-10">
          <label className="mb-3" htmlFor="message">
            Detalle de la Consulta
          </label>
          <textarea
            className="rounded-sm h-32 bg-semitransparent p-2 resize-none"
            name="message"
            id="message"
            placeholder="Por favor, cuéntanos los detalles de tu consulta."
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-end mt-4 mb-10">
          <input type="submit" className=' ' />
        </div>
      </form>
    </div>
  );
}
export default Contact;
