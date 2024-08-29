/**
 * Converts a string to camelCase.
 */
const toCamelCase = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Remove spaces/hyphens/underscores and capitalize following letters
    .replace(/^[A-Z]/, (match) => match.toLowerCase()); // Ensure the first letter is lowercase
};

/**
 * Converts a string to PascalCase.
 */
const toPascalCase = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Remove spaces/hyphens/underscores and capitalize following letters
    .replace(/^[a-z]/, (match) => match.toUpperCase()); // Capitalize the first letter of the first word
};

/**
 * Converts a string to kebab-case.
 */
const toKebabCase = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Add hyphen between camelCase words
    .replace(/[_\s]+/g, "-") // Replace spaces or underscores with hyphens
    .toLowerCase() // Convert to lowercase
    .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Trim starting or ending hyphens
};

/**
 * Converts a string to upper case.
 */
const toUpperCase = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.toUpperCase();
};

/**
 * Converts a string to lower case.
 */
const toLowerCase = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.toLowerCase();
};

/**
 * Converts a string to a substring.
 */
const substring = (input, start, end) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.substring(start, end);
};

/**
 * Reverse a string.
 */
const reverseString = (input) => {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.split("").reverse().join("");
};

module.exports = {
  toCamelCase,
  toPascalCase,
  toKebabCase,
  reverseString,
  substring,
  toLowerCase,
  toUpperCase,
};
