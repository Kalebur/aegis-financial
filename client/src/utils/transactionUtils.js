export const generateRandomTransactions = () => {
  const foodVendors = [
    "McDonalds",
    "Papa John's",
    "KFC",
    "Kroger",
    "Walmart",
    "Target",
    "Burger King",
    "DQ",
  ];
  const utilityVendors = [
    "Water Company",
    "KU Electric",
    "Spectrum",
    "Verizon",
    "State Farm",
  ];
  const entertainmentVendors = [
    "Netflix",
    "Spotify",
    "AMC Theaters",
    "Hulu",
    "Steam",
    "Xbox Live",
    "PlayStation Store",
  ];

  const transactions = [];
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 29);

  const transactionsByDay = {};

  const getRandomDate = () => {
    const date = new Date(
      startDate.getTime() +
        Math.random() * (today.getTime() - startDate.getTime())
    );
    date.setHours(0, 0, 0, 0);
    return date;
  };

  // Rent: 1 transaction
  const rentDate = getRandomDate();
  const rentAmount = Math.floor(Math.random() * (2000 - 600 + 1)) + 600;
  addTransaction(
    transactions,
    {
      date: rentDate,
      vendor: "Landlord",
      category: "Rent",
      amount: rentAmount,
    },
    transactionsByDay
  );

  // Utilities: 1 per vendor
  utilityVendors.forEach((vendor) => {
    let date;
    do {
      date = getRandomDate();
    } while ((transactionsByDay[formatDate(date)] || []).length >= 15);

    let amount;
    if (vendor === "Water Company") {
      amount = Math.floor(Math.random() * (50 - 35 + 1)) + 35;
    } else {
      amount = Math.floor(Math.random() * (250 - 35 + 1)) + 35;
    }

    addTransaction(
      transactions,
      {
        date,
        vendor,
        category: "Utilities",
        amount,
      },
      transactionsByDay
    );
  });

  // Income: 2–3, 14 days apart, same amount, all Fridays
  const fridays = [];
  for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
    if (d.getDay() === 5) {
      d.setHours(0, 0, 0, 0);
      fridays.push(new Date(d));
    }
  }

  const numIncome = Math.floor(Math.random() * 2) + 2; // 2 or 3
  const startIdx = Math.floor(
    Math.random() * (fridays.length - (numIncome - 1) * 2)
  );
  const incomeAmount = Math.floor(Math.random() * (2500 - 650 + 1)) + 650;

  for (let i = 0; i < numIncome; i++) {
    const date = fridays[startIdx + i * 2];
    addTransaction(
      transactions,
      {
        date,
        vendor: "Employer",
        category: "Income",
        amount: incomeAmount,
      },
      transactionsByDay
    );
  }

  // Food transactions (random amount)
  const foodCount = Math.floor(Math.random() * 20) + 10;
  for (let i = 0; i < foodCount; i++) {
    const date = getRandomDate();
    const vendor = foodVendors[Math.floor(Math.random() * foodVendors.length)];
    const amount = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    addTransaction(
      transactions,
      {
        date,
        vendor,
        category: "Food",
        amount,
      },
      transactionsByDay
    );
  }

  // Entertainment transactions
  const entertainmentCount = Math.floor(Math.random() * 10) + 5;
  for (let i = 0; i < entertainmentCount; i++) {
    const date = getRandomDate();
    const vendor =
      entertainmentVendors[
        Math.floor(Math.random() * entertainmentVendors.length)
      ];
    const amount = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    addTransaction(
      transactions,
      {
        date,
        vendor,
        category: "Entertainment",
        amount,
      },
      transactionsByDay
    );
  }

  return transactions.sort((a, b) => a.date - b.date);
};

const addTransaction = (transactionList, transaction, dailyTransactions) => {
  const dateStr = formatDate(transaction.date);
  if (!dailyTransactions[dateStr]) {
    dailyTransactions[dateStr] = [];
  }
  if (dailyTransactions[dateStr].length < 15) {
    dailyTransactions[dateStr].push(transaction);
    transactionList.push(transaction);
  }
};

const formatDate = (date) => date.toISOString().split("T")[0];
