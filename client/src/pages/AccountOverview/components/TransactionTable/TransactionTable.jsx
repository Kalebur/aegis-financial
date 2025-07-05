import React, { useEffect, useRef, useState } from "react";

export const TransactionTable = ({ transactions }) => {
  console.log(transactions);
  const tableRef = useRef(null);
  const tbodyRef = useRef(null);
  const [emptyRows, setEmptyRows] = useState(0);

  useEffect(() => {
    const calculateEmptyRows = () => {
      if (!tbodyRef.current || !tableRef.current) return;

      const rowHeight =
        tbodyRef.current.querySelector("tr")?.offsetHeight || 40;
      const pageHeight = window.innerHeight;
      const tableBottom = tableRef.current.getBoundingClientRect().bottom;
      const remainingHeight = pageHeight - tableBottom;

      const neededEmptyRows = Math.floor(remainingHeight / rowHeight) - 1;
      setEmptyRows(neededEmptyRows > 0 ? neededEmptyRows : 0);
    };

    setTimeout(calculateEmptyRows, 0);

    window.addEventListener("resize", calculateEmptyRows);
    return () => window.removeEventListener("resize", calculateEmptyRows);
  }, [transactions]);

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div id="table-container">
      <table
        ref={tableRef}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Vendor</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Amount</th>
          </tr>
        </thead>
        <tbody ref={tbodyRef}>
          {sortedTransactions.map((tx, index) => (
            <tr key={index}>
              <td style={tdStyle}>{tx.date.toISOString()}</td>
              <td style={tdStyle}>{tx.vendor}</td>
              <td style={tdStyle}>{tx.category}</td>
              <td style={tdStyle}>${parseFloat(tx.amount).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid var(--dark-green)",
  padding: "8px",
  background: "var(--light-green)",
  color: "#fff",
  textAlign: "center",
};

const tdStyle = {
  border: "1px solid var(--dark-green)",
  padding: "8px",
  height: "40px",
  backgroundColor: "white",
};
