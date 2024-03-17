const { generateRandomStringSync } = require("./utils");

describe("generateRandomStringSync function", () => {
  test("should throw an error if length is not a number", () => {
    expect(() => generateRandomStringSync("abc")).toThrow(
      "Length must be a number"
    );
  });

  test("should throw an error if length is less than 1", () => {
    expect(() => generateRandomStringSync(0)).toThrow(
      "Length must be at least 1"
    );
  });

  test("should return a string of specified length", () => {
    const length = 10;
    const result = generateRandomStringSync(length);
    expect(result.length).toBe(length);
    expect(typeof result).toBe("string");
  });
});
