//?using omdbapi.com > Usage
//? http://img.ombdapi.com/?apikey=[]&s=dabbe

document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movieForm");
  const movieResults = document.getElementById("movieResults");

  movieForm.addEventListener("submit", async (e) => {
    e.preventDefault(); //?to stop from reload screen
    const movieName = document.getElementById("movieInput").value;
    await searchMovies(movieName); //!searchMovies is callback funciton
  });

  async function searchMovies(movieName) {
    try {
      movieResults.innerHTML = '<div class="loading">Searching movies...</div>';

      const response = await fetch(
        `http://www.omdbapi.com/?s=${movieName}&apikey=14e82aca`
      );
      const data = await response.json();

      if (data.Response === "False") {
        //?response is property in json object
        throw new Error(data.Error || "No movies found");
      }

      displayMovies(data.Search); //?search will give list
    } catch (error) {
      movieResults.innerHTML = `
                  <div class="error-message">
                      ${
                        error.message ||
                        "Error searching movies. Please try again."
                      }
                  </div>
              `;
    }
  }

  function displayMovies(movies) {
    //?movies list
    movieResults.innerHTML = `
              <div class="movies-grid">
                  ${movies
                    .map(
                      (movie) => `<div class="movie-card">
                          <img 
                              src="${
                                movie.Poster !== "N/A"
                                  ? movie.Poster
                                  : "https://via.placeholder.com/300x450?text=No+Poster"
                              }" 
                              alt="${movie.Title}"
                              class="movie-poster"
                             
                          >
                          <div class="movie-info">
                              <h3 class="movie-title">${movie.Title}</h3>
                              <div class="movie-year">${movie.Year}</div>
                          </div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
  }
});
