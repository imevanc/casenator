"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toUpperCase = exports.toPascalCase = exports.toLowerCase = exports.toKebabCase = exports.toCamelCase = exports.substring = exports.reverseString = void 0;
/**
 * Converts a string to camelCase.
 */
var toCamelCase = exports.toCamelCase = function toCamelCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
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
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
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
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
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
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.toUpperCase();
};

/**
 * Converts a string to lower case.
 */
var toLowerCase = exports.toLowerCase = function toLowerCase(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.toLowerCase();
};

/**
 * Converts a string to a substring.
 */
var substring = exports.substring = function substring(input, start, end) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.substring(start, end);
};

/**
 * Reverse a string.
 */
var reverseString = exports.reverseString = function reverseString(input) {
  if (typeof input !== "string") {
    throw new TypeError("Input must be a string");
  }
  return input.split("").reverse().join("");
};