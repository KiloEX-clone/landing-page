"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { FaCaretDown, FaChevronDown, FaChevronRight, FaFire } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import ToggleButton from "./ToggleButton";
import theme from "../_context/theme";
import WalletsProvider from "./Wallet";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdSunny } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown"

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(theme);
  const [openstate, setOpenState] = useState(false);
  const [menuOpenState, setMenuOpenState] = useState("Docs");
  const [selected, setSelected] = useState("Trade");
  const names = [
    "Trade",
    "Portfolio",
    "Stats",
    "Earn",
    "Docs",
    "More",
  ];
  const networks = ["openBNB", "Manta Pacific", "BNB"];
  const [open, setOpen] = useState(false); //;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState("openBNB");
  return (
    <>
      <div className="dark:bg-[#0F0E0E] outline-none  border-none bg-white dark:text-white text-black sticky z-10 top-0 w-[100%] font-light shadow-sm dark:shadow-none">
        <div className="flex  gap-3 sc0:gap-8 items-center w-full px-[2vw] py-1 text-md sc1:text-sm">
          <div className="w-[20%]   flex items-center justify-start font-bold text-2xl text-white">
            <Image
              src="/Images/Group 2.png"
              width={150}
              height={150}
              alt="logo"
            />
          </div>
          <div className="hidden min-[1300px]:flex  gap-2">
            {names.map((name) => {
              if (name === "More" || name === "Docs"||name==="Earn"||name==="Stats") {
                return (
                  <div onClick={()=>setSelected(name)}>
                    <DropdownMenu>
                          <DropdownMenuTrigger  className={`outline-none text-white font-bold flex gap-1 items-center dark:hover:bg-[#373636] bg-none rounded-lg px-3 py-1 ${selected===name&&"bg-[#373636]"} m-0`}>{name}
                            <FaCaretDown  className="text-sm text-gray-500"/>
                          </DropdownMenuTrigger>
                          {name==="Docs" && 
                          <DropdownMenuContent>
                            <Link href="/site/docs/tos">
                            <DropdownMenuItem>Terms Of Services</DropdownMenuItem>
                            </Link>
                            <Link href="/site/docs/privacy">
                            <DropdownMenuItem>Privacy</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                          }
                          {name==="More" && 
                          <DropdownMenuContent>
                            <Link href="/site/Analytics">
                            <DropdownMenuItem>Analytics</DropdownMenuItem>
                            </Link>
                            <Link href="/site/Swap">
                            <DropdownMenuItem>Swap</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                          }
                          {name==="Earn" && 
                          <DropdownMenuContent>
                            <Link href="/site/Vault">
                            <DropdownMenuItem>Vault</DropdownMenuItem>
                            </Link>
                            <Link href="/site/Stake">
                            <DropdownMenuItem>Stake</DropdownMenuItem>
                            </Link>
                            <Link href="/site/Referral">
                            <DropdownMenuItem>Referral</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                          }
                          {name==="Stats" && 
                          <DropdownMenuContent>
                            <Link href="/site/Stats">
                            <DropdownMenuItem>Overview</DropdownMenuItem>
                            </Link>
                            <Link href="/site/Leaderboard">
                            <DropdownMenuItem>Leaderboard</DropdownMenuItem>
                            </Link>
                          </DropdownMenuContent>
                          }
                    </DropdownMenu>
                  </div>
                    // </div>
                );
              } else {
                return (
                  <Link key={name} href={`/site/${name}`}>
                    <div
                      className={`dark:text-white text-black flex gap-2 items-center dark:hover:bg-[#373636] font-bold hover:bg-neutral-200 rounded-lg px-3 py-1 ${
                        selected === name && "dark:bg-[#373636] bg-neutral-300 "
                      }`}
                      onClick={() => setSelected(name)}
                    >
                      {name === "Airdrop" && <FaFire color="orange" />}
                      {name}
                    </div>
                  </Link>
                );
              }
            })}
          </div>
          <div className="flex gap-[1.5rem] items-center w-full justify-end">
            <div className="hidden sc1:block">
              <ToggleButton darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            {/* <div
              className="w-16 h-10 bg-[#383838] rounded-lg px-2 py-2 flex items-center justify-between"
              onClick={() => setOpen(true)}
            >
              <Image
                src={`/networks/${selectedNetwork
                  .split(" ")[0]
                  .toLowerCase()}.svg`}
                width={30}
                height={100}
                alt="networks"
              />
              <FaChevronDown color="white" size={10} />
            </div> */}
            <div>
              <div className="flex">
                <WalletsProvider />
              </div>
            </div>
            <div className="w-10 h-full flex sc4:hidden">
              {menuOpen ? (
                <IoIosClose size={30} onClick={() => setMenuOpen(false)} />
              ) : (
                <IoMenu size={20} onClick={() => setMenuOpen(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <div className=" w-[100vw] h-[95vh] bg-black absolute z-40 opacity-50">
              {" "}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              className=" w-[100vw] h-[90vh] sc1:w-[30vw] sc1:h-[25vh] flex items-center justify-center absolute z-50  "
            >
              <div className="w-[80vw] h-[70vw] bg-[#2B2B2B] rounded-xl flex flex-col">
                <div className="flex border-b border-b-slate-500 px-4 py-3 justify-between h-fit w-full">
                  <span className="text-sm text-slate-200 font-bold">
                    Select Network
                  </span>
                  <IoIosClose size={20} onClick={() => setOpen(false)} />
                </div>
                <div className="flex flex-col justify-between h-full py-6">
                  {networks.map((network, index) => {
                    return (
                      <>
                        <div
                          className={`flex items-center px-6 gap-4 w-full h-full hover:bg-[#3B3A3D] ${
                            selectedNetwork === network
                              ? "bg-[#3B3A3D]"
                              : "bg-none"
                          }`}
                          onClick={() => {
                            setSelectedNetwork(network);
                            setOpen(false);
                          }}
                        >
                          <Image
                            src={`/networks/${network
                              .split(" ")[0]
                              .toLowerCase()}.svg`}
                            width={30}
                            height={30}
                            alt="networkImage"
                          />
                          <span className="text-lg">{network}</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {menuOpen && (
        <div className="h-[95vh] w-full absolute z-50 right-0 bg-black flex flex-col gap-10 py-12 items-center">
          <div className="w-full">
            {names.map((name) => {
              return (
                <>
                  <Link key={name} href={`${name}`}>
                    <div
                      className="flex justify-between w-full h-fit py-4 px-8 text-lg items-center border-b border-b-[#2D2D2C] bg-[#141515]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {name}
                      <FaChevronRight size={10} color="white" />
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
