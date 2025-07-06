import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar.jsx";
import { TransactionCharts } from "./components/TransactionCharts/TransactionCharts.jsx";
import { RightSidebar } from "./components/RightSidebar/RightSidebar.jsx";

const account = {
  ficoScore: 740,
  past12MonthBalances: [
    {
      month: 5,
      year: 2025,
      startingBalance: 879.1,
      closingBalance: 1003.02,
    },
    {
      month: 6,
      year: 2025,
      startingBalance: 1003.02,
      closingBalance: 1003.02,
    },
  ],
  transactions: [
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
    {
      date: new Date(2025, 6, 5),
      amount: 1500.0,
      vendor: "Job",
      category: "Income",
      type: "credit",
    },
  ],
};

export const AccountOverview = () => {
  return (
    <main className="account-overview">
      <LeftSidebar />
      <TransactionCharts transactions={account.transactions} />
      <RightSidebar account={account} />
    </main>
  );
};
