import { PieChart } from "./components/PieChart/PieChart.jsx";

const transactions = [
  { date: "2025-07-01", amount: 129.88, category: "Food", type: "debit" },
  { date: "2025-07-01", amount: 84.1, category: "Entertainment" },
  { date: "2025-07-01", amount: 174.33, category: "Utilities" },
  { date: "2025-07-01", amount: 50.0, category: "Savings" },
  { date: "2025-07-01", amount: 850.0, category: "Rent" },
];

export const AccountOverview = () => {
  return (
    <div style={{ width: "200px", margin: "0 auto" }}>
      <h2>Spending Breakdown</h2>
      <PieChart transactions={transactions} />
    </div>
  );
};
