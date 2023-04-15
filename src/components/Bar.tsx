import React from "react";
import { ExpenseWHeightType } from "./SpendingChart";

function Bar({ day, amount, height, isMax }: ExpenseWHeightType) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="tooltip-wrapper">
        <div
          style={{
            minHeight: `${height}px`,
            background: `${
              !isMax ? "hsl(10, 79%, 65%)" : "hsl(186, 34%, 60%)"
            }`,
          }}
          className="bg-softRed rounded-md w-[30px] md:w-[50px] hover:opacity-50 cursor-pointer"
        />
        <span className="tooltip-text font-bold bg-darkBrown -top-10">${amount}</span>
      </div>
      <p className="font-normal text-mediumBrown">{day}</p>
    </div>
  );
}

export default Bar;
