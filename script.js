const menu = [
    {
        plate: 'Salmon Fillet',
        ingredients: ['broccoli', 'rice'],
        drink: 'white wine',
        type: '30+ min.',
    },
]

//switch between dark and light mode
function darkMode(e)
{
    if(e.target.value === "dark"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

var cartContent;

//event function which adds article to cart and iterates over cartcount
function addToCart(e)
{
    let cartCount = document.querySelector("#cart").children[0];
    cartCount.innerHTML = Number(cartCount.innerHTML) + 1;
    //^^^or use another global variable to store cart count
    cartContent.push(e.target.class);
}

//shows a new page without loading a new one with cart content when clicking on the cart icon
function displayCart()
{

}

//display the filtering blocks and the search bar when clicking on "filter"
function displayFilters()
{

}

//display the different dishes that correspond to the research when searching with search bar
function searchDishes()
{

}

//displays the dishes corresponding to the filters
function filter()
{

}

//dark mode
document.querySelector("select").addEventListener("change", darkMode);

//cart manager
document.querySelectorAll(".AddToCart").addEventListener("click", addToCart);
document.querySelector("#cart").addEventListener("click", displayCart);

//filters
document.querySelector("#filterDisplay").addEventListener("click", displayFilters);
document.querySelector("#search").addEventListener("keyup", searchDishes);
document.querySelectorAll("#filterBlock").addEventListener("click", filter);