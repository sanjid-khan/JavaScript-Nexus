# Event Delegation

**Event Delegation** হলো এমন একটি event-handling technique যেখানে প্রতিটি child element-এ আলাদা event listener না দিয়ে, তাদের **parent/root element-এ একটি মাত্র event listener** attach করা হয়।

তারপর `event.target` ব্যবহার করে বোঝা হয়—**ঠিক কোন child element-এ event ঘটেছে।**

---

## Basic Idea

ধরো, আমাদের অনেকগুলো button আছে:

```html
<div id="buttons">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
</div>
```

প্রতিটি button-এ আলাদা listener না দিয়ে parent `<div>`-এ একটি listener দেওয়া যায়:

```js
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});
```

এখানে:

```text
          div#buttons
               │
      ┌────────┼────────┐
      ↓        ↓        ↓
   Button    Button    Button
     One      Two      Three
```

শুধু `div`-এর উপর একটি listener আছে।

---

# 1. Event Delegation

Parent/root element-এ listener attach করে তার child elements-এর events handle করা যায়।

```js
parent.addEventListener("click", (event) => {
  // Handle child events
});
```

### সুবিধা

```text
Traditional Approach
        ↓
Button 1 → Listener
Button 2 → Listener
Button 3 → Listener
Button 4 → Listener
        ↓
Multiple Event Listeners


Event Delegation
        ↓
Parent → One Listener
        ↓
Handles all child buttons
```

তাই অনেক dynamic বা repeated elements থাকলে Event Delegation বেশ useful।

---

# 2. `event.target`

`event.target` হলো **যে actual element-এ event ঘটেছে**, সেই element।

```js
parent.addEventListener("click", (event) => {
  console.log(event.target);
});
```

যদি `Button Two` click করি:

```text
event.target
     ↓
Button Two
```

অর্থাৎ `event.target` দিয়ে আমরা জানতে পারি **কোন child element-এ click হয়েছে।**

---

# 3. Conditional Logic

Parent-এর মধ্যে অন্য elements থাকলে আমরা condition ব্যবহার করে নিশ্চিত করতে পারি যে শুধু button-এর জন্য code execute হবে।

```js
parent.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked!");
  }
});
```

এখানে:

```text
Click
  ↓
event.target
  ↓
Is it a BUTTON?
  │
 ┌┴────────────┐
Yes           No
 │             │
 ↓             ↓
Execute       Ignore
```

তাই parent-এর অন্য element click হলেও button-এর logic execute হবে না।

---

# 4. Real Example

```html
<div id="container">
  <button data-id="1">Delete 1</button>
  <button data-id="2">Delete 2</button>
  <button data-id="3">Delete 3</button>
</div>
```

```js
const container = document.getElementById("container");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.dataset.id;

    console.log("Delete item:", id);
  }
});
```

যদি `Delete 2` button click করি:

```text
event.target
     ↓
Delete 2 button
     ↓
dataset.id
     ↓
"2"
```

Output:

```text
Delete item: 2
```

---

# ⭐ Event Delegation-এর মূল তিনটি Concept

### 1. Event Delegation

> **Parent/root element-এ listener লাগিয়ে তার child elements-এর events handle করা যায়।**

### 2. `event.target`

> **যে actual element-এ event ঘটেছে, সেটি identify করতে সাহায্য করে।**

### 3. Conditional Logic

> **শুধু নির্দিষ্ট element-এর জন্য logic execute করা যায়, অন্য elements ignore করা যায়।**

---

# 🧠 Easy Mental Model

```text
                 Parent
                   │
          One Event Listener
                   │
          ┌────────┼────────┐
          ↓        ↓        ↓
       Button    Button    Button
          │        │        │
          └────────┼────────┘
                   ↓
             event.target
                   ↓
          Which button clicked?
                   ↓
             Conditional Logic
                   ↓
              Execute Action
```

## 🔥 Final Takeaway

> **Event Delegation = Parent-এ একটি listener + `event.target` দিয়ে child identify + condition দিয়ে প্রয়োজনীয় action execute।**

এটি বিশেষ করে **অনেকগুলো একই ধরনের elements** অথবা **dynamically created elements** handle করার জন্য একটি efficient এবং practical event-handling technique।
