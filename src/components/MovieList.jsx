import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => (
    <div className="movie-list col-md-6 offset-md-3">
      <ul>
      <li>
        {/* mapping through array of examplemovieData, setting the new array of data to movie list entry and passing that information into the component  */}
        {props.movies.map(movie =>
          <MovieListEntry movie={movie} movieListClick ={props.movieListClick} />
        )}
      </li>
      </ul>
    </div>
  );

  export default MovieList;

//   movieListClick ={props.movieListClick}