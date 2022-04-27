const menu = [
    {
        plate: 'Juicy Chicken',
        img: './img/honeyGarlicChicken.jpg',
        ingredients: ['honey', 'garlic'],
        drink: 'White wine',
        type: 'Asian',
        price: 12,
    },
    {
        plate: 'Curry',
        img: './img/indianCurry.jpg',
        ingredients: ['rice', 'lamb', 'various spices'],
        drink: 'Milk',
        type: 'Indian',
        price: 14,
    },
    {
        plate: 'Mussels',
        img: './img/Mussels.jpg',
        ingredients: ['chips', 'cream', 'garlic'],
        drink: 'White wine',
        type: 'Belgian',
        price: 15,
    },
    {
        plate: 'Onion Soup',
        img: './img/onionSoup.jpg',
        ingredients: ['onions', 'cream', 'pepper'],
        drink: 'Dark beer',
        type: 'French',
        price: 8,
    },
    {
        plate: 'Picanha Steak',
        img: './img/picanha.jpg',
        ingredients: ['chips', 'manioc', 'butter'],
        drink: 'Red wine',
        type: 'Brazilian',
        price: 32,
    },
    {
        plate: 'Pizza',
        img: './img/pizza.jpg',
        ingredients: ['tomatoes', 'cheese', 'oregano'],
        drink: 'Beer',
        type: 'Italian',
        price: 10,
    },
    {
        plate: 'Quiche Lorraine',
        img: './img/quiche.jpg',
        ingredients: ['eggs', 'broccoli', 'milk'],
        drink: 'Rosé wine',
        type: 'French',
        price: 7,
    },
    {
        plate: 'Tomahawk Steak',
        img: './img/tomahawk.jpg',
        ingredients: ['chips', 'parsley', 'butter'],
        drink: 'Red wine',
        type: 'Brazilian',
        price: 25,
    },
]

let menuIndex = 0;

function displayMenu(){
    for (const meal of menu) {

    /* Declaring the constants */
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const plate = document.createElement('h2');
        const drink = document.createElement('h3');
        const type = document.createElement('p');
        const price = document.createElement('h4')
        const list = document.createElement('ul');

    /* Connecting the correct content to the correct constant */
        image.src = meal.img
        plate.innerHTML = meal.plate
        drink.innerHTML = meal.drink
        type.innerHTML = meal.type
        price.innerHTML = meal.price

        for (let item of meal.ingredients) {
            let food = document.createElement('li');
            food.innerText = item
            list.appendChild(food);
        }
        
        document.querySelector("main").appendChild(figure)
        figure.appendChild(image)
        figure.appendChild(plate)
        figure.appendChild(drink)
        figure.appendChild(price)
        figure.appendChild(list)

        //adding a "add to cart" button
        let addButton = document.createElement("div");
        addButton.innerHTML = "Add to Cart";
        figure.appendChild(addButton);
        addButton.setAttribute("class", "AddToCart");
        addButton.classList.add(menuIndex);
        menuIndex++;
    }
}

displayMenu();


//switch between dark and light mode
// function darkMode(e)
// {
//     if(e.target.value === "dark"){
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//     }
//     else {
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }
// }

//dark mode
// document.querySelector("select").addEventListener("change", darkMode);


var cartContent = [];

//event function which adds article to cart and iterates over cartcount
function addToCart(e)
{
    let cartCount = document.querySelector(".cartCount")
    console.log(cartCount)
    cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
    //e.target.classlist[1] stores the index of the meal in menu
    cartContent.push(e.target.classList[1]);
    console.log(cartContent);
}

//shows a new page without loading a new one with cart content when clicking on the cart icon
function displayCart()
{
    if(document.querySelector("main").style.visibility !== "hidden")
    {
        document.querySelector("main").style.visibility = "hidden";
        document.body.insertBefore(document.createElement("section"))
    }
}


//cart manager

for (const addable of document.querySelectorAll(".AddToCart"))
{
    addable.addEventListener("click", addToCart);
}
document.querySelector("#cart").addEventListener("click", displayCart);









// //display the filtering blocks and the search bar when clicking on "filter"
function displayFilters(e)
{
    filterDiv = document.querySelector("#filterDiv");
    dynamicDiv = document.createElement("div");

    filterDiv.appendChild(dynamicDiv);
    let filter1 = document.createElement("p");
    let filter2 = document.create("p");
    let searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search...";
    dynamicDiv.appendChild(filter1);
    dynamicDiv.appendChild(filter2);
    dynamicDiv.appendChild(searchBar);
}

// //display the different dishes that correspond to the research when searching with search bar
// function searchDishes()
// {

// }

// //displays the dishes corresponding to the filters
// function filter()
// {

// }







// //filters
// document.querySelector("#filterDisplay").addEventListener("click", displayFilters);
// document.querySelector("#search").addEventListener("keyup", searchDishes);
// document.querySelectorAll("#filterBlock").addEventListener("click", filter);
