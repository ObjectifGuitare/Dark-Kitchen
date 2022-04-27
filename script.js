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

for (let meal of menu) {

/* Declaring the constants */
const main = document.querySelector('main');
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

    main.appendChild(figure)
    figure.appendChild(image)
    figure.appendChild(plate)
    figure.appendChild(drink)
    figure.appendChild(price)
    figure.appendChild(diet)
    figure.appendChild(list)
}




