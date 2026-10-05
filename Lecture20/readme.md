# DOM Element Selection — Advanced Basics

আগের section-এ `getElementById()` এবং `getElementsByClassName()` দেখেছি। এখন CSS selectors, tag name এবং element relationships দিয়ে DOM elements access করা যাক।

---

# C. Accessing by CSS Selectors

CSS selector ব্যবহার করে DOM-এর element select করার সবচেয়ে flexible উপায় হলো `querySelector()` এবং `querySelectorAll()`।

---

## i. Single Element — `querySelector()`

### Method

```js
document.querySelector(selector);
```

### Description

দেওয়া CSS selector-এর সাথে match করা **প্রথম element** return করে।

### Example

```html
<h1 id="title">Hello</h1>
<p class="text">First</p>
<p class="text">Second</p>
```

```js
const title = document.querySelector("#title");
const text = document.querySelector(".text");
```

`.text` selector-এর ক্ষেত্রে শুধু প্রথম `<p>` element পাওয়া যাবে।

```text
querySelector()
      ↓
First Matching Element
```

### Common CSS Selectors

```js
document.querySelector("#title");     // ID
document.querySelector(".text");      // Class
document.querySelector("p");          // Tag
document.querySelector("div p");      // Descendant
document.querySelector("input[type='text']"); // Attribute
```

---

## ii. Multiple Elements — `querySelectorAll()`

### Method

```js
document.querySelectorAll(selector);
```

### Description

দেওয়া CSS selector-এর সাথে match করা **সব elements** return করে।

এটি একটি **static `NodeList`** return করে।

```html
<p class="text">First</p>
<p class="text">Second</p>
<p class="text">Third</p>
```

```js
const elements = document.querySelectorAll(".text");

console.log(elements);
```

এখানে তিনটি `<p>` element পাওয়া যাবে।

```text
querySelectorAll()
        ↓
All Matching Elements
        ↓
Static NodeList
```

### `querySelector()` vs `querySelectorAll()`

| Method               | Returns  | Result                 |
| -------------------- | -------- | ---------------------- |
| `querySelector()`    | Element  | First matching element |
| `querySelectorAll()` | NodeList | All matching elements  |

---

# D. Accessing by Tag Name

### Method

```js
document.getElementsByTagName(tagName);
```

> ⚠️ Correct method হলো **`getElementsByTagName()`**, `getElementByTagName()` নয়।

### Description

নির্দিষ্ট HTML tag-এর সব elements return করে।

এটি একটি **live `HTMLCollection`** return করে।

### Example

```html
<p>First</p>
<p>Second</p>
<div>Container</div>
```

```js
const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
```

এখানে সব `<p>` elements পাওয়া যাবে।

```text
getElementsByTagName()
          ↓
   HTMLCollection
          ↓
   Matching Elements
```

### Examples

```js
document.getElementsByTagName("div");
document.getElementsByTagName("p");
document.getElementsByTagName("a");
document.getElementsByTagName("button");
```

---

# E. Accessing Elements Using Relationships

DOM একটি **tree structure** হওয়ায় একটি element-এর সাথে অন্য elements-এর relationship থাকে।

যেমন:

```text
        Parent
          │
    ┌─────┼─────┐
    │     │     │
 Child  Child  Child
          │
       Sibling
```

এই relationship ব্যবহার করেও DOM elements access করা যায়।

---

## i. Parent Node

### Methods

```js
element.parentNode;
element.parentElement;
```

### Description

বর্তমান element-এর **immediate parent** access করে।

### Example

```html
<div id="container">
  <p id="text">Hello</p>
</div>
```

```js
const text = document.getElementById("text");

console.log(text.parentElement);
```

এখানে `<div id="container">` পাওয়া যাবে।

```text
<div>
   │
   └── <p>
         ↑
       element
```

```text
element.parentElement
        ↓
Immediate Parent
```

### `parentNode` vs `parentElement`

* `parentNode` → parent node return করে; parent element ছাড়াও অন্য node হতে পারে।
* `parentElement` → শুধু parent element return করে।

---

# ii. Child Nodes / Children

একটি element-এর ভিতরের child elements বা nodes access করার জন্য:

### Methods

```js
element.childNodes;
element.children;
```

### `childNodes`

`childNodes` **সব ধরনের child nodes** return করে।

এর মধ্যে থাকতে পারে:

* Element nodes
* Text nodes
* Comment nodes

```js
const container = document.getElementById("container");

console.log(container.childNodes);
```

```text
childNodes
    ↓
All Child Nodes
    ├── Element
    ├── Text
    └── Comment
```

---

### `children`

`children` শুধু **element nodes** return করে।

```js
const container = document.getElementById("container");

console.log(container.children);
```

```text
children
   ↓
Only Element Nodes
```

### `childNodes` vs `children`

| Property     | Returns             |
| ------------ | ------------------- |
| `childNodes` | All child nodes     |
| `children`   | Only child elements |

---

# iii. First and Last Child

একটি element-এর প্রথম এবং শেষ child access করা যায়।

### Node-based

```js
element.firstChild;
element.lastChild;
```

এগুলো **যেকোনো type-এর node** return করতে পারে।

```text
firstChild
    ↓
First Child Node

lastChild
    ↓
Last Child Node
```

---

### Element-based

```js
element.firstElementChild;
element.lastElementChild;
```

এগুলো শুধুমাত্র **HTML element** return করে।

### Example

```html
<div id="container">
  <p>First</p>
  <p>Second</p>
  <p>Last</p>
</div>
```

```js
const container = document.getElementById("container");

console.log(container.firstElementChild);
console.log(container.lastElementChild);
```

Output:

```text
<p>First</p>
<p>Last</p>
```

### Comparison

| Property            | Returns             |
| ------------------- | ------------------- |
| `firstChild`        | First child node    |
| `lastChild`         | Last child node     |
| `firstElementChild` | First child element |
| `lastElementChild`  | Last child element  |

---

# iv. Sibling Nodes

একই parent-এর under-এ থাকা elements/nodes-গুলোকে **siblings** বলা হয়।

```html
<div>
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
</div>
```

এখানে তিনটি `<p>` একে অপরের siblings।

```text
       div
        │
   ┌────┼────┐
   ↓    ↓    ↓
   p    p    p
   ↑    ↑    ↑
 First Second Third
```

---

## Node-based Siblings

### Methods

```js
element.nextSibling;
element.previousSibling;
```

`nextSibling` → পরবর্তী sibling node

`previousSibling` → আগের sibling node

⚠️ এগুলো text node বা comment node-ও return করতে পারে।

---

## Element-based Siblings

### Methods

```js
element.nextElementSibling;
element.previousElementSibling;
```

এগুলো শুধুমাত্র **element sibling** return করে।

### Example

```html
<div>
  <p id="first">First</p>
  <p id="second">Second</p>
  <p id="third">Third</p>
</div>
```

```js
const second = document.getElementById("second");

console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
```

Output:

```text
<p id="first">First</p>
<p id="third">Third</p>
```

---

# ⭐ Node vs Element — Important

DOM traversal-এর সময় সবচেয়ে important distinction:

```text
Node
 │
 ├── Element
 ├── Text
 ├── Comment
 └── Other node types
```

তাই:

```text
childNodes
firstChild
lastChild
nextSibling
previousSibling
        ↓
     Node-based
```

আর:

```text
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling
        ↓
    Element-based
```

---

# 🧠 Easy Mental Model

```text
                    DOM Element
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
       Parent           Child         Sibling
          │              │              │
          ↓              ↓              ↓
 parentNode         childNodes       nextSibling
 parentElement      children         previousSibling
                                   nextElementSibling
                                   previousElementSibling
```

---

# 🔥 Quick Reference

| Purpose                      | Method / Property          |
| ---------------------------- | -------------------------- |
| Select by ID                 | `getElementById()`         |
| Select by Class              | `getElementsByClassName()` |
| Select first CSS match       | `querySelector()`          |
| Select all CSS matches       | `querySelectorAll()`       |
| Select by Tag                | `getElementsByTagName()`   |
| Get Parent Node              | `parentNode`               |
| Get Parent Element           | `parentElement`            |
| Get All Child Nodes          | `childNodes`               |
| Get Child Elements           | `children`                 |
| Get First Child Node         | `firstChild`               |
| Get Last Child Node          | `lastChild`                |
| Get First Child Element      | `firstElementChild`        |
| Get Last Child Element       | `lastElementChild`         |
| Get Next Sibling Node        | `nextSibling`              |
| Get Previous Sibling Node    | `previousSibling`          |
| Get Next Sibling Element     | `nextElementSibling`       |
| Get Previous Sibling Element | `previousElementSibling`   |

---

## 🏆 Practice Project

### Countdown Timer — Olympic 2028

**Status:** ✅ Completed

### Homework

Build a:

> **⏱️ Countdown Timer for the 2028 Olympics**

এই project-এর মাধ্যমে `querySelector()`, DOM manipulation, event handling এবং JavaScript timing functions (`setInterval`) practice করা যাবে।
