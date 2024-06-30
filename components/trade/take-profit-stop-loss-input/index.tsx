import React, { useContext, useMemo } from "react";

import { SetTradeDataWithKey, TradeData } from "../types";
import { usePriceStore } from "../../../store/priceStore";
import userContext from "../../../app/_context/userContext";
import { stopLossOptions } from "../../../constants/trade";
import { getSlValue, getTpValue } from "./helper";
import { useGetCurrentTokenPrice } from "@/contracts-integration/hooks/useGetCurrentTokenPrice";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };
export default function TakeProfitStopLossInput({
  setTradeData,
  tradeData,
}: Props) {
  const { data } = useContext(userContext);
  const latestTokenPrice = useGetCurrentTokenPrice()
  const takeProfitValue = useMemo(() => {
    const tradePrice = Number(
      tradeData.tradeType === "Market" ? latestTokenPrice : tradeData.openPrice
    );
    const value = getTpValue(
      tradePrice,
      Number(tradeData.takeProfit),
      Number(tradeData.leverage),
      tradeData.longOrShort
    );
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  }, [
    latestTokenPrice,
    tradeData.takeProfit,
    tradeData.openPrice,
    tradeData.tradeType,
    tradeData.leverage,
  ]);

  const stopLossValue = useMemo(() => {
    const tradePrice = Number(
      tradeData.tradeType === "Market" ? latestTokenPrice : tradeData.openPrice
    );
    const value = getSlValue(
      tradePrice,
      Number(tradeData.stopLoss),
      Number(tradeData.leverage),
      tradeData.longOrShort
    );
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  }, [
    latestTokenPrice,
    tradeData.stopLoss,
    tradeData.openPrice,
    tradeData.tradeType,
    tradeData.leverage,
  ]);
  return (
    <>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="TP/SL"
          checked={tradeData.isTpSl}
          onClick={() => {
            setTradeData("isTpSl", !tradeData.isTpSl);
          }}
          className="dark:bg-gray-500 dark:text-[#Ocf334]"
        />
        <label
          htmlFor="TP/SL"
          className="text-sm dark:text-white text-gray-600"
        >
          TP/SL
        </label>
      </div>
      {tradeData.isTpSl && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-start gap-1">
            <p className="text-sm text-gray-600 dark:text-white">Take Profit</p>
            <div className="flex gap-2 justify-between">
              <div className="flex gap-4 w-full text-[0.8rem]">
                <div className="flex gap-2 w-1/5 bg-[#d4d4d4] dark:bg-[#2c2d2d] rounded-md px-2 py-1">
                  <input
                    type="number"
                    className="bg-transparent w-full outline-none text-black dark:text-white"
                    value={tradeData.takeProfit}
                    onChange={(e) => setTradeData("takeProfit", e.target.value)}
                  />
                  <span className="text-black dark:text-white">%</span>
                </div>
                <div className="flex w-3/5 gap-2 bg-[#d4d4d4] dark:bg-[#2c2d2d] text-black dark:text-white  rounded-md px-2 py-1">
                  <input
                    // type="number"
                    className="bg-transparent outline-none w-full"
                    value={takeProfitValue}
                    disabled
                  />
                  <span>USD</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-sm dark:text-white text-gray-600">Stop Loss</p>
            <div className="flex gap-2">
              {/* {stopLossOptions.map((item) => {
                return (
                  <button
                    onClick={() => setTradeData("stopLoss", item.value)}
                    className={`px-1 rounded-lg text-[12px] focus:bg-[#F7F7F8] focus:shadow-md hover:bg-[#F7F8F7] dark:focus:bg-[#262626] dark:hover:bg-[#262626] text-gray-500 dark:focus:text-white ${
                      tradeData.stopLoss === item.value
                        ? "bg-[#F7F7F8] shadow-md dark:bg-[#262626]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })} */}
              <div className="flex gap-4 w-full text-[0.8rem]">
                <div className="flex gap-2 w-1/5  bg-[#d4d4d4] text-black dark:text-white dark:bg-[#2c2d2d] rounded-md px-2 py-1">
                  <input
                    type="number"
                    className="bg-transparent w-full outline-none"
                    value={tradeData.stopLoss}
                    onChange={(e) => setTradeData("stopLoss", e.target.value)}
                  />
                  <span className="text-black dark:text-white">%</span>
                </div>
                <div className="flex w-3/5 gap-2 bg-[#d4d4d4] text-black dark:text-white dark:bg-[#2c2d2d]  rounded-md px-2 py-1">
                  <input
                    // type="number"
                    className="bg-transparent outline-none w-full"
                    value={stopLossValue}
                    disabled
                  />
                  <span>USD</span>
                </div>
              </div>
              {/* <button className="px-2 py-1 rounded-lg text-[12px] bg-[#F7F8F8] text-gray-600 dark:bg-[#262626] dark:text-gray-500">
                {stopLossValue}
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
