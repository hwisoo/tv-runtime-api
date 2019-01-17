import { SearchMovie } from './Search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import tvIcon from './images/oldTV.png';

let tvElement = document.getElementById("tvicon");
tvElement.src = tvIcon;

$(document).ready(function () {

  $("#userForm").submit(function (event) {
    event.preventDefault();
    $("#name").empty();
    $("#id").empty();

    let minutes = $('#minutes').val();
    let genre = $('select#genre').val();
    let newSearch = new SearchMovie(minutes, genre);
    let promise = newSearch.GetNameList();

    promise.then(function (response) {
      let body = JSON.parse(response);
      for (let i = 0; i < body.results.length; i++) {
        $("#name").append(`<li class= ${body.results[i].id}>${body.results[i].name}</li>`);
      }
      $("li").click(function (event) {
        $("#details").empty();
        $("#details").show();
        let id = this.getAttribute("class");
        let detailsPromise = newSearch.GetDetails(id);
        detailsPromise.then(function (response) {
          let body = JSON.parse(response);


          $("#details").append(`<img class='img-thumbnail' src='https://image.tmdb.org/t/p/original/${body.backdrop_path}' alt = 'pic'>`);
          $("#details").append(`<h4>${body.name}</h4>`);
          $("#details").append(`<p>Number of seasons: ${body.number_of_seasons}</p>`);
          $("#details").append(`<p>Number of episodes: ${body.number_of_episodes}</p>`);
          $("#details").append(`<p id='description'>Description: ${body.overview}</p>`);
          $("#details").append(`<p>Episode runtime: ${body.episode_run_time[0]}</p>`);


        })

      })
    })


  })

})