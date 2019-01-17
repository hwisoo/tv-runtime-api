import $ from 'jquery';
import { API_KEY } from '../.env';
export class SearchMovie {
  constructor(runtime, genre) {
    this.runtime = runtime;
    this.genre = genre;
    this.results = [];
   
  }
  GetNameList() {
    let that = this;
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${that.genre}&with_runtime.lte=${that.runtime}&include_null_first_air_dates=false`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  GetDetails(id) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  
}
