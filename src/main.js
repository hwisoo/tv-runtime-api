import { SearchMovie } from './Search.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

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
      letbody = JSON.parse(response);
      for (let i = 0; i < body.results.length; i++) {
        $("#name").append("<li>" + body.results[i].name + '</li>');
        $("#id").append("<li class='id'>" + body.results[i].id + '</li>');
      }
    })
  })
})



    // promise.then(function (response) {
    //   let body = JSON.parse(response);
    //   console.log(newSearch.results)
    // });


    // for (let i = 0; i < generalObject.results.length; i++) {
    //   $("#name").append("<li>" + generalObject.results[i].name + '</li>');
    //   $("#id").append("<li class='id'>" + generalObject.results[i].id + '</li>');

    // }



  // else {
  //   $('#errors').text("There was an error processing your request. Please try again.");
  // }



  // $.ajax({
  //   url: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genre}&with_runtime.lte=${minutes}&include_null_first_air_dates=false`,
  //   type: 'GET',
  //   data: {
  //     format: 'json'
  //   },
  //   success: function (response) {
  //     if (response.results.length == 0) {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //     for (let i = 0; i < response.results.length; i++) {
  //       $("#name").append("<li>" + response.results[i].name + '</li>');
  //       $("#id").append("<li class='id'>" + response.results[i].id + '</li>');

  //       idList.push(response.results[i].id);
  //     }
  //     console.log(idList);
  //   },
  //   error: function () {
  //     $('#errors').text("There was an error processing your request. Please try again.");
  //   }
  // });



  // for (let i = 0; i < 10; i++) {

  //   $.ajax({
  //     url: `https://api.themoviedb.org/3/tv/${idList[i]}?api_key=${api_key}&language=en-US`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function (response) {
  //       // if (response.results.length == 0) {
  //       //   $('#errors').text("There was an error processing your request. Please try again.");
  //       // }
  //       // for (let i = 0; i < response.results.length; i++) {
  //       //   $("#name").append("<li>" + response.results[i].name + '</li>');
  //       //   $("#id").append("<li>" + response.results[i].id + '</li>');
  //       // }

  //       console.log(response.number_of_episodes, response.number_of_seasons)
  //     },
  //     error: function () {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //   })
  // }
