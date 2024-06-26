"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import WalletsProvider from "../../_Components/Wallet";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OverviewChart from "../../_Components/OverviewChart"

const page = () => {
  const { address } = useAccount();
  const [selected, setSelected] = useState("Position");
  const [dropdown,setDropdown] = useState(false);
  const [position , setPosition] = useState("All");
  return (
    <div className="w-full h-full px-4 sc0:px-20 sc1:px-32 py-16 bg-[#101115] min-h-screen">
      <div className=" text-5xl py-8 items-center">Portfolio</div>
      <div className="flex w-full border-b border-b-zinc-800 gap-10 ">
        <button
          className={`text-[0.7rem] sc0:text-sm text-neutral-400 py-1 sc0:py-3  ${selected==="Position" && 'border-b-2 border-b-[#3B1A91]'} text-white`}
          onClick={() => setSelected("Position")}
        >
          Position & Activity
        </button>
        <button
          className={`text-[0.7rem] sc0:text-sm text-neutral-400 py-1 sc0:py-3    ${selected==="Overview" && 'border-b-2 border-b-[#3B1A91]'} text-white`}
          onClick={() => setSelected("Overview")}
        >
          Overview
        </button>
        <button
          className={`text-[0.7rem] sc0:text-sm text-neutral-400 py-1 sc0:py-3   ${selected==="Stats" && 'border-b-2 border-b-[#3B1A91]'} text-white`}
          onClick={() => setSelected("Stats")}
        >
          Stats and Insight
        </button>
      </div>
      {selected === "Position" && (
        <>
          <div className="flex flex-col gap-8 my-10">
            <span>Position & Activities</span>
            <div className="flex border-b border-b-zinc-800">
              <button className={`px-3 sc0:px-6 py-1 sc0:py-2 border border-gray-800 text-[0.8rem] sc0:text-sm ${position==="All" ? "text-white bg-black":"text-zinc-700"} `} onClick={()=>setPosition("All")}>
                All Positions
              </button>
              <button className={`px-3 sc0:px-6 py-1 sc0:py-2 border border-gray-800 text-[0.8rem] sc0:text-sm ${position==="Activity" ? "text-white bg-black":'text-zinc-700'} `} onClick={()=>setPosition("Activity")}>
                Activity
              </button>
              <button className={`px-3 sc0:px-6 py-1 sc0:py-2 border border-gray-800 text-[0.8rem] sc0:text-sm ${position==="Highlights" ? "text-white bg-black":"text-zinc-700"}`} onClick={()=>setPosition("Highlights")}>
                Highlights
              </button>
            </div>
          </div>
          {!address ? (
            <div className="w-full flex justify-center items-center">
              <WalletsProvider />
            </div>
          ) : (
            <>
              <div className="border-b border-b-zinc-800 w-full justify-between hidden sc1:flex">
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Pair
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  POS Size
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Collateral
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Open Prize
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Liq Prize
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Equity Value
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Action
                </button>
              </div>
              <div className="w-full py-4 flex justify-center flex-col items-center gap-3">
                <Image
                  className="grayscale opacity-10"
                  src="/transaction.svg"
                  width={100}
                  height={100}
                  alt="No transaction"
                />
                <span className="text-gray-800">No transactions</span>
              </div>
            </>
          )}
        </>
      )}

      {selected === "Stats" && (
        <div  id="portfolio stats"  className="w-full h-full py-6 flex justify-center flex-col ">
          <div className="my-2">
            <span className="text-gray-500">Portfolio Stats</span>
          </div>
          <div className="border border-gray-800 rounded-xl flex sc4:flex-row flex-col px-8 py-10  w-full justify-center gap-20 items-center">
            <div className="flex w-full items-center gap-2">
                <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/shield.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">
                  Loss Protection Rebate
                </span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/box.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Total Trades</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/line-chart-down.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Average PnL</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/percentage.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Win Rate</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/bar-chart-2.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Total Fees</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
          </div>
          <div id="asset stat" className="flex flex-col gap-4 my-6">
            <div className="text-md text-gray-500">
                <span>Asset Stats</span>
            </div>
            <div className="flex gap-6 sc4:flex-row flex-col">
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Trade By Asset</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Cummulative PnL by asset</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Win rate by asset class</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
            </div>
          </div>
        </div>
      )}
      {selected === "Overview" &&(
        <>
            <div className="w-ful flex flex-col sc1:flex-row items-center gap-10 justify-center my-10 h-[80%]">
                <div className="flex flex-col gap-6 w-full sc1:w-[40%] h-full">
                    <span>Portfolio Details</span>
                <div className="w-full rounded-xl border border-zinc-800 flex-col">
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem]">Active portfolio value</span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-gray-300 font-bold">$</span>
                            <span className="text-white font-bold">0.000</span>
                            <span className="text-green-500 text-[0.9rem] flex items-center">0.000% <FaChevronUp/></span>
                        </div>
                    </div>
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem] px-6 py-3 border border-zinc-800 rounded-xl w-fit flex  items-center gap-2">PnL Today <FaChevronDown/></span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-white font-bold">NA</span>
                            <span className="text-green-500 text-[0.9rem] flex items-center">NaN% <FaChevronUp/></span>
                        </div>
                    </div>
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem]">Total Volume</span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-white font-bold">NA</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-6 w-full h-full">
                <span>Live PnL Chart</span>
                <div className="w-full rounded-xl border border-zinc-800 flex-col h-[60vh]">
                  <div className="flex flex-col gap-3 mx-3 my-5">
                      <div className="text-sm text-gray-200  mx-10">Cummulative PnL</div>
                  </div>
                  <OverviewChart/>
                </div>
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default page;
