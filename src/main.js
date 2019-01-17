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
        $("#name").append("<li> Name: " + body.results[i].name + '</li>');
        $("#id").append("<li class='id'> Id: " + body.results[i].id + '</li>');
      }
    })
  })
})