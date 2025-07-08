import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const BarChart = ({ transactions }) => {
  const today = new Date();
  const last7Days = Array.from({ length: 7 })
    .map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() - (6 - i));
      return d;
    })
    .reverse();

  const spendingPerDay = last7Days.map((date) => {
    const total = transactions
      .filter((txn) => txn.date.getDate() === date.getDate())
      .reduce((sum, txn) => sum + txn.amount, 0);
    return total;
  });

  const dayLabels = last7Days.map((dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "numeric",
      day: "2-digit",
    });
  });

  const lightGreen = getComputedStyle(document.documentElement)
    .getPropertyValue("--light-green")
    .trim();

  const data = {
    labels: dayLabels,
    datasets: [
      {
        label: "Daily Spending",
        data: spendingPerDay,
        backgroundColor: lightGreen,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100,
          callback: (value) =>
            new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(value),
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          },
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bar-chart">
      <Bar data={data} options={options} />
    </div>
  );
};
