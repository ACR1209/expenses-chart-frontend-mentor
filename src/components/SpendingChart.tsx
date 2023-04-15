import React from "react";
import expenses from "../data.json";
import Bar from "./Bar";

export type ExpenseWHeightType = {
  day: string;
  amount: number;
  height: number;
  isMax?: boolean;
};

function SpendingChart() {
  function calculateHeights(): ExpenseWHeightType[] {
    let maxExpense: number = 0;
    expenses.forEach((expense) => {
      if (expense.amount > maxExpense) {
        maxExpense = expense.amount;
      }
    });

    let expensesWithHeight: ExpenseWHeightType[] = [];

    expenses.forEach((expense) => {
      expensesWithHeight.push({
        ...expense,
        height: Math.round((expense.amount * 150) / maxExpense),
        isMax: expense.amount === maxExpense,
      });
    });
    console.log(expensesWithHeight);
    return expensesWithHeight;
  }

  calculateHeights();

  return (
    <div className="flex justify-evenly items-end pt-[70px]">
      {calculateHeights().map((expense, i) => (
        <Bar {...expense} key={i} />
      ))}
    </div>
  );
}

export default SpendingChart;
