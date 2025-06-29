import { formatDateToLong } from "../utils/dateFormatter";

test("converts date to long format", () => {
  const dateString = "Thu, 26 Jun 2025 15:02:10 GMT";
  const expectedDate = "June 26, 2025";

  const formattedDate = formatDateToLong(dateString);

  expect(formattedDate).toBe(expectedDate);
});

test("throws error when receiving invalid date string", () => {
  const dateString = "ABABB";

  expect(() => formatDateToLong(dateString)).toThrow();
});
