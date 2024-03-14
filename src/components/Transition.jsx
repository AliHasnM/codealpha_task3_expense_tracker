import React from "react";

const Transition = (props) => {
  return (
    <div className="w-96 m-auto mt-4">
      <h1 className="text-2xl font-bold text-zinc-200">Add New Transition</h1>
      <div className="border-[1px] border-zinc-800"></div>
      <div className="mt-4 flex justify-center w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const text = e.target.text.value;
            const amount = e.target.amount.value;
            props.addTransaction(text, amount);
            e.target.reset();
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="text" className="font-semibold text-xl">
              Text
            </label>
            <input
              id="text"
              className="py-1 px-2 rounded-md text-black"
              type="text"
              placeholder="Enter Text..."
              required
            />
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="amount" className="font-semibold text-xl">
              Amount{" "}
              <span className="text-sm">
                (negative - expense, positive - income)
              </span>
            </label>
            <input
              id="amount"
              className="py-1 px-2 rounded-md text-black"
              type="number"
              placeholder="Enter Amount..."
              required
            />
          </div>
          <button className="bg-zinc-800 w-full rounded-md mt-4 py-2 px-4 text-xl mb-4 hover:bg-zinc-700">
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transition;
