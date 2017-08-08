
fetch("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
  .then(
    function(response) {
      response.json().then(function(data) {
        console.log(data);
        display(data);
      });
    }
  )

  function display(data){



let idk = document.getElementById('idk');

    let recipe = `
    <div class="recipe">
      <p>title: ${data.results[0].title}</p>
      <p>ingredients: ${data.results[0].ingredients}</p>
      <a href="${data.results[0].href}">Recipe Link</a>
      <br>
      <img src="${data.results[0].thumbnail}" alt="recipe image">
    </div>
    `
idk.innerHTML = recipe;
  };

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
