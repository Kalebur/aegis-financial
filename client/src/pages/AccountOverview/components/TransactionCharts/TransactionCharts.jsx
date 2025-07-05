import "./TransactionCharts.css";
import TransactionTable from "../TransactionTable/TransactionTable";

export const TransactionCharts = ({ transactions }) => {
  return (
    <section className="transaction-charts">
      <div className="graph-container"></div>
      <TransactionTable transactions={transactions} />
    </section>
  );
};
