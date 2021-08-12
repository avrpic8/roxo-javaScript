const postsList = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

const form = document.querySelector("#new-post form");
const fetchPost = document.querySelector("#available-posts button");   

const lists = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
    
    /*const promise = new Promise((resolve, reject)=>{

        const http = new XMLHttpRequest();
        http.open(method, url);
        http.responseType = 'json';
        http.onload = function(){
            if(http.status >=200 && http.status <300){
                resolve(http.response);
            }else{
                reject(new Error('something went wrong!'));
            } 
        }
        http.onerror = function(){}
        http.send(JSON.stringify(data));
    });

    return promise;*/

    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'appliction/json'
        }
    }).then(response=>{
        if(response.status >=200 && response.status <300){
            return response.json();
        }else{
            return response.json().then(errData=>{
                console.log(errData);
                throw new Error('somthing went wrong!');

            });
        }   
    }).catch(error=>{
        console.log(error);
        throw new Error('somthing went wrong catch');
    });
}

async function fetchPosts() {
    /*sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then(
        respnseData => {
            const  listofResponse =respnseData;
            for(const post of listofResponse){
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                postsList.append(postEl);
            }
        }
    );*/

    try{
        const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/post');
        const listofResponse =responseData;
        for(const post of listofResponse){
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            postsList.append(postEl);
        }
    }catch(error){
        alert(error.message);
    } 
}

function createPosts(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        id: userId,
        userId: userId
    }

    sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post);
}

fetchPost.addEventListener('click', fetchPosts);
form.addEventListener('submit', e=>{
    e.preventDefault();

    const title = e.currentTarget.querySelector('#title').value;
    const content = e.currentTarget.querySelector('#content').value;
    createPosts(title, content);
});

lists.addEventListener('click' ,event=>{

    if(event.target.tagName === 'BUTTON'){
        const postId = event.target.closest('li').id;
        sendHttpRequest("DELETE", `https://jsonplaceholder.typicode.com/posts/${postId}`);  
    }
});
