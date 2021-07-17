const movies = [];


const backDrop = document.getElementById('back-drop');
const addModal = document.getElementById('moview-modal');
const addMoviewButton = document.querySelector('header button');


// add movie modal buttons
const cancelMovieModalButon = addModal.querySelector('.cancel');
//const confirmModalButon = addModal.querySelector('.confirm');
const confirmMovieModalButton  = cancelMovieModalButon.nextElementSibling;
const usersInputAddMovieModal = addModal.querySelectorAll('input');

// movie list
const entryTextSection = document.getElementById('entry-text');

// functions
const toggleBackDrop = () =>{
    backDrop.classList.toggle('visible');
}

const backDropClickHandler = () =>{
    toggleBackDrop();
}

const clearMovieInputs = () =>{
    for(const userInput of usersInputAddMovieModal){
        userInput.value = '';
    }
}

const updateUI = () =>{
    if(movies.length ===0){
        entryTextSection.style.display = 'block';
    }else{
        entryTextSection.style.display = 'none';
    }
}

const deleteMovieHandler = (movieId) =>{
    let movieIndex = 0;
    for(const movie of movies){
        if(movie.id === movieId){
            break;
        }
        movieIndex++;     
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById('movie-list');
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
}

const renderNewMovieElement = (id, title, url, rating) =>{
    const newMovieElement = document.createElement('div');
    newMovieElement.classList = 'col-12 col-md-4 col-lg-3 my-1';
    newMovieElement.innerHTML = `
        <div class="card rounded movie-card" >
            <img src="${url}" class="img-card rounded-top" alt="...">
            <div class="card-body">
                <p class="bg-primary badge-pill text-white float-right m-0">${rating}/5 <i class="fa fa-star star-icon"></i></p>
                <h4 class="movie-title float-left m-0">${title}</h4>                      
            </div>
        </div>    
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}

const addMovieHandler = () =>{
    const title = usersInputAddMovieModal[0].value;
    const imageUrl = usersInputAddMovieModal[1].value;
    const rating = usersInputAddMovieModal[2].value;

    if(title.trim() === '' || imageUrl.trim() === '' || rating.trim() === '' || rating < 1 || rating > 5){
        alert('لطفا ورودی های خود را کنترل کنید ');
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: title,
        url: imageUrl,
        rate: rating
    }

    movies.push(newMovie);
    clearMovieInputs();
    console.log(movies)

    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.url, newMovie.rate);
    updateUI();
}



// ============= event listeners =============  
addMoviewButton.addEventListener('click', function(){
    //toggleBackDrop();
});

confirmMovieModalButton.addEventListener('click', addMovieHandler);

backDrop.addEventListener('click', backDropClickHandler);