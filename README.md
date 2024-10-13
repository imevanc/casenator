# 🦸‍♂️ Casenator - The Ultimate String Transformation Utility ⚡️

[![npm version](https://img.shields.io/npm/v/casenator.svg)](https://www.npmjs.com/package/casenator)
[![License](https://img.shields.io/npm/l/casenator)](https://img.shields.io/npm/l/casenator)

**Casenator** is your go-to tool for all things string transformation. Whether you need to switch between `camelCase`, `PascalCase`, `kebab-case` and many more! 🎉

---


## 🔥 Features

- 🔄 **CamelCase** – Convert any string to `camelCase`.
- 🏛 **PascalCase** – Format strings in `PascalCase`.
- 📐 **KebabCase** – Get your strings into `kebab-case`.
- 🔠 **Uppercase** – Make everything UPPERCASE.
- 🔡 **Lowercase** – Convert text to lowercase.
- 🔙 **Reverse** – Reverse the characters in a string.
- 🔍 **Substring** – Extract specific parts of your string.
- 🦊 **CapitalCase** - Convert any string to `Capital Case`.
- 🐒 **DotCase** - Format string in `dot.case`.
- 🦀 **ConstantCase** - Get your string into `CONSTANT_CASE`.
- 🐸 **NoCase** - Convert any string to `no case`.
- 🐬 **SnakeCase** - Format string in `snake_case`.
- 🦁 **PathCase** - Get your string into `/pathCase`.
- 🦧 **CobolCase** - Format string in `COBOL-CASE`.
- 🐫 **LeetSpeak** - Make everything `1337 5p34k`
- 🦄 **ConvertWithCustomDelimiter** - Convert any string to `custom-delimiter where - is the new delimiter`

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
import { 
    toCamelCase,
    toPascalCase,
    toKebabCase,
    toUpperCase,
    reverseString,
    substring,
    toCapitalCase,
    toConstantCase,
    toDotCase,
    toNoCase,
    toSnakeCase,
    toPathCase,
    toCobolCase,
    toLeetSpeak,
    convertToCustomDelimiter
} from 'casenator';

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

// Capital Case
console.log(toCapitalCase('hello world'));  // 'Hello World'

// Dot Case
console.log(toDotCase('hello-world'));  // 'hello.world'

// Constant Case
console.log(toConstantCase('hello world'));  // 'HELLO_WORLD'

// No Case
console.log(toNoCase('hello--world'));  // 'hello world'

// Snake Case
console.log(toSnakeCase('hello world')); // 'hello_world'

// Path Case
console.log(toPathCase('hello world')); // '/helloWorld'

// Cobol Case
console.log(toCobolCase('hello world')); // 'HELLO-WORLD'

// Leet Speak
console.log(toLeetSpeak('hello world')); // 'h3110 w021d'

// Convert With Custom Delimiter
convertWithCustomDelimiter("hello-world", "-", "."); // 'hello.world'
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

Feel free to contribute, raise issues, or suggest features to make **casenator** even better! 🤘
