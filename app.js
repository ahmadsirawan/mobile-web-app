document.addEventListener('prechange', function(event) {
  document.querySelector('ons-toolbar .center')
    .innerHTML = event.tabItem.getAttribute('label');
});
 


const API_KEY = 'YourApiKey';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=YourApiKey';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function movieSection(movies) {
	const section = document.createElement('div');
	section.classList = 'section';

	 movies.map((movie) => {
		if(movie.poster_path) {
				let img = document.createElement('img');
				img.src = IMAGE_URL + movie.poster_path;
				img['data-movie-id'] = IMAGE_URL + movie.poster_path;
				
				let overview = document.createElement('div');
				overview.setAttribute('id', 'overview');
				overview.innerHTML = `<h2>Title:</h2>`+ movie.title + `<h2>Release Date:</h2>` + movie.release_date + `<h2>Rating:</h2>` + movie.vote_average + '/10'  + `<h2>Overview:</h2>`  + movie.overview ;

				
		              	
              	section.appendChild(img);
              	section.appendChild(overview);


              		}

              })

					return section;
               }

function createMovieContainer(movies) {

	const movieElement = document.createElement('div');
	movieElement.setAttribute('class', 'movie');
	

	const section = movieSection(movies);

	movieElement.appendChild(section);
	

	B
	return movieElement;

}

let buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movies-searchable');


function renderSearchMovies(data) {

	movieSearchable.innerHTML = '';
	const movies = data.results;
	const movieBlock = createMovieContainer(movies);
	movieSearchable.appendChild(movieBlock);

		console.log('Data: ', data);

}
buttonElement.onclick = function(event) {
	event.preventDefault();

	  document.getElementById("loader").style.display = "block";

	 b = setTimeout(function(){

	 document.getElementById("loader").style.display = "none";
	 const value = inputElement.value;

	const newUrl = url + '&query=' + value;


	fetch(newUrl)
	.then( (res) => res.json())
	.then(renderSearchMovies)
	.catch((error) => {
		console.log('Erro: ', error);
	}); }, 1500);

	
	
	}


function requestMovies(){
	fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=YourApiKey')
		.then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);

        displayTrending(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

requestMovies();


function displayTrending(data){
	

  console.log(data);
  
  const movieDisplay = document.querySelector('.trend');

  

  let allMovies = data.results;
  
  allMovies.forEach(function(movie){
    console.log(movie);
    let sc = movie.title;
    

let img = document.createElement('img');
				img.src = IMAGE_URL + movie.poster_path;
				img['data-movie-id'] = IMAGE_URL + movie.poster_path;



    let overview = document.createElement('div');
				overview.setAttribute('id', 'overview');
				overview.innerHTML = `<h2>Title:</h2>`+ movie.title + `<h2>Release Date:</h2>` + movie.release_date + `<h2>Rating:</h2>` + movie.vote_average + '/10'   + `<h2>Overview:</h2>`  + movie.overview ;
    
     movieDisplay.appendChild(img);
     movieDisplay.appendChild(overview);
    
    


  })

  let tab = document.querySelector('#tab');
  tab.onclick = function(){

  	let anim = document.querySelector(".trend");
	anim.classList.add("trend-active");
  }



  function requestMovies(){
	fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=YourApiKey')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);

        displayTop(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

requestMovies();


function displayTop(data){
	

  console.log(data);
  
  const movieDisplay = document.querySelector('.top-rated');

  

  let allMovies = data.results;
  
  allMovies.forEach(function(movie){
    console.log(movie);
    let sc = movie.title;
    

let img = document.createElement('img');
				img.src = IMAGE_URL + movie.poster_path;
				img['data-movie-id'] = IMAGE_URL + movie.poster_path;



    let overview = document.createElement('div');
				overview.setAttribute('id', 'overview');
				overview.innerHTML = `<h2>Title:</h2>`+ movie.title + `<h2>Release Date:</h2>` + movie.release_date + `<h2>Rating:</h2>` + movie.vote_average + '/10' + `<h2>Overview:</h2>`  + movie.overview ;
    
     movieDisplay.appendChild(img);
     movieDisplay.appendChild(overview);
    
    


  })

  let tab = document.querySelector('#tab-2');
  tab.onclick = function(){

  	let anim = document.querySelector(".top-rated");
	anim.classList.add("top-rated-active");
  }


	
	
}
}

