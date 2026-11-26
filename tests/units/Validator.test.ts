import { email, maxValue, phone, required } from "@/app/case/doubles/units/Validator";

describe("test Validator.ts", () => {

  describe("validate required function", () => {
    test("should return false for null", () => {
      const validator = required(null);
      expect(validator).toBe(false);
    });
    test("should return false for empty string", () => {
      const validator = required("   ");
      expect(validator).toBe(false);
    });

    test("should return true for non-empty string", () => {
      const validator = required("Hello");
      expect(validator).toBe(true);
    });

  });

  describe("validate email function", () => {
    test("should return false for empty string", () => {
      const validator = email("");
      expect(validator).toBe(false);
    });
    test("should return false for invalid email", () => {
      const validator = email("invalid-email");
      expect(validator).toBe(false);
    });
    test("should return true for valid email", () => {
      const validator = email("test@example.com");
      expect(validator).toBe(true);
    });
  });

  describe("validate phone function", () => {
    test("should return false for empty string", () => {
      const validator = phone("");
      expect(validator).toBe(false);
    });
    test("should return false for invalid phone number", () => {
      const validator = phone("123");
      expect(validator).toBe(false);
    });
    test("should return true for valid phone number", () => {
      const validator = phone("+12345678900");
      expect(validator).toBe(true);
    });
  });

  describe("validate maxValue function", () => {
    it("should return true for an empty string", () => {
        const validator = maxValue({ max: 10 });
        expect(validator("")).toBe(true);
    });
    it("should return true when value length is less than max", () => {
        const validator = maxValue({ max: 10 });
        expect(validator("Hello")).toBe(true);
    });
    it("should return true when value length equals max", () => {
        const validator = maxValue({ max: 5 });
        expect(validator("Hello")).toBe(true);
    });
    it("should return false when value length exceeds max", () => {
        const validator = maxValue({ max: 5 });
        expect(validator("Hello World")).toBe(false);
    });
    it("should return false when max is zero", () => {
        const validator = maxValue({ max: 0 });
        expect(validator("Hello")).toBe(false);
    });
  });

});
