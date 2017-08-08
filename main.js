

fetch("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
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
    `
    // if (data.results[i].thumbnail === " ") {
    //   let data.results[i].thumbnail = "http://via.placeholder.com/350x150";
    // }
idk.innerHTML = recipe
  };
})

});

let searchButton = document.getElementById('search-button');
searchButton.addEventListener('click',callBack);
function callback(){

}

  // .includes will let you search for one word out of a string (maybe)

// href: "http://www.recipezaar.com/Baked-Omelet-With-Broccoli-Tomato-325014"
// ingredients
// :
// "milk, cottage cheese, broccoli, cheddar cheese, basil, onion powder, eggs, garlic powder, roma tomato, salt"
// thumbnail
// :
// "http://img.recipepuppy.com/123889.jpg"
// title
// :
// "Baked Omelet With Broccoli &amp; Tomato"
