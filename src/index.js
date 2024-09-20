/**
 * Converts a string to camelCase.
 */
export const toCamelCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Remove spaces/hyphens/underscores and capitalize following letters
    .replace(/^[A-Z]/, (match) => match.toLowerCase()); // Ensure the first letter is lowercase
};

/**
 * Converts a string to PascalCase.
 */
export const toPascalCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Remove spaces/hyphens/underscores and capitalize following letters
    .replace(/^[a-z]/, (match) => match.toUpperCase()); // Capitalize the first letter of the first word
};

/**
 * Converts a string to kebab-case.
 */
export const toKebabCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
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
export const toUpperCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.toUpperCase();
};

/**
 * Converts a string to lower case.
 */
export const toLowerCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.toLowerCase();
};

/**
 * Converts a string to a substring.
 */
export const substring = (input, start, end) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.substring(start, end);
};

/**
 * Reverse a string.
 */
export const reverseString = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.split("").reverse().join("");
};

/**
 * Converts a string to capital case.
 */
export const toCapitalCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .trim() // Remove leading and trailing spaces
    .replace(/[-_.]+/g, " ") // Replace hyphens, underscores, and dots with spaces
    .split(/\s+/) // Split by one or more spaces
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
    .join(" "); // Join words back together with a space
};

/**
 * Converts a string to constant case.
 */
export const toConstantCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .trim() // Remove leading/trailing whitespace
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase to space-separated words
    .replace(/[\W_]+/g, " ") // Replace non-alphanumeric characters (and underscores) with spaces
    .toUpperCase() // Convert to uppercase
    .trim() // Remove leading/trailing spaces again
    .replace(/\s+/g, "_"); // Replace spaces with underscores
};

/**
 * Converts a string to dot case.
 */
export const toDotCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .trim() // Remove leading/trailing whitespace
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase to words
    .replace(/[\s\-_]+/g, ".") // Replace spaces, hyphens, and underscores with dots
    .replace(/\.+/g, ".") // Replace multiple consecutive dots with a single dot
    .replace(/^\.+|\.+$/g, "") // Remove leading or trailing dots
    .toLowerCase(); // Convert to lowercase
};

/**
 * Converts a string to no case.
 */
export const toNoCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/[^\w\s]+/g, " ") // Remove all special characters except spaces
    .replace(/[\s\-_.\/]+/g, " ") // Replace remaining delimiters with a single space
    .trim() // Remove leading/trailing whitespace
    .replace(/\s+/g, " "); // Replace multiple consecutive spaces with a single space
};

/**
 * Converts a string to snake_case.
 */
export const toSnakeCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .trim() // Remove leading/trailing spaces
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2") // Insert underscore between lowercase/number and uppercase letters
    .replace(/[\s\-]+/g, "_") // Replace spaces and hyphens with underscores
    .replace(/[^a-z0-9_]+/gi, "_") // Replace all non-alphanumeric characters with underscores
    .replace(/_+/g, "_") // Replace multiple consecutive underscores with a single underscore
    .replace(/(^_|_$)/g, "") // Remove leading or trailing underscores
    .toLowerCase(); // Convert the entire string to lowercase
};

/**
 * Converts a string to /pathCase
 */
export const toPathCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return (
    "/" +
    input
      .trim() // Remove leading/trailing spaces
      .replace(/[^a-zA-Z0-9]+/g, " ") // Replace non-alphanumeric characters with spaces
      .replace(/\s+/g, " ") // Normalize multiple spaces to a single space
      .split(" ") // Split by spaces into words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase(); // First word stays lowercase
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of subsequent words
      })
      .join("") // Join back into a single string
      .replace(/[^a-zA-Z0-9]/g, "") // Remove any remaining non-alphanumeric characters
  );
};

/**
 * Converts a string to COBOL-CASE
 */
export const toCobolCase = (input) => {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input
    .split("/") // Split the string by slashes to handle path cases
    .map(
      (segment) =>
        segment
          .trim() // Trim leading and trailing whitespace
          .replace(/[^a-zA-Z0-9\s_-]/g, "") // Remove all non-alphanumeric characters except spaces, underscores, and hyphens
          .replace(/[_-]/g, " ") // Replace underscores and hyphens with spaces for snake_case and kebab-case handling
          .replace(/([a-zA-Z])([0-9])/g, "$1 $2") // Insert space between letters and numbers
          .replace(/([0-9])([a-zA-Z])/g, "$1 $2") // Insert space between numbers and letters
          .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // Insert space before capital letters
          .replace(/\s+/g, "-") // Replace multiple spaces with a single hyphen
          .toUpperCase(), // Convert to uppercase
    )
    .filter(Boolean) // Remove any empty segments from the split
    .join("-"); // Join all segments with hyphens
};
