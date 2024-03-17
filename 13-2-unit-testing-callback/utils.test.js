const { generateRandomString } = require("./utils");

describe("generateRandomString function", () => {
  test("should generate a random string of the specified length", (done) => {
    generateRandomString(10, (error, result) => {
      expect(error).toBeNull();
      expect(typeof result).toBe("string");
      expect(result.length).toBe(10);
      done();
    });
  });

  test("should throw an error for non-numeric length", (done) => {
    generateRandomString("invalid", (error, result) => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });

  test("should throw an error for length less than 1", (done) => {
    generateRandomString(0, (error, result) => {
      expect(error).toBeInstanceOf(Error);
      done();
    });
  });
});
