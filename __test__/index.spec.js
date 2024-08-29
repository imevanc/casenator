const {
  toCamelCase,
  toUpperCase,
  toLowerCase,
  toKebabCase,
  toPascalCase,
  substring,
  reverseString,
} = require("../src/index");
describe("toCamelCase", () => {
  test("should throw TypeError for non-string input (camelCase)", () => {
    expect(() => toCamelCase(123)).toThrow(TypeError);
    expect(() => toCamelCase({})).toThrow(TypeError);
    expect(() => toCamelCase([])).toThrow(TypeError);
    expect(() => toCamelCase(null)).toThrow(TypeError);
    expect(() => toCamelCase(undefined)).toThrow(TypeError);
  });

  test('should convert "The Pawsitive Team" to "thePawsitiveTeam"', () => {
    expect(toCamelCase("The Pawsitive Team")).toBe("thePawsitiveTeam");
  });

  test('should convert "the-pawsitive-team" to "thePawsitiveTeam"', () => {
    expect(toCamelCase("the-pawsitive-team")).toBe("thePawsitiveTeam");
  });

  test('should convert "The_Pawsitive_Team" to "thePawsitiveTeam"', () => {
    expect(toCamelCase("The_Pawsitive_Team")).toBe("thePawsitiveTeam");
  });

  test("should handle empty string", () => {
    expect(toCamelCase("")).toBe("");
  });

  test("should handle multiple spaces", () => {
    expect(toCamelCase("the   pawsitive   team")).toBe("thePawsitiveTeam");
  });

  test("should retain special characters", () => {
    expect(toCamelCase("The Pawsitive! @Team")).toBe("thePawsitive!@Team");
  });

  test("should handle strings with numbers", () => {
    expect(toCamelCase("pawsitive 123 team")).toBe("pawsitive123Team");
  });
});

describe("toPascalCase", () => {
  test("should throw TypeError for non-string input (PascalCase)", () => {
    expect(() => toPascalCase(123)).toThrow(TypeError);
    expect(() => toPascalCase({})).toThrow(TypeError);
    expect(() => toPascalCase([])).toThrow(TypeError);
    expect(() => toPascalCase(null)).toThrow(TypeError);
    expect(() => toPascalCase(undefined)).toThrow(TypeError);
  });

  test('should convert "The Pawsitive Team" to "ThePawsitiveTeam"', () => {
    expect(toPascalCase("The Pawsitive Team")).toBe("ThePawsitiveTeam");
  });

  test('should convert "the-pawsitive-team" to "ThePawsitiveTeam"', () => {
    expect(toPascalCase("the-pawsitive-team")).toBe("ThePawsitiveTeam");
  });

  test('should convert "the_pawsitive_team" to "ThePawsitiveTeam"', () => {
    expect(toPascalCase("the_pawsitive_team")).toBe("ThePawsitiveTeam");
  });

  test("should handle empty string", () => {
    expect(toPascalCase("")).toBe("");
  });

  test("should handle multiple spaces", () => {
    expect(toPascalCase("the   pawsitive   team")).toBe("ThePawsitiveTeam");
  });

  test("should retain special characters", () => {
    expect(toPascalCase("The Pawsitive! @Team")).toBe("ThePawsitive!@Team");
  });

  test("should handle strings with numbers", () => {
    expect(toPascalCase("pawsitive 123 team")).toBe("Pawsitive123Team");
  });
});

describe("toKebabCase", () => {
  test("should throw TypeError for non-string input (kebab-case)", () => {
    expect(() => toKebabCase(123)).toThrow(TypeError);
    expect(() => toKebabCase({})).toThrow(TypeError);
    expect(() => toKebabCase([])).toThrow(TypeError);
    expect(() => toKebabCase(null)).toThrow(TypeError);
    expect(() => toKebabCase(undefined)).toThrow(TypeError);
  });

  test('should convert "The Pawsitive Team" to "the-pawsitive-team"', () => {
    expect(toKebabCase("The Pawsitive Team")).toBe("the-pawsitive-team");
  });

  test('should convert "thePawsitiveTeam" to "the-pawsitive-team"', () => {
    expect(toKebabCase("thePawsitiveTeam")).toBe("the-pawsitive-team");
  });

  test('should convert "ThePawsitiveTeam" to "the-pawsitive-team"', () => {
    expect(toKebabCase("ThePawsitiveTeam")).toBe("the-pawsitive-team");
  });

  test("should handle multiple spaces", () => {
    expect(toKebabCase("the pawsitive   team")).toBe("the-pawsitive-team");
  });

  test("should retain special characters", () => {
    expect(toKebabCase("The Pawsitive! @Team")).toBe("the-pawsitive!-@team");
  });

  test("should handle strings with numbers", () => {
    expect(toKebabCase("Pawsitive 123 Team")).toBe("pawsitive-123-team");
  });

  test("should handle empty string", () => {
    expect(toKebabCase("")).toBe("");
  });

  test("should handle trailing and leading spaces", () => {
    expect(toKebabCase("   The Pawsitive Team   ")).toBe("the-pawsitive-team");
  });
});

describe("toUpperCase", () => {
  test("should convert a string to UPPERCASE", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });

  test("should handle special characters in UPPERCASE conversion", () => {
    expect(toUpperCase("hello @world!")).toBe("HELLO @WORLD!");
  });

  test("should throw TypeError for non-string input in UPPERCASE conversion", () => {
    expect(() => toUpperCase(123)).toThrow(TypeError);
    expect(() => toUpperCase(null)).toThrow(TypeError);
    expect(() => toUpperCase({})).toThrow(TypeError);
  });
});

describe("toLowerCase", () => {
  test("should convert a string to lowercase", () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
  });

  test("should handle special characters in lowercase conversion", () => {
    expect(toLowerCase("HELLO @WORLD!")).toBe("hello @world!");
  });

  test("should throw TypeError for non-string input in lowercase conversion", () => {
    expect(() => toLowerCase(123)).toThrow(TypeError);
    expect(() => toLowerCase(null)).toThrow(TypeError);
    expect(() => toLowerCase([])).toThrow(TypeError);
  });
});

describe("reverseString", () => {
  test("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("should reverse a string with spaces and special characters", () => {
    expect(reverseString("hello world!")).toBe("!dlrow olleh");
  });

  test("should reverse a single character string", () => {
    expect(reverseString("a")).toBe("a");
  });

  test("should throw TypeError for non-string input in reverseString", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(null)).toThrow(TypeError);
  });
});

describe("subString", () => {
  test("should return a substring from a string", () => {
    expect(substring("hello world", 0, 5)).toBe("hello");
  });

  test("should return substring with only start index provided", () => {
    expect(substring("hello world", 6)).toBe("world");
  });

  test("should handle out-of-bound indexes in substring", () => {
    expect(substring("hello world", 0, 50)).toBe("hello world");
    expect(substring("hello world", 12)).toBe("");
  });

  test("should throw TypeError for non-string input in substring", () => {
    expect(() => substring(123, 0, 5)).toThrow(TypeError);
    expect(() => substring(null, 0, 5)).toThrow(TypeError);
  });
});
