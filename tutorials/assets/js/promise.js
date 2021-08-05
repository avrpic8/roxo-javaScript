const button = document.querySelector('button');

const setTimer = duration =>{

    const promise = new Promise((resolve, reject)=>{
        if(duration < 3000){
            reject('Minimum time is 3000');
        }
        setTimeout(()=>{
            resolve('Done1!');
        },duration);        
    });
    
    return promise;
}

const setUp = duration =>{

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done2!');
        },duration);        
    });
    
    return promise;
}

async function trackUserHandler() {

    try{
        const data1 = await setTimer(2000);
        const data2 = await setUp(3500);
        console.log(data1, data2); 
    }catch(err){
        console.log(err);
    }
    

    // setTimer(2000).then(data=>{
    //     setUp(2000).then(data2=>{
    //         console.log(data);
    //         console.log(data2);
    //     });
    // }, err=>{
    //     console.log(err);
    // });
}

button.addEventListener('click', trackUserHandler);