import React from "react";
import axios from "axios";
import Movie from "./movie";
import "./App.css";

export default class App extends React.Component {
  // 꼭 여기에 state 전부 선언할 필요 없음. 나중에 다른곳에서 그냥 추가해도됨.
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // api 사이트에 보면 sort_by명령어 등등 정렬같은거 나옴. 뒤에?sort by=방식 쓰면댐
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // console.log(movies);
    this.setState({movies, isLoading:false})
    // 바로윗줄 movies는 movies:movies로 state movie: axios movies가 단축된것.
  }
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // },6000);
    this.getMovies();
  }
  render() {
    const { isLoading,movies} = this.state;
    return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
            <span className="Loader__tect">Loading...</span>
          </div>) : (
            <div className="movies">
              {movies.map(movie => (
                // console.log(movies);
                    <Movie  key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}></Movie>
                  ))}
            </div>
          )}
        </section>
    )
  }
}
