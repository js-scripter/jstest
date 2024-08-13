const helpers = require('./helpers.js')

describe("Helpers Suite", () => {
  it("should tell whether a string is a pallindrom", () => {
    expect(helpers.isPalindrome("")).toEqual(true);
    expect(helpers.isPalindrome("abcd")).toEqual(false);
    expect(helpers.isPalindrome("11/11/11")).toEqual(true);
    expect(helpers.isPalindrome("madam")).toEqual(true);
  });

  it("should remove duplicated elements", () => {
    expect(helpers.removeDuplicates([])).toEqual([]);
    expect(helpers.removeDuplicates([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(helpers.removeDuplicates([0, 0, 4, 4, 5, 5])).toEqual([0, 4, 5]);
    expect(helpers.removeDuplicates([0, "", "", 1, 2, "em"])).toEqual([
      0,
      "",
      1,
      2,
      "em",
    ]);
    expect(helpers.removeDuplicates(["a", "b", "b", "ed", "ed", "f"])).toEqual([
      "a",
      "b",
      "ed",
      "f",
    ]);
  });

  it("should identify if sum to target exist", () => {
    expect(helpers.sumToTarget([], 0)).toEqual([]);
    expect(helpers.sumToTarget([3, 6, 7, 12, -1, -4], 100)).toEqual([]);
    expect(helpers.sumToTarget([3, 6, 7, 12, -1, -4], 10)).toEqual([3, 7]);
    expect(helpers.sumToTarget([44, 5, 1, 6, -43, -1, 7], 0)).toEqual([1, -1]);
  });
});
