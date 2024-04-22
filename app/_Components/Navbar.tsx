"use client"
import React, { useContext, useState } from "react";
import Link from 'next/link'
import { FaFire } from "react-icons/fa";
import {CiWallet} from "react-icons/ci";
import ToggleButton from "./ToggleButton";
import theme from "../_context/theme";
import WalletsProvider from "./Wallet";

const Navbar = () => {
  const {darkMode,setDarkMode} = useContext(theme);
  const [selected,setSelected] = useState("Trade");
  const names = ["Trade","Airdrop","Referral","Leaderboard"]
  return (
    <div className="dark:bg-[#0F0E0E] outline-none  border-none bg-white dark:text-white text-black sticky z-10 top-0 w-[100vw] font-light shadow-sm dark:shadow-none">
      <div className="flex gap-[4vw] justify-between items-center w-full px-[2vw] py-1 text-md">
        <div>LOGO</div>
        <div className="flex gap-20">
          {names.map((name)=>{
            return(
              <Link key={name} href={`${name}`}>
                <div className={`dark:text-white text-black flex gap-2 items-center dark:hover:bg-[#373636] font-bold hover:bg-neutral-200 rounded-lg px-3 py-1 ${selected===name && 'dark:bg-[#373636] bg-neutral-300 '}`} onClick={()=>setSelected(name)}>{name==="Airdrop" && <FaFire color="orange"/>}{name}</div>
              </Link>
            )
          })}
        </div>
        <div className="flex gap-[2vw] items-center">
          <div><ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/></div>
          <div>BLOB</div>
          <div>
            <div>
            <WalletsProvider />
              </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;