import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GitMoviesApi() {
  let [movies, setMovies] = useState([]);
  async function GitMoviesApi(values) {
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=9d48f0aff96d50dd03ceeb2df3116c6b",
      values
    );
    setMovies(data.results);
  }
  useEffect(() => {
    GitMoviesApi();
  }, []);
  return (
    <div className="row my-5 py-5">
      {movies.map((ele) => {
        return (
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`}
                    className="img-fluid rounded-start"
                    alt={ele.overview}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
