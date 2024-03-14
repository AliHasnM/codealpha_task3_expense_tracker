import React from "react";

const Balance = (props) => {
  return (
    <div className="w-96 m-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-zinc-200">Your Balance</h1>
        <h3 className="text-2xl font-bold text-zinc-200">
          ${props.totalIncome + props.totalExpense}
        </h3>
      </div>
      <div className="flex items-center justify-between px-2 py-2 bg-zinc-800 rounded-md mt-4">
        <div className="flex flex-col text-center justify-center">
          <h1 className="text-xl font-semibold text-zinc-200 py-2 px-12">
            Income
          </h1>
          <h3 className="text-xl font-semibold text-green-400 py-2 px-12">
            +${props.totalIncome.toFixed(2)}
          </h3>
        </div>
        <div className="flex flex-col text-center justify-center border-l-[1px]">
          <h1 className="text-xl font-semibold text-zinc-200 py-2 px-12">
            Expense
          </h1>
          <h3 className="text-xl font-semibold text-red-400 py-2 px-12">
            -${Math.abs(props.totalExpense).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
