const menu = [
    {
        plate: 'Salmon Fillet',
        ingredients: ['broccoli', 'rice'],
        drink: 'white wine',
        type: '30+ min.',
    },
]
const form = document.createElement("form");
const label = document.createElement('label')
const input = document.createElement('input')
const button = document.createElement('button')
label.setAttribute("for", "search")
input.setAttribute("type", "text")
input.setAttribute("id", "search")
button.textContent = 'search'

document.body.appendChild(form)

form.appendChild(label)
form.appendChild(input)
form.appendChild(button)

