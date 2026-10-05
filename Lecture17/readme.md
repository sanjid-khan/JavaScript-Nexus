# JavaScript Function Hoisting

JavaScript-এ **Hoisting** বলতে বোঝায়—execution শুরু হওয়ার আগে JavaScript engine কিছু **declaration**-কে তাদের respective scope-এর উপরে available করে রাখে।

Function-এর ক্ষেত্রে hoisting-এর আচরণ function declaration এবং function expression-এর মধ্যে ভিন্ন।

## Function Hoisting Comparison

| Type                                  | Hoisted?                  | Before Initialization | Error Type       |
| ------------------------------------- | ------------------------- | --------------------- | ---------------- |
| **Function Declaration**              | ✔ Fully hoisted (body সহ) | Works                 | No Error         |
| **Function Expression (`var`)**       | ✔ Variable hoisted only   | `undefined`           | `TypeError`      |
| **Function Expression (`let/const`)** | ✔ Hoisted, but TDZ        | Not accessible        | `ReferenceError` |
| **Arrow Function (`var`)**            | ✔ Variable hoisted only   | `undefined`           | `TypeError`      |
| **Arrow Function (`let/const`)**      | ✔ Hoisted, but TDZ        | Not accessible        | `ReferenceError` |

### 1. Function Declaration

Function declaration সম্পূর্ণভাবে hoisted হয়—**function body সহ**।

তাই declaration-এর আগে function call করলেও এটি কাজ করে।

```js
sayHello();

function sayHello() {
  console.log("Hello!");
}
```

**Output:**

```text
Hello!
```

---

### 2. Function Expression with `var`

এখানে function নিজে hoist হয় না। শুধু `var` variable declaration hoist হয় এবং initial value থাকে `undefined`।

তাই function assignment হওয়ার আগে call করলে `TypeError` হয়।

```js
sayHello();

var sayHello = function () {
  console.log("Hello!");
};
```

**Result:**

```text
TypeError: sayHello is not a function
```

---

### 3. Function Expression with `let` / `const`

`let` এবং `const` declaration hoisted হলেও initialization-এর আগে তারা **Temporal Dead Zone (TDZ)**-এর মধ্যে থাকে।

তাই initialization-এর আগে access করলে `ReferenceError` হয়।

```js
sayHello();

const sayHello = function () {
  console.log("Hello!");
};
```

**Result:**

```text
ReferenceError: Cannot access 'sayHello' before initialization
```

---

### 4. Arrow Function with `var`

Arrow function-ও একটি variable-এর মধ্যে store করা function।

`var` ব্যবহার করলে variable declaration hoist হয় এবং initial value থাকে `undefined`।

```js
sayHello();

var sayHello = () => {
  console.log("Hello!");
};
```

**Result:**

```text
TypeError: sayHello is not a function
```

---

### 5. Arrow Function with `let` / `const`

`let` / `const` ব্যবহার করলে variable TDZ-এর মধ্যে থাকে।

তাই initialization-এর আগে access করলে `ReferenceError` হয়।

```js
sayHello();

const sayHello = () => {
  console.log("Hello!");
};
```

**Result:**

```text
ReferenceError: Cannot access 'sayHello' before initialization
```

---

## ⭐ Most Important Difference

> **Function Declaration** সম্পূর্ণভাবে hoisted হয়, **function body সহ**।
> → তাই declaration-এর **আগে call করলেও কাজ করে**।

> **Function Expression / Arrow Function** নিজে hoisted হয় না; এগুলো variable-এর মাধ্যমে assigned হয়।
> → তাই assignment-এর **আগে call করলে `TypeError` অথবা `ReferenceError`** হয়।

### Easy Mental Model

```text
Function Declaration
        ↓
Function + Body
        ↓
Fully Hoisted
        ↓
Can be called before declaration


Function Expression / Arrow Function
        ↓
Variable Hoisted
        ↓
Function assigned later
        ↓
Cannot be called before initialization
```

**One-line rule:**

```text
Declaration → Fully Hoisted
Expression  → Variable Hoisted
Arrow       → Variable Hoisted
```
