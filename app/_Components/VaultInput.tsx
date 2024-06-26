import Image from 'next/image'
import React from 'react'

const VaultInput = ({data,setData,type,image}) => {
  return (
    <div id="deposit-input" className="w-full rounded-lg bg-[#181A20] border-b-[0.2px] border-gray-800 flex px-4">
        <input type="number" className="bg-transparent outline-none w-full h-full py-2 text-white text-lg" value={data.amount} onChange={(e)=>setData({...data,amount:+e.target.value})}/>
            <div className="flex gap-2 px-4 items-center ">
                    <span>{type==="deposit"?"USDC":"jvUSDC"}</span>
                <Image src={image} width={25} height={25} alt="token"/>
            </div>
    </div>
  )
}

export default VaultInput