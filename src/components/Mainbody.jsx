import { useState } from "react";
import Home from "../assets/icons/Home.svg";
import Right_arrow from "../assets/icons/right_arrow.svg";
import Sound from "../assets/icons/Sound.svg";
import Light from "../assets/icons/Light.svg";
import Restart from "../assets/icons/Restart.svg";
import Squre from "../assets/icons/Squre.svg";
import RightArrow from "../assets/icons/Right_arrow_btn.svg";
import LeftArrow from "../assets/icons/Left_arrow.svg";
import HyggesIcon from "../assets/Hyggex-icon.svg";
import HyggesLogo from "../assets/HyggeX-logo.svg";
import PlusIcon from "../assets/icons/Plus_Icon.svg"


const Mainbody = () => {
  const [selectedButton, setSelectedButton] = useState("study");

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <>
      <div className="main-body w-full">
        {/* //breadcrumb trail */}
        <div className="breadcrumb-trail flex items-center  my-[40px]">
          <img src={Home} alt="Home svg" />
          <span className="mx-3">
            <img src={Right_arrow} alt="Right arrow" />{" "}
          </span>
          <a className="inter-font" href="#">
            Flashcard
          </a>
          <span className="mx-3">
            <img src={Right_arrow} alt="Right arrow" />{" "}
          </span>
          <a className="inter-font" href="#">
            Mathematics
          </a>
          <span className="mx-3">
            <img src={Right_arrow} alt="Right arrow" />{" "}
          </span>
          <a href="#" className="text-[#06286E] font-semibold ">
            Relation and Function
          </a>
        </div>

        {/* //Problem statement body */}

        <div className="problem-statement mt-4">
          <h1 className="text-[#06286E] montserrat-font text-[30px]">
            Relations and Functions ( Mathematics )
          </h1>

          <div className=" mt-[40px]">
            <div className="problem-statement-box flex justify-center flex-col items-center">
              <div className="content-list">
                <ul className="flex">
                  <li
                    className={`mx-4 px-3 pb-1 ${
                      selectedButton === "study"
                        ? "border-b-2 border-[#06286E] text-[#06286E] font-semibold"
                        : ""
                    }`}
                  >
                    <button
                      className="text-base"
                      onClick={() => handleButtonClick("study")}
                    >
                      Study
                    </button>
                  </li>
                  <li
                    className={`mx-4 px-3 ${
                      selectedButton === "quiz"
                        ? "border-b-2 border-[#06286E] font-semibold text-[#06286E]"
                        : ""
                    }`}
                  >
                    <button
                      className="text-base"
                      onClick={() => handleButtonClick("quiz")}
                    >
                      Quiz
                    </button>
                  </li>
                  <li
                    className={`mx-4 px-3 ${
                      selectedButton === "test"
                        ? "border-b-2 border-[#06286E] font-semibold text-[#06286E]"
                        : ""
                    }`}
                  >
                    <button
                      className="text-base"
                      onClick={() => handleButtonClick("test")}
                    >
                      Test
                    </button>
                  </li>
                  <li
                    className={`mx-4 px-3 ${
                      selectedButton === "game"
                        ? "border-b-2 border-[#06286E] font-semibold text-[#06286E]"
                        : ""
                    }`}
                  >
                    <button
                      className="text-base"
                      onClick={() => handleButtonClick("game")}
                    >
                      Game
                    </button>
                  </li>
                  <li
                    className={`mx-4 px-3 ${
                      selectedButton === "others"
                        ? "border-b-2 border-[#06286E] font-semibold text-[#06286E]"
                        : ""
                    }`}
                  >
                    <button
                      className="text-base"
                      onClick={() => handleButtonClick("others")}
                    >
                      Others
                    </button>
                  </li>
                </ul>
              </div>

              <div
                className="problem-statement-display-box w-[40rem] h-[20rem] mt-9 border rounded-[50px]"
                style={{
                  background:
                    "linear-gradient(180deg, #06286E 0%, #164EC0 100%)",
                }}
              >
                <div className="problem-statement-inner-display-box p-8">
                  <div className="problem-statement-inner-display-box-icons flex justify-between">
                    <a href="#">
                      <img src={Light} alt="Light icon" />
                    </a>
                    <a href="#">
                      <img src={Sound} alt="Sound icon" />
                    </a>
                  </div>

                  <h1 className="text-center montserrat-font text-white text-[2.2rem] mt-[70px]">
                    9 + 6 + 7x - 2x - 3
                  </h1>
                </div>
              </div>

              <div className="problem-statement-Navigation-box flex justify-between w-[35rem] my-7">
                <button>
                  <img src={Restart} alt="Restart icon" />
                </button>

                <div className="navigation-button flex items-center">
                  <button
                 
                  >
                    <img src={LeftArrow} alt="Left Icon" />
                  </button>
                  <span className="mx-[2rem] text-[#202B37] montserrat-font text-lg">01/10</span>
                  <button
                    className=""
                  >
                     <img src={RightArrow} alt="Right-icon"/>
                  </button>
                </div>

                <button>
                  <img src={Squre} alt="full screen icon" />
                </button>
              </div>

              <div className="problem-statement-footer flex justify-between w-full">
                 <div className="problem-statement-footer-left flex items-center">
                     <img src={HyggesIcon} alt="HyggesIconLogo" />
                     <div className="mb-4">
                        <p className="text-[#696671] inter-font">Published by</p>
                        <img src={HyggesLogo} alt="HyggesLogoIcon" />
                     </div>
                 </div>
                 <a href="#" className="problem-statement-footer-right flex items-center">
                      <img src={PlusIcon} className="mr-2" alt="Plus icon"  />
                      <h1 className="montserrat-font text-[#06286E] text-lg">Create Flashcard</h1>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
