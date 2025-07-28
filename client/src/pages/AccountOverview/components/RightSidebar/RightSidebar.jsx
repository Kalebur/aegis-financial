import { useState, useEffect } from "react";
import "./RightSidebar.css";

export const RightSidebar = ({ account }) => {
  const { ficoScore } = account;
  const [currentBalance, setCurrentBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const today = new Date();

    const expenses = account.transactions
      .filter(
        (txn) =>
          txn.date.getMonth() === today.getMonth() && txn.type === "debit"
      )
      .reduce((acc, txn) => acc + txn.amount, 0);

    const income = account.transactions
      .filter(
        (txn) =>
          txn.date.getMonth() === today.getMonth() && txn.type === "credit"
      )
      .reduce((acc, txn) => acc + txn.amount, 0);

    setTotalExpenses(expenses);
    setTotalIncome(income);
  }, []);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const startBalance =
      account.past12MonthBalances.find((bal) => bal.month === currentMonth)
        ?.startingBalance || 0;

    setCurrentBalance(startBalance + totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses, account.past12MonthBalances]);

  return (
    <section className="right-accounts-bar">
      <p className="totalIncome">Total Income: ${totalIncome}</p>
      <p className="totalExpenses">
        Total Expenses:
        <span>{totalExpenses > 0 ? `-$${totalExpenses}` : 0}</span>
      </p>
      <p className="currentBalance">
        Current Balance: ${currentBalance.toFixed(2)}
      </p>
      <p className="fico-score">FICO Score: {ficoScore}</p>
    </section>
  );
};
