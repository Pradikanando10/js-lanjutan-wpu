$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=44465a5f&s=" + $(".input-keyword").val(),
    success: (result) => {
      // console.log(result);
      const movies = result.Search;
      // console.log(movies);
      let cards = "";
      movies.forEach((movie) => {
        cards += showCard(movie);
      });
      $(".movie-container").html(cards);

      // ketika detail di klik
      $(".modal-detail-button").on("click", function () {
        //   console.log($(this).data("imdbid"));
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=44465a5f&i=" +
            $(this).data("imdbid"),
          success: (movie) => {
            const movieDetail = showMovieDetail(movie);
            $(".modal-body").html(movieDetail);
          },
          error: () => {
            // jika error
            console.log(e.responseText);
          },
        });
      });
    },
    error: () => {
      // jika error
      console.log(e.responseText);
    },
  });
});

function showCard(movie) {
  return `<div class="col-md-4 my-5">
            <div class="card">
              <img src="${movie.Poster}" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">${movie.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(movie) {
  return `<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
              <img src="${movie.Poster}" alt="" class="img-fluid" />
            </div>
            <div class="col-md">
              <ul class="list-group">
                <li class="list-group-item"><h4>${movie.Title} (${movie.Year})</h4></li>
                <li class="list-group-item">
                  <strong>Director: </strong>${movie.Director}
                </li>
                <li class="list-group-item">
                  <strong>Acktor: </strong>${movie.Actors}
                </li>
                <li class="list-group-item">
                  <strong>Writer: </strong>${movie.Writer}
                </li>
                <li class="list-group-item">
                  <strong>Plot: </strong><br />${movie.Plot}
                </li>
              </ul>
            </div>
          </div>
        </div>`;
}
