import React, { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import History from "./components/History";
import Transition from "./components/Transition";

const App = () => {
  // Transaction set
  const [transactions, setTransactions] = useState([]);
  // addTransaction function
  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    setTransactions([...transactions, newTransaction]);
  };
  // deleteTransaction function
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
  // totalIncome function
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  // totalExpense function
  const totalExpense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="w-full bg-zinc-950 text-white">
      <h1 className="text-center font-bold text-3xl py-10">Expense Tracker</h1>
      <Balance totalIncome={totalIncome} totalExpense={totalExpense} />
      <History
        deleteTransaction={deleteTransaction}
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Transition addTransaction={addTransaction} />
    </div>
  );
};

export default App;
