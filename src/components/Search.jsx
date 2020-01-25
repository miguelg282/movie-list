// pass in props to have it show up on the page
var Search = (props) => (
  <div className="search-bar form-inline" style='border: 10px'>
    <input className="searchInput" type="text"/>
    <button className="button is-info" movieSearchClick ={props.movieSearchClick}>Go! 
      <span className="search"></span>
    </button>
  </div>
    //     <button className="button is-info" onClick={this.addItem}>
);
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;