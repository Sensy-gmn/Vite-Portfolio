import { useState } from "react";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="bg-slate-800">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">
              <a href="#">Portfolio</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8 ">
                <li>
                  <a
                    href="#"
                    className="
                            text-white  
                  
                              duration-500
                              hover:text-xl
                              "
                  >
                    accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                            text-white

                              duration-500
                              hover:text-xl
                            "
                  >
                    compétences
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                            text-white

                              duration-500
                              hover:text-xl
                            "
                  >
                    à propos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="
                                      text-white
                                      
                                        duration-500
                                        hover:text-xl
                                      "
                  >
                    contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button
                className="outline-none mobile-menu-button hover:animate-ping duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d={
                      showMenu
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={
              showMenu
                ? "mobile-menu block md:hidden"
                : "mobile-menu hidden md:hidden"
            }
          >
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="
                  block 
                  px-4 
                  py-2 
                  text-white 
                  bg-gray-900 rounded 
                  
                  hover:bg-slate-400 
                  duration-500		
                  hover:text-slate-900
                  hover:text-xl
                  
                  "
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
                  block px-4 
                  py-2 
                  text-white 
                  bg-gray-900 rounded 
                  
                  hover:bg-slate-400
                  duration-500
                  hover:text-slate-900
                  hover:text-xl
                  
                  "
                >
                  compétences
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
                  block 
                  px-4 
                  py-2 
                  text-white 
                  bg-gray-900 
                  rounded 
                  
                  hover:bg-slate-400 
                  duration-500
                  hover:text-slate-900
                  hover:text-xl
                  "
                >
                  à propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="
                  block 
                  px-4 
                  py-2 
                  text-white 
                  bg-gray-900
                  rounded
                  
                hover:bg-slate-400 
                  duration-500
                hover:text-slate-900
                  hover:text-xl
                
                
                "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
