import $ from 'jquery';


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
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${that.genre}&with_runtime.lte=${that.runtime}&include_null_first_air_dates=false`;
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
  //   })
  //   $.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${this.genre}&with_runtime.lte=${this.runtime}&include_null_first_air_dates=false`)
  //     .then(function (response) {
  //       this.results = [];

  //       for (let i = 0; i < response.results.length; i++) {
  //         this.results.push(response.results[i].name);
  //       }

  //     })
  //     .fail(function () {

  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     });
  // }
