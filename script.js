const menu = [
    {
        img: '',
        plate: '',
        ingredients: ['',''],
        drink: '',
        type: '',
        price: '',
        diet: '',
    }
    {
        plate: 'Juicy Chicken',
        img: '/img/honeyGarlicChicken.jpg',
        ingredients: ['honey', 'garlic'],
        drink: 'White wine',
        type: 'Asian',
        price: 12,
    },
    {
        plate: 'Curry',
        img: '/img/indianCurry.jpg',
        ingredients: ['rice', 'lamb', 'various spices'],
        drink: 'Milk',
        type: 'Indian',
        price: 14,
    },
    {
        plate: 'Mussels',
        img: '/img/Mussels.jpg',
        ingredients: ['chips', 'cream', 'garlic'],
        drink: 'White wine',
        type: 'Belgian',
        price: 15,
    },
    {
        plate: 'Onion Soup',
        img: '/img/onionSoup.jpg',
        ingredients: ['onions', 'cream', 'pepper'],
        drink: 'Dark beer',
        type: 'French',
        price: 8,
    },
    {
        plate: 'Picanha Steak',
        img: '/img/picanha.jpg',
        ingredients: ['chips', 'manioc', 'butter'],
        drink: 'Red wine',
        type: 'Brazilian',
        price: 32,
    },
    {
        plate: 'Pizza',
        img: '/img/pizza.jpg',
        ingredients: ['tomatoes', 'cheese', 'oregano'],
        drink: 'Beer',
        type: 'Italian',
        price: 10,
    },
    {
        plate: 'Quiche Lorraine',
        img: '/img/quiche.jpg',
        ingredients: ['eggs', 'broccoli', 'milk'],
        drink: 'Rosé wine',
        type: 'French',
        price: 7,
    },
    {
        plate: 'Tomahawk Steak',
        img: '/img/tomahawk.jpg',
        ingredients: ['chips', 'parsley', 'butter'],
        drink: 'Red wine',
        type: 'Brazilian',
        price: 25,
    },
]

const main = document.createElement('main')
document.body.appendChild(main)
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
    
    main.appendChild(figure)
    figure.appendChild(image)
    figure.appendChild(plate)
    figure.appendChild(drink)
    figure.appendChild(price)
    figure.appendChild(list)

}





