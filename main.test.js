const { howManyDrugs } = require("./mell-needs-drugs.js");

test("12 and 4 should be 2 tablets now", () => {
  const actual = howManyDrugs(12, 4);
  const expected = "take 2 tablets now";
  expect(actual).toBe(expected);
});
test("20 and 2 should be 2 tablets in 2 hours", () => {
  const actual = howManyDrugs(20, 2);
  const expected = "take 2 tablets in 2 hours";
  expect(actual).toBe(expected);
});
test("8 and 2 should be 1 tablet in 2 hours", () => {
  const actual = howManyDrugs(8, 2);
  const expected = "take 1 tablet in 2 hours";
  expect(actual).toBe(expected);
});
test("15 and 0 should be 2 tablets in 4 hours", () => {
  const actual = howManyDrugs(15, 0);
  const expected = "take 2 tablets in 4 hours";
  expect(actual).toBe(expected);
});
