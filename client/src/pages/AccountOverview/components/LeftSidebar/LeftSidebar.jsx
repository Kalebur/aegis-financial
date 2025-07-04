import "./LeftSidebar.css";

export const LeftSidebar = () => {
  return (
    <section className="left-accounts-bar">
      <nav>
        <ul className="sidebar-links">
          <li>
            <a href="/">Account Overview</a>
          </li>
          <li>
            <a href="/">Pay A Bill</a>
          </li>
          <li>
            <a href="/">Apply For A Loan</a>
          </li>
          <li>
            <a href="/">View All Transactions</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
