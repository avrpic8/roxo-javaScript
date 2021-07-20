// ========= variable definition
let number = 20;

let isOpen = false;
let isClose = true;

let _userName = "Saeed";

// Arrays
let colors = ["white", false, 35]; 
// alert("رنگ مورد علاقه من" + colors)
colors[1] = true;
colors[2] = 46;
console.log(colors);


// ========= functions
function sayHello(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
    return 'Hello ' + fullName;
    //alert(fullName);
}

// function getArea(width, height) {
//     return width * height;
// }  

function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    let size = [area, volume];
    return size;
}

// Anonymous function
let area = function(width, height){ 
    return width * height;
}

/*console.log(sayHello('Saeed', 'Razazzadeh'));
console.log(area(3,3)); 
console.log(getSize(4,3,1));*/

// An object

/*let hotel = {
    name: 'Azadi', // property
    rooms: 40,
    reserved: 25,
    gym: true,
    checkAvailability: function(){ // mehods
        return this.rooms - this.reserved;
    }
}

let hotelName = hotel.name;
let roomsFree = hotel.checkAvailability();*/

let hotel = new Object();
hotel.name = 'azadi';
hotel.rooms = 40;
hotel.reserved = 25;
hotel.checkAvailability = function(){
    return this.rooms - this.reserved;
}

let hotelName = hotel.name;
let roomsFree = hotel.checkAvailability();


function Hotel(name, rooms, reserved){
    this.name = name;
    this.rooms = rooms;
    this.reserved = reserved;
    this.checkAvailability = function(){
        return this.rooms - this.reserved;
    }
}

let myHotel = new Hotel('Azadi', 130, 30);
//console.log(myHotel);


let cost = {
    room1: 200,
    room2: 250,
    room3: 400,
    room4: 500
}

let arrayCost = [200, 250, 400, 500];


// ========= window object BOM

let myWindow = window.innerHeight;
let windowLocation = window.location;
let windowDocument = window.document;
let windowHistory  = window.history;
let windowScreen   = window.screen;


// ========= document object DOM

let documentTitle = document.title;
let lastModified  = document.lastModified;
let documentUrl   = document.URL;
let documentDomain = document.domain

document.write("<p> سلام</p>")
let el = document.getElementById("first-app");



// ========= create and add a new element to document

let newElement = document.createElement('p');
let text = document.createTextNode('متن جدید اضافه شد');
newElement.appendChild(text);
document.body.insertBefore(newElement, el);


// ========= String object

let saying = "Hello World";
let upperCase = saying.toUpperCase();
let replace = saying.replace(/o/g, 'z');
console.log(replace);


// ========= Math object methods

let price = 12.36;
let result = Math.round(price);

let random = Math.round( Math.random() * 10000 )
console.log(random);


// ========= Date methods  YYYY  MM  DD  HH  MM  SS
let today = new Date();
let fullYear = today.getFullYear();
let hour = today.getHours();
let getTime = today.getTime();

let year  = today.getFullYear();
let month = today.getMonth() + 1; 
let day   = today.getDay();

let shamsi = gregorian_to_jalali(year, month, day);

console.log(shamsi);


// =========== conditions statment (if)

let score = 0;
let message;

function tabrik(score) {
    message = "شما در آزمون قبول شده ایید."
    message += `نمره شما: ${score}`
    alert(message);  
}

function mardood(score) {
    message = "شما در آزمون مردود شده اید."
    message += `نمره شما: ${score}`
    alert(message);  
}

function ghayeb() {
    message = "شما در آزمون قایب بوده اید."
    message += `نمره شما: ${score}`
    alert(message);  
}

// if (score > 70){
//     tabrik(score);
// } else if(score == 0){
//     ghayeb();
// } else mardood(score)


// ========= loops
for(let score=0; score <= 10; score++){
    console.log(score);
}

let index = [24, 32, 17];
let msg = "";

// for(let i =0; i < index.length; i++){
//     msg += 'Round' + (i + 1) + ': ';
//     msg += index[i] + "<br>";
// }


for(let i=1; i<10; i++){
    msg += i + " x 5 = " + (i*5) + "<br><br>";
}
document.getElementById('answer').innerHTML = msg;

// ========= Anonymous function
const startBtnGame = document.getElementById('start-game');


// funcation declaratin
function startGame(){
    console.log("بازی شروع شد");
}

// function expression , anonymous 
const start = function(){
    console.log("بازی شروع شد"); 
} 

startBtnGame.addEventListener("click", function(){
    console.log("بازی شروع شد");
});



// ========= Binding
const myData = {
    title: 'پدرخواند',
    getTitle: function(){
        return console.log(this.title);
    }
}  

myData.getTitle();  

const newData = myData.getTitle.bind({title:'جوکر'});
newData();

const newData2 = myData.getTitle.bind({});
newData2(); 


// ========= Arrays advanced    
// const nubmers = new Array(5,2);
// console.log(nubmers);

// const items = Array.of(1,2,3);
// console.log(items);

// const arrayList = Array.from("Hi roxo")
// console.log(arrayList);


// const favorites = ['programming', 'Movies', 'Sports'];
// const moreFavorites = [30, 'masuod', {objects:[1,2,3]}];
// const moreData = [[1,2], [3,20]];


// for(const data of moreData){
//     for(const item of data)
//         console.log(item);
// }

// const myItem = ['sports', 'study', 'tv watch'];
// myItem.push('programming');
// myItem.unshift('reading ');
// myItem.shift()
// myItem.pop();
// console.log(myItem);


// // slice method
// const data = ['sport', 'movies', 'reading', 'tv', 'game', 'travel'];
// const sliceData = data.slice(0, 2);
// console.log(sliceData);

// // splice methode
// const spliceData = data.splice(1, 2);
// const addSpliceData = data.splice(0,0, 'a', 'b')
// console.log(data, addSpliceData);

// // split method
// const Mymessage = "سلام روز همگی بخیر";
// const newMessage = Mymessage.split(' ', 2);
// console.log(Mymessage, newMessage);


// ========= loops
const prices = [12000, 25000, 90000, 45000];
const tax = 0.09;
const taxCalculate = [];

// for(const price of prices){
//     taxCalculate.push(price * tax);
// }

prices.forEach((price, index, prices)=>{
    const priceObj = {idx:index, taxPrice: price * tax}
    taxCalculate.push(priceObj)
})

console.log(taxCalculate);


// map method
const taxCalc = prices.map((price, index, prices)=>{
    const priceObj = {idx:index, taxPrice:price * tax};
    return priceObj;
})

console.log(prices, taxCalc);

// sort reverse methods
const sortedPrice = prices.sort((a, b)=>{
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
});

console.log(sortedPrice);


// filter method
const filteredPrices = prices.filter((price, index, prices)=>{
    return price > 25000;
});

console.log(filteredPrices);

// reduce method
const cart = [125000, 78000, 90000];

let sum = 0;
cart.forEach(price =>sum += price);
console.log(sum);

// const sum2 = cart.reduce((preVal, curVal, curIndex, cart) =>{
//     return preVal + curVal;
// }, 0);

const sum2 = cart.reduce((preVal, curVal) => preVal + curVal, 0);
console.log(sum2);


// ========= ... operator
const fullName = ['saeed', 'ehsan'];
const copiedFullName = [...fullName];
console.log(copiedFullName);

console.log(Math.min(...cart));

const userData = ['saeed', 'razazzadeh', 'Male', 32];
const [firstName, lastName, ...otherInfo] = userData;

console.log(firstName, lastName, otherInfo);


// ========= Sets
const ids = new Set([1,2,3]);
ids.add(6);
ids.entries()
console.log(ids);

const user1 = {username:'saeed'};
const user2 = {username: 'ehsan'};

const userInfo = new Map([[user1, [{age:32, email:'avrpic8@gmail.com'}]]]);
userInfo.set(user2, [{age:35, email:'avrpic8@yahoo.com'}]);

for(const entry of userInfo.entries()){
    console.log(entry);
}

for(const [key, value] of userInfo.entries()){
    console.log(key, value);
}

for(const value of userInfo.values()){
    console.log(value);
}

console.log(userInfo.size);


// ========= Objects
const person ={
    name: 'saeed',
    age: '32',
    favorites: ['game', 'sport'],
    welcome: function(){
        alert("welcome");
    }
}

person.isAdmin = true; // add properties
delete person.age;     // delete properties
console.log(person);


// ========= OOP


