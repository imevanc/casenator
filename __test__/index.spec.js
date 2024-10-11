import {
  reverseString,
  substring,
  toCamelCase,
  toCapitalCase,
  toCobolCase,
  toConstantCase,
  toDotCase,
  toKebabCase,
  toLeetSpeak,
  toLowerCase,
  toNoCase,
  toPascalCase,
  toPathCase,
  toSnakeCase,
  toUpperCase,
} from "../src";

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

describe("toCapitalCase", () => {
  test("should convert to capital case", () => {
    expect(toCapitalCase("hello world")).toBe("Hello World");
    expect(toCapitalCase("HELLO WORLD")).toBe("Hello World");
    expect(toCapitalCase("hello-world")).toBe("Hello World");
    expect(toCapitalCase("hello_world")).toBe("Hello World");
    expect(toCapitalCase(" hello world ")).toBe("Hello World");
    expect(toCapitalCase(" hello . world ")).toBe("Hello World");
  });

  test("should handle single word inputs", () => {
    expect(toCapitalCase("hello")).toBe("Hello");
  });

  test("should handle empty string", () => {
    expect(toCapitalCase("")).toBe("");
  });

  test("should throw error for non-string input", () => {
    expect(() => toCapitalCase(123)).toThrow(TypeError);
  });

  test("should handle special characters", () => {
    expect(toCapitalCase("hello-world!")).toBe("Hello World!");
  });
});

describe("toConstantCase", () => {
  test("should convert to CONSTANT_CASE", () => {
    expect(toConstantCase("hello world")).toBe("HELLO_WORLD");
    expect(toConstantCase("HELLO WORLD")).toBe("HELLO_WORLD");
    expect(toConstantCase("hello-world")).toBe("HELLO_WORLD");
    expect(toConstantCase("helloWorld")).toBe("HELLO_WORLD");
    expect(toConstantCase("hello-World   ")).toBe("HELLO_WORLD");
    expect(toConstantCase("Hello WORLD1   ")).toBe("HELLO_WORLD1");
    expect(toConstantCase("hello-  World   ")).toBe("HELLO_WORLD");
  });

  test("should handle single word inputs", () => {
    expect(toConstantCase("hello")).toBe("HELLO");
  });

  test("should handle empty string", () => {
    expect(toConstantCase("")).toBe("");
  });

  test("should throw error for non-string input", () => {
    expect(() => toConstantCase(123)).toThrow(TypeError);
  });

  test("should handle special characters", () => {
    expect(toConstantCase("hello-world!")).toBe("HELLO_WORLD");
  });
});

describe("toDotCase", () => {
  test("should convert to dot.case", () => {
    expect(toDotCase("hello world")).toBe("hello.world");
    expect(toDotCase("HELLO WORLD")).toBe("hello.world");
    expect(toDotCase("hello-world")).toBe("hello.world");
    expect(toDotCase("helloWorld")).toBe("hello.world");
    expect(toDotCase("  hello  WORLD  ")).toBe("hello.world");
    expect(toDotCase("hello.  World")).toBe("hello.world");
    expect(toDotCase("hello    world")).toBe("hello.world");
    expect(toDotCase("  hello World-  ")).toBe("hello.world");
  });

  test("should handle single word inputs", () => {
    expect(toDotCase("hello")).toBe("hello");
  });

  test("should handle empty string", () => {
    expect(toDotCase("")).toBe("");
  });

  test("should throw error for non-string input", () => {
    expect(() => toDotCase(123)).toThrow(TypeError);
  });

  test("should handle special characters", () => {
    expect(toDotCase("hello-world!")).toBe("hello.world!");
  });
});

describe("toNoCase", () => {
  test("should convert to no case", () => {
    expect(toNoCase("hello world")).toBe("hello world");
    expect(toNoCase("HELLO WORLD")).toBe("hello world");
    expect(toNoCase("hello-world")).toBe("hello world");
    expect(toNoCase("hello_world")).toBe("hello world");
    expect(toNoCase("hello   world  ")).toBe("hello world");
    expect(toNoCase("hello--world ")).toBe("hello world");
    expect(toNoCase("  hello.world")).toBe("hello world");
    expect(toNoCase("hello_/world ")).toBe("hello world");
  });

  test("should handle single word inputs", () => {
    expect(toNoCase("hello")).toBe("hello");
  });

  test("should handle empty string", () => {
    expect(toNoCase("")).toBe("");
  });

  test("should throw error for non-string input", () => {
    expect(() => toNoCase(123)).toThrow(TypeError);
  });

  test("should handle special characters", () => {
    expect(toNoCase("hello-world!")).toBe("hello world");
  });
});

describe("toSnakeCase", () => {
  test("should convert mixed cases and spaces to snake_case", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
    expect(toSnakeCase("HELLO WORLD")).toBe("hello_world");
    expect(toSnakeCase("hello-world")).toBe("hello_world");
    expect(toSnakeCase("hello_world")).toBe("hello_world");
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
    expect(toSnakeCase("HelloWorld")).toBe("hello_world");
    expect(toSnakeCase("   Hello World  ")).toBe("hello_world");
    expect(toSnakeCase("Hello____World ")).toBe("hello_world");
    expect(toSnakeCase("Hello____World_+ ")).toBe("hello_world");
    expect(toSnakeCase("Hello____World/")).toBe("hello_world");
    expect(toSnakeCase("Hello/World")).toBe("hello_world");
  });

  test("should handle leading and trailing spaces", () => {
    expect(toSnakeCase("  hello world  ")).toBe("hello_world");
    expect(toSnakeCase("   Hello-World   ")).toBe("hello_world");
  });

  test("should handle special characters", () => {
    expect(toSnakeCase("hello@world!")).toBe("hello_world");
    expect(toSnakeCase("hello#world$")).toBe("hello_world");
    expect(toSnakeCase("hello/world")).toBe("hello_world");
    expect(toSnakeCase("hello(world)")).toBe("hello_world");
    expect(toSnakeCase("hello[world]")).toBe("hello_world");
  });

  test("should handle numbers in strings", () => {
    expect(toSnakeCase("helloWorld123")).toBe("hello_world123");
    expect(toSnakeCase("123HelloWorld")).toBe("123_hello_world");
  });

  test("should handle single word inputs", () => {
    expect(toSnakeCase("hello")).toBe("hello");
    expect(toSnakeCase("HELLO")).toBe("hello");
  });

  test("should handle empty string", () => {
    expect(toSnakeCase("")).toBe("");
  });

  test("should throw error for non-string input", () => {
    expect(() => toSnakeCase(123)).toThrow(TypeError);
    expect(() => toSnakeCase({})).toThrow(TypeError);
    expect(() => toSnakeCase([])).toThrow(TypeError);
  });

  test("should handle multiple spaces and underscores", () => {
    expect(toSnakeCase("hello  world")).toBe("hello_world");
    expect(toSnakeCase("hello__world")).toBe("hello_world");
    expect(toSnakeCase("hello   world")).toBe("hello_world");
  });

  test("should handle camelCase mixed with other separators", () => {
    expect(toSnakeCase("helloWorld-test_example")).toBe(
      "hello_world_test_example",
    );
    expect(toSnakeCase("helloWorldTest-Example")).toBe(
      "hello_world_test_example",
    );
  });
});

describe("toPathCase", () => {
  // Valid Cases
  test("should convert HeLLo_world-123! to /helloWorld123", () => {
    expect(toPathCase("HeLLo_world-123!")).toBe("/helloWorld123");
  });

  test("should convert hello 123 world to /helloWorld123", () => {
    expect(toPathCase("hello 123 world")).toBe("/hello123World");
  });

  test("should convert hello-world to /helloWorld", () => {
    expect(toPathCase("hello-world")).toBe("/helloWorld");
  });

  test("should convert space-separated string to /camelCase", () => {
    expect(toPathCase("hello world")).toBe("/helloWorld");
  });

  test("should convert underscore-separated string to /camelCase", () => {
    expect(toPathCase("hello_world")).toBe("/helloWorld");
  });

  test("should convert mixed-case string with symbols to /camelCase", () => {
    expect(toPathCase("HeLLo_WoRld-123!")).toBe("/helloWorld123");
  });

  test("should convert a single word to camelCase with a leading slash", () => {
    expect(toPathCase("HELLO")).toBe("/hello");
  });

  // Edge Cases
  test("should return empty string for empty input", () => {
    expect(toPathCase("")).toBe("/");
  });

  test("should handle string with only special characters", () => {
    expect(toPathCase("!@#$%^&*")).toBe("/");
  });

  test("should handle string with multiple spaces", () => {
    expect(toPathCase("  hello   world  ")).toBe("/helloWorld");
  });

  // Error Cases
  test("should throw TypeError when input is not a string", () => {
    expect(() => toPathCase(123)).toThrow(TypeError);
    expect(() => toPathCase(null)).toThrow(TypeError);
    expect(() => toPathCase(undefined)).toThrow(TypeError);
    expect(() => toPathCase({})).toThrow(TypeError);
    expect(() => toPathCase([])).toThrow(TypeError);
  });

  test("should throw TypeError with the correct message when input is not a string", () => {
    expect(() => toPathCase(123)).toThrow("Input must be a string");
    expect(() => toPathCase([])).toThrow("Input must be a string");
    expect(() => toPathCase({})).toThrow("Input must be a string");
  });
});

describe("COBOL-CASE", () => {
  // Valid Cases
  test("should convert camelCase to COBOL-CASE", () => {
    expect(toCobolCase("someVariableName")).toBe("SOME-VARIABLE-NAME");
  });

  test("should convert snake_case to COBOL-CASE", () => {
    expect(toCobolCase("some_variable_name")).toBe("SOME-VARIABLE-NAME");
  });

  test("should convert space-separated string to COBOL-CASE", () => {
    expect(toCobolCase("some variable name")).toBe("SOME-VARIABLE-NAME");
  });

  test("should convert PascalCase to COBOL-CASE", () => {
    expect(toCobolCase("PascalCaseVariable")).toBe("PASCAL-CASE-VARIABLE");
  });

  test("should convert kebab-case to COBOL-CASE", () => {
    expect(toCobolCase("kebab-case-variable")).toBe("KEBAB-CASE-VARIABLE");
  });

  test("should convert mixed-case string with numbers to COBOL-CASE", () => {
    expect(toCobolCase("variable1Name2")).toBe("VARIABLE-1-NAME-2");
  });

  test("should convert single word to uppercase", () => {
    expect(toCobolCase("variable")).toBe("VARIABLE");
  });

  // Edge Cases
  test("should return empty string for empty input", () => {
    expect(toCobolCase("")).toBe("");
  });

  test("should handle string with special characters", () => {
    expect(toCobolCase("!@#$%^&*")).toBe("");
  });

  test("should handle string with multiple spaces", () => {
    expect(toCobolCase("  hello   world  ")).toBe("HELLO-WORLD");
  });

  test("should convert /pathCase to COBOL-CASE", () => {
    expect(toCobolCase("/pathCase/variableName")).toBe(
      "PATH-CASE-VARIABLE-NAME",
    );
  });

  test("should convert PascalCase to COBOL-CASE", () => {
    expect(toCobolCase("PascalCaseVariable")).toBe("PASCAL-CASE-VARIABLE");
  });

  test("should convert camelCase to COBOL-CASE", () => {
    expect(toCobolCase("camelCaseVariable")).toBe("CAMEL-CASE-VARIABLE");
  });

  test("should convert kebab-case to COBOL-CASE", () => {
    expect(toCobolCase("kebab-case-variable")).toBe("KEBAB-CASE-VARIABLE");
  });

  test("should convert CONSTANT_CASE to COBOL-CASE", () => {
    expect(toCobolCase("CONSTANT_CASE_VARIABLE")).toBe(
      "CONSTANT-CASE-VARIABLE",
    );
  });

  test("should convert no case string to COBOL-CASE", () => {
    expect(toCobolCase("nospaces")).toBe("NOSPACES");
  });

  test("should convert mixed cases to COBOL-CASE", () => {
    expect(toCobolCase("camelCase_snake_case")).toBe("CAMEL-CASE-SNAKE-CASE");
  });

  // Error Cases
  test("should throw TypeError when input is not a string", () => {
    expect(() => toCobolCase(123)).toThrow(TypeError);
    expect(() => toCobolCase(null)).toThrow(TypeError);
    expect(() => toCobolCase(undefined)).toThrow(TypeError);
    expect(() => toCobolCase({})).toThrow(TypeError);
    expect(() => toCobolCase([])).toThrow(TypeError);
  });

  test("should throw TypeError with the correct message when input is not a string", () => {
    expect(() => toCobolCase(123)).toThrow("Input must be a string");
    expect(() => toCobolCase([])).toThrow("Input must be a string");
    expect(() => toCobolCase({})).toThrow("Input must be a string");
  });
});

describe("toLeetSpeak", () => {
  test("should convert basic letters to leet speak", () => {
    expect(toLeetSpeak("leet")).toBe("1337");
    expect(toLeetSpeak("hack")).toBe("h4ck");
  });

  test("should convert letters with mixed case", () => {
    expect(toLeetSpeak("LeEt")).toBe("1337");
    expect(toLeetSpeak("HaCkEr")).toBe("h4ck3r");
  });

  test("should handle a string with numbers and symbols without converting them", () => {
    expect(toLeetSpeak("12345!")).toBe("12345!");
    expect(toLeetSpeak("hello-world!")).toBe("h3ll0-w0rld!");
  });

  test("should leave non-leet characters unchanged", () => {
    expect(toLeetSpeak("!@#")).toBe("!@#");
    expect(toLeetSpeak("spaces and punctuation stay")).toBe(
      "sp4c3s 4nd pun5u47i0n 57ay",
    );
  });

  test("should handle an empty string", () => {
    expect(toLeetSpeak("")).toBe("");
  });

  test("should throw error if input is not a string", () => {
    expect(() => toLeetSpeak(1234)).toThrow(TypeError);
    expect(() => toLeetSpeak(null)).toThrow(TypeError);
    expect(() => toLeetSpeak({})).toThrow(TypeError);
  });

  test("should handle strings with uppercase and lowercase letters", () => {
    expect(toLeetSpeak("JavaScript")).toBe("J4v45crip7");
    expect(toLeetSpeak("Testing")).toBe("73571n6");
  });

  test("should handle long sentences", () => {
    expect(
      toLeetSpeak(
        "This is a longer sentence to test the leet speak functionality!",
      ),
    ).toBe("7hi5 i5 4 l0ng3r 53n73nc3 70 7357 7h3 l337 5p34k func7i0n4li7y!");
  });

  test("should not modify non-alphabetic characters", () => {
    expect(toLeetSpeak("1234567890!@#$%^&*()_+-=")).toBe(
      "1234567890!@#$%^&*()_+-=",
    );
  });
});
