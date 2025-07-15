import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar.jsx";
import { TransactionCharts } from "./components/TransactionCharts/TransactionCharts.jsx";
import { RightSidebar } from "./components/RightSidebar/RightSidebar.jsx";
import { generateRandomTransactions } from "../../utils/transactionUtils.js";

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
  transactions: generateRandomTransactions(),
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
