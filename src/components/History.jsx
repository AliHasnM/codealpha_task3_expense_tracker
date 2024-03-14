import React from "react";

const History = (props) => {
  return (
    <div className="w-96 m-auto mt-4">
      <h1 className="text-2xl font-bold text-zinc-200">History</h1>
      <div className="border-[1px] border-zinc-800"></div>
      <ul className="flex flex-col mt-2 w-full gap-1">
        {props.transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={`flex justify-between py-2 px-4 bg-zinc-100 text-black border-r-4 rounded-md border-${
              transaction.amount < 0 ? "red" : "green"
            }-400`}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0
                ? `-$${Math.abs(transaction.amount).toFixed(2)}`
                : `+$${transaction.amount.toFixed(2)}`}
            </span>
            <button
              className="bg-red-400 px-2 rounded-sm text-white opacity-25 hover:opacity-100 text-xl py-1"
              onClick={() => props.deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
