"use client";
import React, { useState } from "react";
import OptionUI from "./OptionUI";
import { IoIosClose } from "react-icons/io";

const RightOrder = ({showPopup, setShowPopup,setShowOption,showOption,option}) => {
  const [selected, setSelected] = useState(option);
  const [selectedOption, setSelectedOption] = useState("Market");
  const buttons = ["Long", "Short"];
  const options = ["Market", "Limit", "Conditional"];
  return (
    <>
      <div className="sc1:flex hidden w-full h-100 sticky top-0 text-sm">
        {buttons.map((button) => {
          return (
            <button
              className={`w-full px-4 py-2 text-lg   font-bold ${
                (button==="Long"&& selected==="Long")
                  ?"dark:bg-[#022921] bg-[#E6F9F3] text-[#0CF3C4] border-b-4 border-b-[#0cf3c4]"
                  : (button==="Short" && selected==="Short")?"text-red-700 bg-[#FDEDEF] dark:bg-[#291B1A] border-b-4 border-b-red-700":"dark:text-[#4F4F4F] text-[#9CA3AF] bg-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D] border-[#9CA3AF ] border-b-2"
              }`}
              onClick={() => {
                setSelected(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between sticky top-12 dark:sc1:bg-[#0F0E0E] dark:bg-[#2B2A2A] bg-white text-black h-31 px-4 w-full text-[0.8rem] h-100 dark:text-[#4F4F4F] border-b-[1px] dark:boder-2 border-b-[#9CA3AF] dark:border-b-[#2C2D2D] gap-6 ">
        <div className="flex items-center gap-6">
        {options.map((option) => {
          return (
            <button
              className={`${
                option === selectedOption
                  ? "h-full py-2 dark:text-white text-black border-b-black border-b-[1px] dark:border-b-white"
                  : "h-full py-2 text-[#9CA3AF]"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          );
        })}
        </div>
        <button className="sc1:hidden"><IoIosClose size={30} onClick={()=>setShowOption(!showOption)}/></button>
      </div>
      <OptionUI showPopup={showPopup} setShowPopup={setShowPopup} option={selectedOption} topOption={selected}/>
    </>
  );
};

export default RightOrder;
