// this is App.js file
import MovieList from "./MovieList.js";
import movieListData from "../data/movieListData.js";
import Search from "./Search.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieListData: movieListData
    };
    this.movieSearchClick = this.movieSearchClick.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    //prevent
    e.preventDefault();
    //create var for our list, item to add, and form
    let movieListData = this.state.movieListData;
    const newItem = document.getElementById("addInput");
    const form = document.getElementById("form");
    //if input has value
    if (newItem.value !== "") {
      // add item to list to end of list array
      movieListData.push(newItem.value);
      //then set state
      this.setState({
        movieListData: movieListData
      });
      //reset form
      newItem.classList.remove("is-danger");
      form.reset();
    } else {
      //if input doesn't have value
      newItem.classList.add("is-danger");
    }
  }

  movieSearchClick(e) {
    e.preventDefault();
    var movieList = [];
    var movieSearch = document.getElementById("searchInput");
    for (var i = 0; i < this.state.movieListData.length; i++) {
      if (this.state.movieListData[i].title.includes(movieSearch)) {
        movieList.push(this.state.movieSearch[i]);
      }
    }
    if(this.state.movieListData === 0) {
      movieList = [{title: "No Results"}]
    }
    this.setState({
      movieListData: movieList
    });
  }
  render() {
    return (
      <div>
        <div className="col-md-6 offset-md-3">
          {/* import the 'Search' components */}
          <div>
            <Search movieSearchClick={this.state.movieSearchClick} />
          </div>
        </div>

        <form className="form" id="addItemForm">
          <input
            type="text"
            className="input"
            id="addInput"
            placeholder="Something that needs ot be done..."
          />
          <button className="button is-info" onClick={this.addItem}>
            Add Item
          </button>
        </form>

        {/* movieListClick = {this.movieListClick} */}
        <div>
          <MovieList movies={this.state.movieListData} />
        </div>
      </div>
    );
  }
}
