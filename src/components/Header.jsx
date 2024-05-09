import { useState } from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {

  //Nav Links
  const [navLinks] = useState(["Home", "Flashcard", "Contact", "FAQ"]);

  return (
    <nav className="flex justify-between items-center w-full h-[90px]">
      <div className="nav-left">
        <img
          className="object-contain cover w-40"
          src={Logo}
          alt="Company logo"
        />
      </div>
      <div className="nav-right">
        <ul className="flex items-center justify-center">

        {/* Mapping navLinks */}
          {navLinks.map((items) => {
            return (
              <div key={items}>
                <li className="pr-6" >
                  <a href="/" className="inter-font ">
                    {items}
                  </a>
                </li>
              </div>
            );
          })}
          <li className="pr-6">
            <button
              className="rounded-full px-[30px] pt-[5px] pb-[6px] text-white"
              style={{
                background: "linear-gradient(180deg, #06286E 0%, #164EC0 100%)",
              }}
            >
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
