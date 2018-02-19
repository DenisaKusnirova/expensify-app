// OBJECT DESTRUCTURING:

const person = {
  name: 'Denisa',
  age: 22,
  location: {
    city: 'Kosice',
    temp: 3
  }
}

// DESTRUCTURING - makes code more readable & simple
//               - gives an ability to set up a default value
//                 (if there's no name, set it up like that: name = 'Andrej')
//               - can also give an ability to rename the variable (temp: temperature)
//               - we can also do both: {name: firstName = 'Andrej', age}


// on the left side- variable type we try to create
// on the right- object we want to destructure

const {name: firstName = 'Andrej', age} = person
console.log(`${firstName} is ${age}.`)

const {city, temp: temperature} = person.location
if (person.location.city && person.location.temp) {
  console.log(`It's ${temperature} in ${city} `)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);

// ARRAY DESTRUCTURING:
// - no renaming syntax, you can pick whatever name you like
// - gives an ability to set up a default value

const address = ['Stefanikova 5068', 'KE', 'Slovakia', '40010']
const [ , , state = 'New York'] = address
console.log(`You are in ${state}`)

const menu = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [beverageType, , mediumPrice, ,] = menu
console.log(`A medium ${beverageType} costs ${mediumPrice}`)
