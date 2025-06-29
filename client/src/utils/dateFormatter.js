export function formatDateToLong(dateString) {
  const date = new Date(dateString);

  if (isNaN(date)) throw new Error("Invalid Date");

  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}
