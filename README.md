# 🦸‍♂️ Casenator - The Ultimate String Transformation Utility ⚡️

[![npm version](https://badge.fury.io/js/casenator.svg)](https://badge.fury.io/js/casenator)
[![License](https://img.shields.io/npm/l/casenator)](https://img.shields.io/npm/l/casenator)

**Casenator** is your go-to tool for all things string transformation. Whether you need to switch between `camelCase`, `PascalCase`, `kebab-case`, or even reverse strings and handle case conversions, Casenator has you covered! 🎉

---

## 🔥 Features

- 🔄 **CamelCase** – Convert any string to `camelCase`.
- 🏛 **PascalCase** – Format strings in `PascalCase`.
- 📐 **Kebab-Case** – Get your strings into `kebab-case`.
- 🔠 **Uppercase** – Make everything UPPERCASE.
- 🔡 **Lowercase** – Convert text to lowercase.
- 🔙 **Reverse** – Reverse the characters in a string.
- 🔍 **Substring** – Extract specific parts of your string.

---

## 🚀 Installation

First, add **Casenator** to your project via npm:

```bash
npm install casenator
```

---

🛠️ Usage
Here’s how to start transforming your strings with Casenator:

```javascript
// Import the functions you need from Casenator
import { toCamelCase, toPascalCase, toKebabCase, toUpperCase, reverseString, substring } from 'casenator';

// Camel Case
console.log(toCamelCase('Hello world!'));  // 'helloWorld'

// Pascal Case
console.log(toPascalCase('hello world'));  // 'HelloWorld'

// Kebab Case
console.log(toKebabCase('Hello World!'));  // 'hello-world'

// Uppercase
console.log(toUpperCase('hello world'));   // 'HELLO WORLD'

// Reverse a String
console.log(reverseString('Hello'));       // 'olleH'

// Substring
console.log(substring('hello world', 0, 5));  // 'hello'
```

---

## 🔥 Why Casenator?

- 🚀 **Lightweight** – Minimal footprint and blazingly fast.
- 🛡️ **Robust** – Handles invalid inputs with helpful errors.
- 🛠️ **Versatile** – Perfect for all your string formatting needs.
- ✅ **Tested** – Comprehensive unit test coverage for all edge cases.

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENCE](LICENCE) file for details.

---

## 🙌 Contributing

Feel free to contribute, raise issues, or suggest features to make **Casenator** even better! 🤘
