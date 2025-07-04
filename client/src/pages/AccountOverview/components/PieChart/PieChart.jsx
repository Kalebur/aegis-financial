import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const categoryColors = {
  Food: "#007bff", // Blue
  Rent: "#ff4136", // Red
  Utilities: "#ffcc00", // Yellow
  Entertainment: "#aa00ff", // Purple
  Savings: "#2ecc40", // Green
};

export const PieChart = ({ transactions }) => {
  const categoryTotals = transactions.reduce((acc, txn) => {
    const { category, amount } = txn;
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  const backgroundColor = labels.map(
    (label) => categoryColors[label] || "#ccc"
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Amount",
        data,
        backgroundColor,
        borderColor: "#000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(value);
            return `${label}: ${formatted}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: "#FFF",
        padding: "1rem",
      }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};
