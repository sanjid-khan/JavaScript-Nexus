// ==========================
// DOM Manipulation Examples
// ==========================

// Create Elements
const element1 = document.createElement('li');
element1.innerHTML = "TS";

const element2 = document.createElement('li');
element2.innerHTML = "React";

const parent = document.getElementById('root');
parent.append(element1, element2);


// Function to attach elements dynamically
function attach(content) { 
    const element = document.createElement('li');
    element.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content + "V2.0";

    const parent = document.getElementById('root');
    parent.append(element, element2);
}

attach("TS");
attach("React");
attach("Node");


// ******************* TextNode *******************
const textNode = document.createTextNode("hello Coder Army");
const parentText = document.getElementById("root");
parentText.append(textNode);


// ******************* Attribute Node *******************

// Add id to first list
const attrId = document.createAttribute("id");
attrId.value = "first";

const firstList = document.querySelector('li');
firstList.setAttributeNode(attrId);

// Add same attribute to second list
const parentAttr = document.getElementById("root");
parentAttr.children[1].setAttributeNode(attrId);


// Access & modify attributes
const rootElement = document.getElementById("root");
console.log(rootElement.getAttribute("class"));
console.log(rootElement.getAttribute("id"));
console.log(rootElement.getAttribute("style"));

rootElement.setAttribute("custom", "20");
rootElement.setAttribute("class", "rohan");
rootElement.removeAttribute("custom");


// Specific child access and set attributes
const children = parentAttr.children;
const thirdChild = children[2];

thirdChild.setAttribute("class", "highlight");
thirdChild.setAttribute("id", "sanjid");


// *************** Add nodes to the DOM ****************
const parentDom = document.getElementById("root");

// prepend and append
const liElement = document.createElement('li');
liElement.innerHTML = "TS";

parentDom.prepend(liElement);
parentDom.append(liElement);

// insertBefore and replaceChild
const secondChild = parentDom.children[1];
parentDom.insertBefore(liElement, secondChild);
parentDom.replaceChild(liElement, secondChild);


// Using innerHTML to add content
parentDom.innerHTML += " <li>TS</li>";

// insertAdjacentElement
const divElement = document.createElement("div");
divElement.innerHTML = "Hello Coder Army";

parentDom.insertAdjacentElement("beforebegin", divElement);
parentDom.insertAdjacentElement("afterend", divElement);


// *************** Delete node or element ****************
const firstLi = document.querySelector('li');
firstLi.remove();

// Another example of removing
document.querySelector('li').remove();