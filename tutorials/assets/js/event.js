const button = document.querySelector('button');

// way 1
// button.onclick = function(){
//     console.log('استفاده از روش اول برای کلیک');
// }

// way 2
// const btnClick = () =>{
//     console.log('استفاده از روش دوم برای کلیک');
// }
// button.onclick = btnClick;

// way 3
// button.addEventListener('click', function(){
//     console.log('استفاده از روش سوم برای کلیک');
// });

const btnEvent = event =>{
    event.preventDefault();
    console.log(event);
}

button.addEventListener('click', btnEvent);


// add eventListener to loops
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem =>{
//     listItem.addEventListener('click', event=>{
//         event.target.classList.toggle('highlight');
//     });
// })

list.addEventListener('click', event=>{
    event.target.closest('li').classList.toggle('highlight');
})