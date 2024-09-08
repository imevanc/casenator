"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUpperCase = exports.toSnakeCase = exports.toPathCase = exports.toPascalCase = exports.toNoCase = exports.toLowerCase = exports.toKebabCase = exports.toDotCase = exports.toConstantCase = exports.toCapitalCase = exports.toCamelCase = exports.substring = exports.reverseString = void 0;
/**
 * Converts a string to camelCase.
 */
var toCamelCase = exports.toCamelCase = function toCamelCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.replace(/[-_\s]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  }) // Remove spaces/hyphens/underscores and capitalize following letters
  .replace(/^[A-Z]/, function (match) {
    return match.toLowerCase();
  }); // Ensure the first letter is lowercase
};

/**
 * Converts a string to PascalCase.
 */
var toPascalCase = exports.toPascalCase = function toPascalCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.replace(/[-_\s]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  }) // Remove spaces/hyphens/underscores and capitalize following letters
  .replace(/^[a-z]/, function (match) {
    return match.toUpperCase();
  }); // Capitalize the first letter of the first word
};

/**
 * Converts a string to kebab-case.
 */
var toKebabCase = exports.toKebabCase = function toKebabCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.replace(/([a-z])([A-Z])/g, "$1-$2") // Add hyphen between camelCase words
  .replace(/[_\s]+/g, "-") // Replace spaces or underscores with hyphens
  .toLowerCase() // Convert to lowercase
  .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
  .replace(/^-|-$/g, ""); // Trim starting or ending hyphens
};

/**
 * Converts a string to upper case.
 */
var toUpperCase = exports.toUpperCase = function toUpperCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.toUpperCase();
};

/**
 * Converts a string to lower case.
 */
var toLowerCase = exports.toLowerCase = function toLowerCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.toLowerCase();
};

/**
 * Converts a string to a substring.
 */
var substring = exports.substring = function substring(input, start, end) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.substring(start, end);
};

/**
 * Reverse a string.
 */
var reverseString = exports.reverseString = function reverseString(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.split("").reverse().join("");
};

/**
 * Converts a string to capital case.
 */
var toCapitalCase = exports.toCapitalCase = function toCapitalCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.trim() // Remove leading and trailing spaces
  .replace(/[-_.]+/g, " ") // Replace hyphens, underscores, and dots with spaces
  .split(/\s+/) // Split by one or more spaces
  .map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }) // Capitalize the first letter
  .join(" "); // Join words back together with a space
};

/**
 * Converts a string to constant case.
 */
var toConstantCase = exports.toConstantCase = function toConstantCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.trim() // Remove leading/trailing whitespace
  .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase to space-separated words
  .replace(/[\W_]+/g, " ") // Replace non-alphanumeric characters (and underscores) with spaces
  .toUpperCase() // Convert to uppercase
  .trim() // Remove leading/trailing spaces again
  .replace(/\s+/g, "_"); // Replace spaces with underscores
};

/**
 * Converts a string to dot case.
 */
var toDotCase = exports.toDotCase = function toDotCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.trim() // Remove leading/trailing whitespace
  .replace(/([a-z])([A-Z])/g, "$1 $2") // Convert camelCase to words
  .replace(/[\s\-_]+/g, ".") // Replace spaces, hyphens, and underscores with dots
  .replace(/\.+/g, ".") // Replace multiple consecutive dots with a single dot
  .replace(/^\.+|\.+$/g, "") // Remove leading or trailing dots
  .toLowerCase(); // Convert to lowercase
};

/**
 * Converts a string to no case.
 */
var toNoCase = exports.toNoCase = function toNoCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.toLowerCase() // Convert the entire string to lowercase
  .replace(/[^\w\s]+/g, " ") // Remove all special characters except spaces
  .replace(/[\s\-_.\/]+/g, " ") // Replace remaining delimiters with a single space
  .trim() // Remove leading/trailing whitespace
  .replace(/\s+/g, " "); // Replace multiple consecutive spaces with a single space
};

/**
 * Converts a string to snake_case.
 */
var toSnakeCase = exports.toSnakeCase = function toSnakeCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return input.trim() // Remove leading/trailing spaces
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
var toPathCase = exports.toPathCase = function toPathCase(input) {
  if (typeof input !== "string") throw new TypeError("Input must be a string");
  return "/" + input.trim() // Remove leading/trailing spaces
  .replace(/[^a-zA-Z0-9]+/g, " ") // Replace non-alphanumeric characters with spaces
  .replace(/\s+/g, " ") // Normalize multiple spaces to a single space
  .split(" ") // Split by spaces into words
  .map(function (word, index) {
    if (index === 0) {
      return word.toLowerCase(); // First word stays lowercase
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of subsequent words
  }).join("") // Join back into a single string
  .replace(/[^a-zA-Z0-9]/g, "") // Remove any remaining non-alphanumeric characters
  ;
};