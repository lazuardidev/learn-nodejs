const { generateRandomStringProm } = require("./utils");

describe("generateRandomStringProm function", () => {
  test("should generate a random string of the specified length", () => {
    return generateRandomStringProm(10).then((result) => {
      expect(typeof result).toBe("string");
      expect(result.length).toBe(10);
    });
  });

  test("should throw an error for non-numeric length", () => {
    return expect(generateRandomStringProm("invalid")).rejects.toThrow(
      "Length must be a number"
    );
  });

  test("should throw an error for length less than 1", () => {
    return expect(generateRandomStringProm(0)).rejects.toThrow(
      "Length must be greater than 0"
    );
  });
});
