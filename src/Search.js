import { API_KEY } from '../.env';
export class SearchMovie {
  constructor(runtime, genre) {
    this.runtime = runtime;
    this.genre = genre;
    this.results = [];

  }
  GetNameList() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url = "";
      if (this.genre == 16) {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${this.genre}&with_runtime.lte=${this.runtime}&include_null_first_air_dates=false`
      } else {
        url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${this.genre}&with_runtime.lte=${this.runtime}&without_genres=16&include_null_first_air_dates=false`;
      }
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
    return new Promise((resolve, reject) => {
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
  GetRandom() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let pgNumber = Math.floor(Math.random() * 30);
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pgNumber}&timezone=America%2FNew_York&with_genres=${this.genre}&with_runtime.lte=${this.runtime}&include_null_first_air_dates=false`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }

}
