
let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
let word = document.querySelector('#search-bar');
console.log(word.value);
let url = "http://recipepuppyproxy.herokuapp.com/api/?q=";

fetch(url + word.value)
  .then(
    function(response) {
      response.json().then(function(data) {
        let recipe = '';
        console.log(data.results);

        for (let i = 0; i < data.results.length; i++) {
          let idk = document.getElementById('idk');

          recipe += `
            <div class="recipe">
              <p>Title: ${data.results[i].title}</p>
              <p>Ingredients: ${data.results[i].ingredients}</p>
              <a href="${data.results[i].href}">Recipe Link</a>
              <br>
              <img src="${data.results[i].thumbnail || "http://via.placeholder.com/110x80"}" alt="recipe image">
            </div>
          `;

          idk.innerHTML = recipe
        }
        // closing for for loop

        // eventListener was here, moved to top

        })
        // closing for eventlistener and its anon. function

      })
      // closing for second .then and function(data)
    });
    // closing for first .then and function(response)
