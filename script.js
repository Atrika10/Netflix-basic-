const original__movies = document.getElementsByClassName('original__movies');
const trending = document.getElementById('trending');
const top_rated = document.getElementById('top_rated');

// Call the main functions the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
}



//  ** Function that displays the movies to the DOM **
showMovies = (movies, dom_element, path_type) => {

  var moviesElement = document.querySelector(dom_element);

  for (let movie of movies.results) {
    let imageElement = document.createElement('img')

    imageElement.setAttribute('data-id',movie.id );
    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

    moviesElement.appendChild(imageElement);

  }

}

function fetchMovies(url, dom_element, path_type) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong');
      }
    })
    .then(data => showMovies(data, dom_element, path_type))
    .catch(error => console.log(error))



}
// ** Function that fetches Netflix Originals **
function getOriginals() {
 let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';
  
  fetchMovies(url,'.original__movies','poster_path');

}
// ** Function that fetches Trending Movies **
function getTrendingNow() {
  let url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
  
  fetchMovies(url,'#trending','backdrop_path');

}
// ** Function that fetches Top Rated Movies **
function getTopRated() {
  let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  
  fetchMovies(url,'#top_rated','backdrop_path');

}







