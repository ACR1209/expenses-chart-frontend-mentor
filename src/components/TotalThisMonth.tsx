import React from "react";
import expenses from "../data.json";

function TotalThisMonth() {
  return (
    <div className="flex items-end justify-between ">
      <div className="flex flex-col">
        <p className="text-mediumBrown md:text-base text-sm">Total this month</p>
        <h4 className="text-darkBrown text-3xl md:text-5xl font-bold">
          $478.33
        </h4>
      </div>
      <div className="flex flex-col items-end">
        <b className="text-darkBrown font-bold text-sm md:text-base">+2.4%</b>
        <p className="text-mediumBrown md:text-base text-sm">from last month</p>
      </div>
    </div>
  );
}

export default TotalThisMonth;
