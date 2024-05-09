import { FileAttachement } from "./FileAttachement";

export const CardMe = () => {
  return (
    <>
      <div
        className="
        
        min-w-[300px]
        max-w-md
        
        p-6 
        border 
        rounded-lg 
        shadow 
        bg-slate-700 
        border-gray-700
        flex
        flex-col
        items-center
        justify-center
        
        duration-300
        ease-in-out
        
        hover:border-sky-700
        
        
        
        "
      >
        <img
          src="\src\assets\pp.jpeg"
          alt="photo de profil"
          className="h-[300px] rounded-lg"
        />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Alexandre Goumain
        </h5>
        <p className="font-normal text-sky-100 text-justify">
          Avec une expérience pratique dans les langages de programmation
          front-end tels que JavaScript, HTML et CSS, je suis motivé à
          poursuivre mon apprentissage et à contribuer de manière significative
          à votre équipe en front-end et back-end !
        </p>
        {/* <FileAttachement /> */}

        <FileAttachement />
        <h3 className="text-2xl text-red-400">
          <i> BTN not ready</i>
        </h3>
      </div>
    </>
  );
};
