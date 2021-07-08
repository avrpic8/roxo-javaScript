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

