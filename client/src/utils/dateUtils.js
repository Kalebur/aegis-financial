export function formatDateToLong(dateString) {
  if (!dateString) return "Date Unavailable";
  const date = new Date(dateString);

  if (isNaN(date)) throw new Error("Invalid Date");

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

export function getRandomDate() {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 29);
  const date = new Date(
    startDate.getTime() +
      Math.random() * (today.getTime() - startDate.getTime())
  );
  date.setHours(0, 0, 0, 0);
  return date;
}
