import { BarChart } from "./components/BarChart/BarChart.jsx";
import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar.jsx";
import { PieChart } from "./components/PieChart/PieChart.jsx";

const transactions = [
  {
    date: new Date(2025, 6, 1),
    amount: 129.88,
    category: "Food",
    vendor: "Kroger",
    type: "debit",
  },
  {
    date: new Date(2025, 5, 30),
    amount: 84.1,
    vendor: "Steam",
    category: "Entertainment",
    type: "debit",
  },
  {
    date: new Date(2025, 5, 29),
    amount: 174.33,
    vendor: "KU Electric",
    category: "Utilities",
    type: "debit",
  },
  {
    date: new Date(2025, 5, 28),
    amount: 50.0,
    vendor: "Savings Account",
    category: "Savings",
    type: "debit",
  },
  {
    date: new Date(2025, 5, 27),
    amount: 850.0,
    vendor: "Landlord",
    category: "Rent",
    type: "debit",
  },
];

export const AccountOverview = () => {
  return (
    <main>
      <LeftSidebar />
    </main>
  );
};
