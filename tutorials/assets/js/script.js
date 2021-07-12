// ========= Document Object Model (DOM)

// Access to one node
const getElementById = document.getElementById("header");
const querySelector = document.querySelector("#header");

console.log(getElementById, querySelector);


// Access to multiple node
const getElementByClass = document.getElementsByClassName('list');
const getElementByTag = document.getElementsByTagName('li');
const querySelectAll = document.querySelectorAll('.list');
console.log(getElementByClass, getElementByTag);
console.log(querySelectAll);

// Access to related node
const parentNode = document.getElementById('header').parentNode.nodeName;
const firstChild = document.getElementById('page').firstChi;
const innerHTML = document.getElementById('page').innerHTML;
console.log(parentNode);
console.log(firstChild);
console.log(innerHTML);

