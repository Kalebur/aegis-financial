import "./TransactionCharts.css";
import { TransactionTable } from "../TransactionTable/TransactionTable.jsx";
import { PieChart } from "../PieChart/PieChart.jsx";
import { BarChart } from "../BarChart/BarChart.jsx";

export const TransactionCharts = ({ transactions }) => {
  return (
    <section className="transaction-charts">
      <div className="graph-container">
        <PieChart transactions={transactions} />
        <BarChart transactions={transactions} />
      </div>
      <TransactionTable transactions={transactions} />
    </section>
  );
};
