# JavaScript `this` Keyword

JavaScript-এর `this` একটি বিশেষ keyword, যার value **কীভাবে function-টি call করা হয়েছে তার উপর নির্ভর করে**।

সহজভাবে:

> **`this` নিজে থেকে কোনো নির্দিষ্ট object-এর দিকে permanently point করে না। Function কীভাবে invoke হয়েছে, তার উপর `this` নির্ধারিত হয়।**

---

## `this` — Quick Reference

| Context / Situation                   | `this` কী হবে?                                                        |
| ------------------------------------- | --------------------------------------------------------------------- |
| **Global scope (non-strict)**         | `window` (browser) / `global` (Node.js context অনুযায়ী)               |
| **Global scope (strict)**             | `undefined`                                                           |
| **Object method**                     | যে object method-টি call করছে                                         |
| **Regular function**                  | সাধারণত `globalThis` / `undefined` (strict mode)                      |
| **Arrow function**                    | নিজের `this` নেই → outer scope-এর `this`                              |
| **Nested regular function**           | নিজের invocation context অনুযায়ী `this`                               |
| **Nested arrow function**             | outer function-এর `this`                                              |
| **Constructor function / Class**      | নতুন তৈরি হওয়া object                                                 |
| **`call()` / `apply()` / `bind()`**   | explicitly দেওয়া object                                               |
| **Event listener (regular function)** | যে element event trigger করেছে                                        |
| **Event listener (arrow function)**   | lexical `this` → surrounding scope-এর `this`                          |
| **`setTimeout()` / `setInterval()`**  | regular function → invocation context অনুযায়ী; arrow → lexical `this` |

---

# 1. Global Scope

Browser-এর non-strict global context-এ `this` সাধারণত `window` object-কে refer করে।

```js
console.log(this);
```

Browser-এর classic script-এ:

```text
window
```

Strict mode-এ function-এর ভিতরের `this` আলাদা আচরণ করে:

```js
"use strict";

function showThis() {
  console.log(this);
}

showThis();
```

**Output:**

```text
undefined
```

> ⚠️ `this`-এর আচরণ browser, Node.js module system এবং execution context অনুযায়ী কিছুটা ভিন্ন হতে পারে।

---

# 2. Object Method

যখন কোনো function object-এর method হিসেবে call করা হয়, তখন `this` সেই object-কে refer করে।

```js
const user = {
  name: "Sanjid",

  greet() {
    console.log(this.name);
  }
};

user.greet();
```

**Output:**

```text
Sanjid
```

এখানে:

```text
user.greet()
     ↓
    this
     ↓
   user
```

### Important

`this` function-এর **কোথায় লেখা আছে** সেটা দেখে নয়, বরং **কীভাবে call করা হয়েছে** সেটা দেখে নির্ধারিত হয়।

---

# 3. Regular Function

Regular function-এর `this` invocation-এর উপর নির্ভর করে।

```js
function showThis() {
  console.log(this);
}

showThis();
```

Strict mode-এ:

```js
"use strict";

function showThis() {
  console.log(this);
}

showThis();
```

**Output:**

```text
undefined
```

Non-strict browser context-এ সাধারণত:

```text
window
```

---

# 4. Arrow Function

Arrow function-এর **নিজস্ব `this` নেই**।

এটি surrounding/outer scope থেকে `this` নিয়ে নেয়।

```js
const user = {
  name: "Sanjid",

  greet() {
    const sayName = () => {
      console.log(this.name);
    };

    sayName();
  }
};

user.greet();
```

**Output:**

```text
Sanjid
```

এখানে:

```text
user.greet()
      ↓
     this = user
      ↓
arrow function
      ↓
outer this ব্যবহার করে
      ↓
     user
```

### ⭐ Key Rule

> **Arrow Function → নিজের `this` নেই → lexical/outer `this` ব্যবহার করে।**

---

# 5. Nested Regular Function

Nested regular function-এর ক্ষেত্রে outer function-এর `this` automatically পাওয়া যায় না।

```js
const user = {
  name: "Sanjid",

  greet() {
    function inner() {
      console.log(this);
    }

    inner();
  }
};

user.greet();
```

`inner()` একটি **regular function call**, তাই এটি outer `this` inherit করে না।

Strict mode-এ:

```text
undefined
```

Non-strict environment-এ সাধারণত global object পাওয়া যেতে পারে।

---

# 6. Nested Arrow Function

Arrow function outer function-এর `this` capture করে।

```js
const user = {
  name: "Sanjid",

  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

user.greet();
```

**Output:**

```text
Sanjid
```

কারণ:

```text
user.greet()
      ↓
this = user
      ↓
arrow function
      ↓
outer this capture করে
      ↓
this = user
```

---

# 7. Constructor Function

Constructor function-কে `new` দিয়ে call করলে `this` নতুন তৈরি হওয়া object-কে refer করে।

```js
function User(name) {
  this.name = name;
}

const user1 = new User("Sanjid");

console.log(user1.name);
```

**Output:**

```text
Sanjid
```

এখানে:

```text
new User()
    ↓
new object তৈরি
    ↓
this = new object
```

---

# 8. Class

Class-এর constructor-এর ভিতরে `this` newly created instance-কে refer করে।

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

const user1 = new User("Sanjid");

console.log(user1.name);
```

**Output:**

```text
Sanjid
```

---

# 9. `call()`

`call()` ব্যবহার করে manually `this` set করা যায়।

```js
function greet() {
  console.log(this.name);
}

const user = {
  name: "Sanjid"
};

greet.call(user);
```

**Output:**

```text
Sanjid
```

এখানে:

```text
call(user)
    ↓
this = user
```

---

# 10. `apply()`

`apply()`-ও manually `this` set করতে পারে।

```js
function greet(message) {
  console.log(message, this.name);
}

const user = {
  name: "Sanjid"
};

greet.apply(user, ["Hello"]);
```

**Output:**

```text
Hello Sanjid
```

---

# 11. `bind()`

`bind()` একটি নতুন function তৈরি করে, যার `this` permanently নির্দিষ্ট object-এর সাথে bound থাকে।

```js
function greet() {
  console.log(this.name);
}

const user = {
  name: "Sanjid"
};

const boundGreet = greet.bind(user);

boundGreet();
```

**Output:**

```text
Sanjid
```

---

# 12. Event Listener

Regular function ব্যবহার করলে event যে element-এ ঘটেছে, `this` সাধারণত সেই element-কে refer করে।

```js
button.addEventListener("click", function () {
  console.log(this);
});
```

এখানে:

```text
this → button
```

কিন্তু arrow function ব্যবহার করলে:

```js
button.addEventListener("click", () => {
  console.log(this);
});
```

Arrow function নিজের `this` তৈরি করে না।

তাই:

```text
this → surrounding scope-এর this
```

---

# 13. `setTimeout()` / `setInterval()`

Regular function-এর `this` এবং arrow function-এর `this` আলাদা আচরণ করতে পারে।

### Regular Function

```js
const user = {
  name: "Sanjid",

  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.greet();
```

এখানে callback একটি regular function হওয়ায় outer `this` automatically পাওয়া যায় না।

### Arrow Function

```js
const user = {
  name: "Sanjid",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user.greet();
```

**Output:**

```text
Sanjid
```

কারণ arrow function outer `this` ধরে রাখে।

---

# ⭐ Most Important Rules

### Rule 1 — Object Method

```js
object.method();
```

```text
this → object
```

---

### Rule 2 — Regular Function

```js
function test() {}
test();
```

```text
this → invocation context-এর উপর নির্ভরশীল
```

Strict mode-এ:

```text
this → undefined
```

---

### Rule 3 — Arrow Function

```js
const test = () => {};
```

```text
this → নিজের নেই
      → outer/lexical this
```

---

### Rule 4 — Constructor / Class

```js
new User();
```

```text
this → নতুন object
```

---

### Rule 5 — `call`, `apply`, `bind`

```js
fn.call(obj);
fn.apply(obj);
fn.bind(obj);
```

```text
this → explicitly specified object
```

---

# 🧠 Easy Mental Model

```text
                JavaScript `this`
                       │
          ┌────────────┴────────────┐
          │                         │
    Regular Function          Arrow Function
          │                         │
   Call করার ধরন দেখে        নিজের `this` নেই
       determine হয়                  │
          │                    outer `this`
          │                    ব্যবহার করে
          │
    ┌─────┼─────┬──────┐
    │     │     │      │
 Object  new  call   apply/bind
    │     │     │      │
 object  new  given  given
         obj  object  object
```

## One-Line Rule

> **Regular Function → `this` depends on how the function is called.**

> **Arrow Function → `this` depends on where the function was created (lexical `this`).**

### 🔥 Interview Shortcut

```text
Regular Function → "Who called me?"
Arrow Function   → "Where was I created?"
```
