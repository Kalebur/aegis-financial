import { useState, useEffect } from "react";
import "./RightSidebar.css";

export const RightSidebar = ({ account }) => {
  const { ficoScore } = account;
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  const getTotalExpenses = (transactions) => {
    const today = new Date();
    const things = transactions
      .filter(
        (txn) =>
          txn.date.getMonth() === today.getMonth() && txn.type === "debit"
      )
      .reduce((acc, txn) => (acc += txn.amount), 0);
    setTotalExpenses(things);
  };

  const getTotalIncome = (transactions) => {
    const today = new Date();
    const things = transactions
      .filter(
        (txn) =>
          txn.date.getMonth() === today.getMonth() && txn.type === "credit"
      )
      .reduce((acc, txn) => (acc += txn.amount), 0);
    setTotalIncome(things);
  };

  const calculateCurrentBalance = (account) => {
    const currentMonth = new Date().getMonth();
    const startBalance = account.past12MonthBalances.find(
      (bal) => bal.month === currentMonth
    )?.startingBalance;
    setCurrentBalance(startBalance + totalIncome - totalExpenses);
  };

  useEffect(() => {
    getTotalExpenses(account.transactions);
    getTotalIncome(account.transactions);
    calculateCurrentBalance(account);
  }, []);

  return (
    <section className="right-accounts-bar">
      <p className="totalIncome">Total Income: ${totalIncome}</p>
      <p className="totalExpenses">
        Total Expenses:
        <span>
          {totalExpenses > 0 ? `-$${JSON.stringify(totalExpenses)}` : 0}
        </span>
      </p>
      <p className="currentBalance">Current Balance: ${currentBalance}</p>
      <p className="fico-score">FICO Score: {ficoScore}</p>
    </section>
  );
};
