
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function () {

  $("#userForm").submit(function (event) {
    event.preventDefault();
    let minutes = $('#minutes').val();
    let genre = $('select#genre').val();



    $.ajax({
      url: `https://api.themoviedb.org/3/discover/tv?api_key=APIKEY&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genre}&with_runtime.lte=${minutes}&include_null_first_air_dates=false`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function (response) {
        for (let i = 0; i < response.results.length; i++) {
          $("#name").append("<li>" + response.results[i].name + '</li>');
          $("#id").append("<li>" + response.results[i].id + '</li>');
        }
      },
      error: function () {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });


  })
})
