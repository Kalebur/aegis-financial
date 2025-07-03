import { BarChart } from "./components/BarChart/BarChart.jsx";
import { PieChart } from "./components/PieChart/PieChart.jsx";

const transactions = [
  {
    date: new Date(2025, 6, 1),
    amount: 129.88,
    category: "Food",
    type: "debit",
  },
  {
    date: new Date(2025, 5, 30),
    amount: 84.1,
    category: "Entertainment",
  },
  {
    date: new Date(2025, 5, 29),
    amount: 174.33,
    category: "Utilities",
  },
  {
    date: new Date(2025, 5, 28),
    amount: 50.0,
    category: "Savings",
  },
  {
    date: new Date(2025, 5, 27),
    amount: 850.0,
    category: "Rent",
  },
];

export const AccountOverview = () => {
  return (
    <div style={{ width: "200px", margin: "0 auto" }}>
      <h2>Spending Breakdown</h2>
      <PieChart transactions={transactions} />
      <BarChart transactions={transactions} />
    </div>
  );
};
