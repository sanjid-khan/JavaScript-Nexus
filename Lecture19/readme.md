# DOM — Document Object Model

## What is DOM?

**DOM (Document Object Model)** হলো একটি programming interface / object representation, যার মাধ্যমে JavaScript একটি web page-এর HTML elements এবং structure-এর সাথে interact করতে পারে।

সহজভাবে:

> **Browser HTML document-কে একটি object-based tree structure-এ convert করে। এই structure-টাই হলো DOM।**

```text
HTML Document
      ↓
    Browser
      ↓
      DOM
      ↓
 JavaScript
      ↓
Interact / Modify / Update
```

### Example HTML

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to JavaScript</p>
  </body>
</html>
```

Browser এটাকে একটি DOM Tree হিসেবে represent করে:

```text
Document
   │
   └── html
        │
        └── body
             ├── h1
             │    └── "Hello World"
             │
             └── p
                  └── "Welcome to JavaScript"
```

JavaScript এই DOM Tree-এর elements-কে access এবং modify করতে পারে।

---

# What Can JavaScript Do with the DOM?

DOM-এর মাধ্যমে JavaScript একটি web page-এর content এবং structure dynamically পরিবর্তন করতে পারে।

### 1. Change HTML Elements

JavaScript দিয়ে কোনো element-এর content পরিবর্তন করা যায়।

```js
document.getElementById("title").textContent = "Hello JavaScript";
```

---

### 2. Change HTML Attributes

HTML element-এর attributes পরিবর্তন করা যায়।

```js
const image = document.getElementById("profile");

image.setAttribute("src", "profile.jpg");
```

এখানে `src` attribute পরিবর্তন হচ্ছে।

---

### 3. Change CSS Styles

JavaScript দিয়ে element-এর CSS style পরিবর্তন করা যায়।

```js
const title = document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "30px";
```

---

### 4. Create and Add New Elements

JavaScript দিয়ে নতুন HTML element তৈরি করে page-এ add করা যায়।

```js
const paragraph = document.createElement("p");

paragraph.textContent = "New paragraph";

document.body.appendChild(paragraph);
```

---

### 5. Remove Existing Elements

Existing HTML elements remove করা যায়।

```js
const element = document.getElementById("title");

element.remove();
```

---

### 6. Add or Remove Attributes

JavaScript দিয়ে attributes add, modify অথবা remove করা যায়।

```js
const image = document.querySelector("img");

image.setAttribute("alt", "Profile Image");
```

Attribute remove করতে:

```js
image.removeAttribute("alt");
```

---

# Accessing / Selecting DOM Elements

JavaScript-এ DOM elements access করার জন্য বিভিন্ন methods রয়েছে।

---

## A. Accessing by ID

### Method

```js
document.getElementById(id);
```

### Description

নির্দিষ্ট `id` attribute-এর মাধ্যমে **একটি single element** select করে।

### HTML

```html
<h1 id="title">Hello World</h1>
```

### JavaScript

```js
const title = document.getElementById("title");

console.log(title);
```

### Important

একটি `id` সাধারণত একটি page-এ unique হওয়া উচিত।

```text
getElementById()
       ↓
Single Element
```

---

# B. Accessing by Class Name

### Method

```js
document.getElementsByClassName(className);
```

### Description

নির্দিষ্ট class name থাকা **সব matching elements** return করে।

এটি একটি **live HTMLCollection** return করে।

### HTML

```html
<p class="text">First</p>
<p class="text">Second</p>
<p class="text">Third</p>
```

### JavaScript

```js
const elements = document.getElementsByClassName("text");

console.log(elements);
```

এখানে তিনটি matching element পাওয়া যাবে।

```text
getElementsByClassName()
          ↓
   HTMLCollection
          ↓
Multiple Elements
```

> ⚠️ Correct method হলো **`getElementsByClassName()`**, `getElementByClassName()` নয়।

---

# C. Accessing by CSS Selectors

CSS selector ব্যবহার করে DOM elements select করার জন্য `querySelector()` এবং `querySelectorAll()` সবচেয়ে useful methods-এর মধ্যে পড়ে।

---

## 1. Single Element — `querySelector()`

### Method

```js
document.querySelector(selector);
```

### Description

দেওয়া CSS selector-এর সাথে match করা **প্রথম element** return করে।

### By ID

```js
const title = document.querySelector("#title");
```

### By Class

```js
const text = document.querySelector(".text");
```

### By Tag

```js
const paragraph = document.querySelector("p");
```

### HTML

```html
<p class="text">First</p>
<p class="text">Second</p>
```

```js
const element = document.querySelector(".text");
```

এখানে শুধু প্রথম `.text` element পাওয়া যাবে।

```text
querySelector()
      ↓
First Matching Element
```

---

# 2. Multiple Elements — `querySelectorAll()`

### Method

```js
document.querySelectorAll(selector);
```

### Description

CSS selector-এর সাথে match করা **সব elements** return করে।

```html
<p class="text">First</p>
<p class="text">Second</p>
<p class="text">Third</p>
```

```js
const elements = document.querySelectorAll(".text");

console.log(elements);
```

```text
querySelectorAll()
        ↓
All Matching Elements
        ↓
NodeList
```

---

# DOM Selection — Quick Comparison

| Method                     | Returns        | Selects                |
| -------------------------- | -------------- | ---------------------- |
| `getElementById()`         | Element        | Single element         |
| `getElementsByClassName()` | HTMLCollection | Multiple elements      |
| `querySelector()`          | Element        | First matching element |
| `querySelectorAll()`       | NodeList       | All matching elements  |

---

# ⭐ Easy Mental Model

```text
              DOM Selection
                   │
        ┌──────────┼───────────┐
        │          │           │
       ID        Class      CSS Selector
        │          │           │
        ↓          ↓       ┌────┴─────┐
getElementById  getElements  querySelector
                ByClassName  querySelectorAll
                               │
                         ┌─────┴─────┐
                         │           │
                      First         All
                    Matching     Matching
```

## 🔥 Remember

```text
getElementById()
→ One element by ID

getElementsByClassName()
→ Multiple elements by class

querySelector()
→ First matching CSS selector

querySelectorAll()
→ All matching CSS selectors
```

> **DOM = Browser-এর তৈরি করা HTML-এর object/tree representation, যার মাধ্যমে JavaScript webpage-এর content, elements, attributes, styles এবং structure dynamically access ও modify করতে পারে।**
