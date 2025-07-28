import { LeftSidebar } from "./components/LeftSidebar/LeftSidebar.jsx";
import { TransactionCharts } from "./components/TransactionCharts/TransactionCharts.jsx";
import { RightSidebar } from "./components/RightSidebar/RightSidebar.jsx";
import { generateRandomTransactions } from "../../utils/transactionUtils.js";
import { useEffect, useState } from "react";

export const AccountOverview = () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const transactions = generateRandomTransactions();
    const newAccount = {
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
      transactions,
    };
    setAccount(newAccount);
  }, []);

  return (
    <main className="account-overview">
      <LeftSidebar />
      {account ? (
        <>
          <TransactionCharts transactions={account.transactions} />
          <RightSidebar account={account} />
        </>
      ) : (
        <div>Loading Account Info...</div>
      )}
    </main>
  );
};
