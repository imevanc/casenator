import {
  convertWithCustomDelimiter,
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
  transformArrayStrings,
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
  // Test for basic leet conversions
  test("should convert lowercase letters to leet speak", () => {
    expect(toLeetSpeak("leet")).toBe("1337");
    expect(toLeetSpeak("gamer")).toBe("64m32");
    expect(toLeetSpeak("robot")).toBe("20807");
  });

  // Test for handling uppercase letters
  test("should convert uppercase letters to leet speak and preserve their case", () => {
    expect(toLeetSpeak("LEET")).toBe("1337");
    expect(toLeetSpeak("GAMER")).toBe("64M32");
    expect(toLeetSpeak("RoBoT")).toBe("20807");
  });

  // Test for non-alphabetic characters (should be preserved)
  test("should preserve non-alphabetic characters like spaces, punctuation, and numbers", () => {
    expect(toLeetSpeak("hello world!")).toBe("h3110 w021d!"); // Corrected expected value
    expect(toLeetSpeak("123!")).toBe("123!");
    expect(toLeetSpeak("leet speak 2.0")).toBe("1337 5p34k 2.0");
  });

  // Test for mixed alphanumeric strings
  test("should handle mixed alphanumeric and leet mappings properly", () => {
    expect(toLeetSpeak("a1b2c3")).toBe("4182c3"); // Corrected expected value
  });

  // Test for empty string input
  test("should return an empty string if input is an empty string", () => {
    expect(toLeetSpeak("")).toBe("");
  });

  // Test for non-string input (should throw a TypeError)
  test("should throw a TypeError when input is not a string", () => {
    expect(() => toLeetSpeak(12345)).toThrow(TypeError);
    expect(() => toLeetSpeak(null)).toThrow(TypeError);
    expect(() => toLeetSpeak(undefined)).toThrow(TypeError);
    expect(() => toLeetSpeak({})).toThrow(TypeError);
  });

  // Test for strings with no leet mappings (should return the same string)
  test("should return the original string if no leet mappings are present", () => {
    expect(toLeetSpeak("xyz")).toBe("xyz");
    expect(toLeetSpeak("!@#$")).toBe("!@#$");
  });
});

describe("convertWithCustomDelimiter", () => {
  // Test converting a simple string with "-" to "."
  test('should convert "hello-world" from "-" to "."', () => {
    const result = convertWithCustomDelimiter("hello-world", "-", ".");
    expect(result).toBe("hello.world");
  });

  // Test converting a string with "_" to " "
  test('should convert "hello_world_test" from "_" to " "', () => {
    const result = convertWithCustomDelimiter("hello_world_test", "_", " ");
    expect(result).toBe("hello world test");
  });

  // Test converting with different custom delimiters
  test('should convert "file/name" from "/" to "\\"', () => {
    const result = convertWithCustomDelimiter("file/name", "/", "\\");
    expect(result).toBe("file\\name");
  });

  // Test when there is no delimiter to replace
  test("should return the same string if no delimiter exists", () => {
    const result = convertWithCustomDelimiter("noDelimiter", "-", ".");
    expect(result).toBe("noDelimiter");
  });

  // Test with an empty string
  test("should return an empty string if the input is empty", () => {
    const result = convertWithCustomDelimiter("", "-", ".");
    expect(result).toBe("");
  });

  // Test when the input is not a string (expect TypeError)
  test("should throw TypeError if the input is not a string", () => {
    expect(() => convertWithCustomDelimiter(123, "-", ".")).toThrow(TypeError);
  });

  // Test when the delimiter is not present in the string
  test("should return the original string if delimiter is not present", () => {
    const result = convertWithCustomDelimiter("testString", "_", ".");
    expect(result).toBe("testString");
  });
});

describe("transformArrayStrings - success cases", () => {
  test("camel case", () => {
    const input = ["hello_world", "this_is_a_test"];
    expect(transformArrayStrings(input, "camel")).toEqual(
      input.map(toCamelCase),
    );
  });

  test("pascal case", () => {
    const input = ["hello world", "another example"];
    expect(transformArrayStrings(input, "pascal")).toEqual(
      input.map(toPascalCase),
    );
  });

  test("kebab case", () => {
    const input = ["Hello World", "Another Test"];
    expect(transformArrayStrings(input, "kebab")).toEqual(
      input.map(toKebabCase),
    );
  });

  test("UPPERCASE", () => {
    const input = ["hello", "world"];
    expect(transformArrayStrings(input, "upper")).toEqual(
      input.map(toUpperCase),
    );
  });

  test("Capital Case", () => {
    const input = ["hello world", "nice day"];
    expect(transformArrayStrings(input, "capital")).toEqual(
      input.map(toCapitalCase),
    );
  });

  test("CONSTANT_CASE", () => {
    const input = ["my value", "another one"];
    expect(transformArrayStrings(input, "constant")).toEqual(
      input.map(toConstantCase),
    );
  });

  test("dot.case", () => {
    const input = ["Dot Case Here", "Another.Value"];
    expect(transformArrayStrings(input, "dot")).toEqual(input.map(toDotCase));
  });

  test("no case", () => {
    const input = ["No-Case-Here", "Also.This"];
    expect(transformArrayStrings(input, "no")).toEqual(input.map(toNoCase));
  });

  test("snake_case", () => {
    const input = ["snake case", "AnotherTest"];
    expect(transformArrayStrings(input, "snake")).toEqual(
      input.map(toSnakeCase),
    );
  });

  test("path/case", () => {
    const input = ["path case", "Another Test"];
    expect(transformArrayStrings(input, "path")).toEqual(input.map(toPathCase));
  });

  test("COBOL-CASE", () => {
    const input = ["Cobol Case", "Hard Core"];
    expect(transformArrayStrings(input, "cobol")).toEqual(
      input.map(toCobolCase),
    );
  });

  test("leet speak", () => {
    const input = ["leet", "speak"];
    expect(transformArrayStrings(input, "leet")).toEqual(
      input.map(toLeetSpeak),
    );
  });

  test("reverse", () => {
    const input = ["abc", "123"];
    expect(transformArrayStrings(input, "reverse")).toEqual(
      input.map(reverseString),
    );
  });

  test("substring", () => {
    const input = ["hello world", "javascript"];
    const options = { start: 0, end: 4 };
    expect(transformArrayStrings(input, "substring", options)).toEqual(
      input.map((str) => substring(str, options.start, options.end)),
    );
  });

  test("custom delimiter", () => {
    const input = ["one_two", "three_four"];
    const options = { fromDelimiter: "_", toDelimiter: "-" };
    expect(transformArrayStrings(input, "custom", options)).toEqual(
      input.map((str) => convertWithCustomDelimiter(str, "_", "-")),
    );
  });

  test("empty array returns empty array", () => {
    expect(transformArrayStrings([], "camel")).toEqual([]);
  });

  test("works with empty strings", () => {
    const input = ["", ""];
    expect(transformArrayStrings(input, "upper")).toEqual(["", ""]);
  });
});

describe("transformArrayStrings - error handling", () => {
  test("throws on unsupported case type", () => {
    expect(() => transformArrayStrings(["test"], "invalid")).toThrow(
      /Unsupported case type/,
    );
  });

  test("throws if input is not an array", () => {
    expect(() => transformArrayStrings("not-an-array", "camel")).toThrow(
      TypeError,
    );
  });

  test("throws if array contains non-strings", () => {
    expect(() => transformArrayStrings(["valid", 123], "camel")).toThrow(
      TypeError,
    );
  });

  test("throws if substring is missing options", () => {
    expect(() => transformArrayStrings(["hello"], "substring")).toThrow();
  });

  test("throws if custom delimiter is missing options", () => {
    expect(() => transformArrayStrings(["x_y"], "custom")).toThrow();
  });

  test("throws if custom delimiter is missing fromDelimiter", () => {
    expect(() =>
      transformArrayStrings(["x_y"], "custom", { toDelimiter: "-" }),
    ).toThrow();
  });

  test("throws if custom delimiter is missing toDelimiter", () => {
    expect(() =>
      transformArrayStrings(["x_y"], "custom", { fromDelimiter: "_" }),
    ).toThrow();
  });
});
