"use client"
import React, { useContext, useState } from "react";
import { FaBox } from "react-icons/fa";
import theme from "../_context/theme";
import Image from "next/image";

const MiddleBottom = () => {
  const [selected, setSelected] = useState(0);
  const arr1 = ["Position(0)", "Open Orders(0)", "Order history(0)"];
  const {darkMode} = useContext(theme);
  // const arr2 = [
  //   [
  //     "Symbol",
  //     "Position Size",
  //     "Liq Rate",
  //     "Margin Ration",
  //     "TP/SL",
  //     "Entry Price",
  //     "Floating PNL",
  //     "Close",
  //     "Detail",
  //   ],
  //   [
  //       "Time",
  //       "Symbol",
  //       "Status",
  //       "Leverage",
  //       "Price",
  //       "Size",
  //       "Side",
  //       "Type",
  //       "Operate"
  //   ],
  //   [
  //       "Time",
  //       "Symbol",
  //       "Leverage",
  //       "Trading Price",
  //       "Size",
  //       "Type",
  //       "Margin",
  //       "Fee",
  //       "Total PNL",
  //   ]
  // ];
  return (
    <>
        <div className="sc1:flex flex-col hidden w-full h-full">
            <div className="w-full h-fit flex border border-[#2c2d2d]"> 
                <button className="px-6 py-3 focus:bg-black focus:text-white text-slate-400 border border-[#2c2d2d]">Current Order</button>
                <button className="px-6 py-3 focus:bg-black focus:text-white text-slate-400 border border-[#2c2d2d]">Limit Orders</button>
            </div>
            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
            {/* <Image src={"/Images/middlebottom.svg"} width={128} height={128} alt="nodata" className="backdrop-grayscale-0 backdrop-grayscale opacity-10" style={{color:"transparent"}}/> */}
            <FaBox size={75} className="text-neutral-400"/>
            <span className="text-neutral-400">No data</span>
            </div>
        </div>
    </>
    // <>
    //   <div className="flex w-full gap-4 sc1:gap-10 p-8 py-6 text-black">
    //     {arr1.map((value, index) => {
    //       return (
    //         <button
    //           className={`text-sm dark:text-slate-100 px-3 py-1 sc1:py-2 rounded-lg ${
    //             index == selected && "dark:bg-[#2c2d2d] bg-[#F4F5F4] dark:text-white font-bold"
    //           }`}
    //           onClick={() => setSelected(index)}
    //         >
    //           {value}
    //         </button>
    //       );
    //     })}
    //   </div>
    //   <div className="h-[60%] sc1:h-[90%] w-full px-8 text-center ">
    //     <div className=" gap-4 grid-cols-9 border-b-2 dark:border-b-[#2c2d2d] sc1:grid hidden ">
    //   {arr2[selected].map((value) => {
    //     return <div className="text-[0.9rem] text-black dark:text-white">{value}</div>;
    //   })}
    // </div>
    //   <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
    //     <FaBox size={50} color={`${darkMode?'white':'grey'}`} />
    //     <div className="text-black dark:text-white">No Data</div>
    //   </div>
    //   </div>
    // </>
  );
};

export default MiddleBottom;
