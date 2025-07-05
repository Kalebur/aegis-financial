import "./RightSidebar.css";

export const RightSidebar = () => {
  return (
    <section className="right-accounts-bar">
      <p className="totalIncome"></p>
      <p className="totalExpenses"></p>
      <p className="currentBalance"></p>
      <p className="fico-score">FICO Score: 800</p>
    </section>
  );
};
