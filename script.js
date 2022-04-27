let cartContent = [];
let isDark = 0;
const menu = [
    {
        img: 'images/loadedNachos.jpg',
        plate: 'Loaded Nachos',
        ingredients: ['nachos','guacamole', 'salsa', 'cheese'],
        drink: 'beer',
        type: 'Chicken-meal',
        price:17.50,
        diet: 'Fast-food',
    },
    {
        img: 'images/paella.jpg',
        plate: 'Paella',
        ingredients: ['rice','shrimp', 'mussels', 'vegetables'],
        drink: 'White wine',
        type: 'Seafood',
        price: 21.50,
        diet: 'Luxury',
    },
    {
        img: 'images/mussels.jpg',
        plate: 'Mussels & Chips',
        ingredients: ['mussels', 'cream', 'chips'],
        drink: 'White wine',
        type: 'Seafood',
        price: 23.50,
        diet: 'Luxury',
    },
    {
        img: 'images/potatoSoup.jpg',
        plate: 'Sweet Potato Soup',
        ingredients: ['sweet potato','garlice', 'butter'],
        drink: 'Red wine',
        type: 'Vegetarian',
        price:11.50 ,     
        diet: 'Comfort',
    },
    {
        img: 'images/ribs.jpg',
        plate: 'BBQ Ribs',
        ingredients: ['pork ribs',' barbecue sauce', 'chips'],
        drink: 'Beer',
        type: 'Red meat',
        price: 19.50,
        diet: 'Comfort',
    },
    {
        img: 'images/picanha.jpg',
        plate: 'Picanha',
        ingredients: ['Brazilian picanha','manioc', 'mushroom'],
        drink: 'White wine',
        type: 'Red meat',
        price: 26.50,
        diet: 'Luxury',
    },
    {
        img: 'images/pizza.jpg',
        plate: 'Pizza',
        ingredients: ['tomato','cheese','pineapple','mushroom'],
        drink: 'Soda',
        type: 'Vegetarian',
        price: 12,
        diet: 'Fast-food',
    },
    {
        img: 'images/salmonSalad.jpg',
        plate: 'Smoked Salmon Salad',
        ingredients: ['smoked salmon','lettuce','avocado'],
        drink: 'Rose wine',
        type: 'Seafood',
        price: 15,
        diet: 'Healthy',
    },
    {
        img: 'images/caeserSalad.jpg',
        plate: 'Caeser Salard',
        ingredients: ['chicken','tomato', 'lettuce', 'croutons'],
        drink: 'White wine',
        type: 'Chicken-meal',
        price: 14.50,
        diet: 'Healthy',
    },
    {
        img: 'images/carbonnara.jpg',
        plate: 'Carbonnara',
        ingredients: ['pasta','egg', 'cured pork', 'cheese'],
        drink: 'Red wine',
        type: 'Red meat',
        price: 15.50,
        diet: 'Comfort',
    },
    {
        img: 'images/wagyuBurger.jpg',
        plate: 'Wagyu Burger',
        ingredients: ['wagyu beef','lettuce', 'red onion', 'mustard'],
        drink: 'Red wine',
        type: 'Red meat',
        price: 31.5,
        diet: 'Luxury',
    },
    {
        img: 'images/fishChips.jpg',
        plate: 'Fish and Chips',
        ingredients: ['haddock','chips', 'tartar', 'lemon'],
        drink: 'Beer',
        type: 'Seafood',
        price: 16,
        diet: 'Comfort',
    }
]

//displays the given array in the given section
function displayMenu(arr, tag){
    let menuIndex = 0;
    for (const meal of arr) {

    /* Declaring the constants */
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const plate = document.createElement('h2');
        const drink = document.createElement('h3');
        const type = document.createElement('p');
        const price = document.createElement('h4');
        const diet = document.createElement('h5');
        const list = document.createElement('ul');

    /* Connecting the correct content to the correct constant */
        image.src = meal.img
        plate.innerHTML = meal.plate
        drink.innerHTML = meal.drink
        type.innerHTML = meal.type
        price.innerHTML = meal.price
        diet.innerHTML = meal.diet

        for (let item of meal.ingredients) {
            let food = document.createElement('li');
            food.innerText = item
            list.appendChild(food);
        }
        
        document.querySelector(tag).appendChild(figure)
        figure.appendChild(image)
        figure.appendChild(plate)
        figure.appendChild(drink)
        figure.appendChild(price)
        figure.appendChild(diet)
        figure.appendChild(list)

        //adding a "add to cart" button
        let addButton = document.createElement("div");
        addButton.innerHTML = "Add to Cart";
        figure.appendChild(addButton);
        addButton.setAttribute("class", "AddToCart");
        addButton.classList.add(menuIndex);
        //     span.className = 'glyphicon glyphicon-shopping-cart' ------- add to cart image
        menuIndex++;
    }
}
displayMenu(menu, "main");


function darkMode(e)
{
    if(!isDark){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        isDark = 1;
        e.target.innerText = "Dark mode";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isDark = 0;
        e.target.innerText = "Light mode";
    }
}
document.querySelector(".mode").addEventListener("click", darkMode);


//event function which adds meal index to cartContent and iterates over cartcount
function addToCart(e)
{
    let cartCount = document.querySelector(".cartCount")
    console.log(cartCount)
    cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
    //e.target.classlist[1] stores the index of the meal in menu
    cartContent.push(e.target.classList[1]);
    console.log(cartContent);
}

//array which takes CartContent and transforms it into the actual meal choices
function Choices()
{
    let choices = [];
    for (let i of cartContent)
    {
        choices.push(menu[i]);
    }
    return choices;
}

//shows a new page without loading a new one with cart content when clicking on the cart icon
function displayCart()
{
    if(document.querySelector("main").style.display !== "none" && cartContent[0])
    {
        document.querySelector("main").style.display = "none";
        document.body.insertBefore(document.createElement("section"), document.querySelector("nav").nextSibling);
        console.log(Choices());
        displayMenu(Choices(), "section");
        //still need to display price
    }
}

//cart manager
for (const addable of document.querySelectorAll(".AddToCart"))
{
    addable.addEventListener("click", addToCart);
}
document.querySelector("#cart").addEventListener("click", displayCart);


// //display the different dishes that correspond to the research when searching with search bar
// function searchMeal()
// {

// }

// //displays the dishes corresponding to the filters
// function filter()
// {

// }




   





// //display the filtering blocks and the search bar when clicking on "filter"
function displayFilters(e)
{
    if(!(document.querySelector("input")))
    {
        filterDiv = document.querySelector("#filterDiv");
        dynamicDiv = document.createElement("div");
        filterDiv.appendChild(dynamicDiv);

        let filter1 = document.createElement("p");
        let filter2 = document.createElement("p");
        let searchBar = document.createElement("input");
        searchBar.type = "text";
        searchBar.placeholder = "Search...";
        dynamicDiv.appendChild(searchBar);
        dynamicDiv.appendChild(filter1);
        dynamicDiv.appendChild(filter2);
        filter1.setAttribute("class", "healthy");
        filter2.setAttribute("class", "french");
        filter1.addEventListener("click", filter);
        filter2.addEventListener("click", filter);
        searchBar.addEventListener("keyup", searchMeal);
    }
}

document.querySelector("#filterSpan").addEventListener("click", displayFilters);
