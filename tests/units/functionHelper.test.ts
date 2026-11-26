import { initial } from "@/components/helper/functionHelper.ts";

describe("test functionHelper.ts", () => {

    test("should return the initials of a full name", () => {
      const result = initial("John Smith", 2);
      expect(result).toBe("JS");
    });

    test("should return the first two initials when the name has three words", () => {
        const result = initial("John Michael Smith", 2);
        expect(result).toBe("JM");
    });

    test("should return all initials when sliceIndex matches word count", () => {
        const result = initial("John Michael Smith", 3);
        expect(result).toBe("JMS");
    });

    test("should return only the first initial when sliceIndex is 1", () => {
        const result = initial("John Smith", 1);
        expect(result).toBe("J");
    });

    test("should return an empty string when sliceIndex is zero", () => {
        const result = initial("John Smith", 0);
        expect(result).toBe("");
    });

    test("should return an empty string for an empty title", () => {
        const result = initial("", 2);
        expect(result).toBe("");
    });

    test("should return an empty string when sliceIndex is greater than word count", () => {
        const result = initial("John Smith", 5);
        expect(result).toBe("JS");
    });

    test("should handle a single word", () => {
        const result = initial("John", 1);
        expect(result).toBe("J");
    });

});
