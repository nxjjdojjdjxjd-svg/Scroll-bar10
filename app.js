const name ="Bakyt"
let age = 14
let online = false 
let user = {
    name: "Bakyt",
    age: 14,
    online: false
}

console.log(name, typeof name)
console.log(age, typeof age )
console.log(online, typeof online )
console.log(user, typeof user)

let phone ={ 
    brand: "Sm  Galaxy",
    model: "s24",
    price: 50000
}

console.log (`Телефон: ${phone.brand} ${phone.model}, цена ${phone.price} сом `)


let book = {
    title: "Мастер и Маргарита",
    author: "Михайил Булгаков",
    year: 1967
}

console.log(`Книга ${book.title}, автор: ${book.author}, год: ${book.year} `)


let student = {
  name: "Асан",
  grade: 5,
  subject: "Математика"
}

console.log(`Студент ${student.name}  получил ${student.grade} по предмету ${student.subject}`)


let car =  {
    brand:"Toyota",
    model:"camry 55",
    year:2020,
    ONWNER: {
        name:"Айбек",
        age:30
    }
}

console.log(`Машина: ${car.brand} ${car.model}, год: ${car.year}, владелец: ${car.ONWNER.name} ${car.ONWNER.age}  `)
//  first books
// let books = {
//     title: " JBE Books",
//     pages: 21450,
//     availeble:"no"
// }

// console.log(`много страничная книга:  ${books.title} его страница состовляет ${books.pages}. это доступная книга в библотеке ${books.availeble} `)


// two books
let title = "Harry Potter";
let pages = 500;
let available = true;

let Books = {
  title: title,
  pages: pages,
  available: available
};
console.log(title, typeof title);
console.log(pages, typeof pages);
console.log(available, typeof available);
console.log(Books, typeof Books);
//  first city

let city = {
  names: "Paris",
  country: "France",
  population: 2160000,
  area: 105.4,
  founded: "3rd century BC",
  isCapital: true
};

console.log(city);

// two citys

let citys = {
  name: "Paris",
  country: "France",
  population: 2160000,
  area: 105.4,
  founded: "3rd century BC",
  isCapital: true
};

console.log(`город: ${citys.name}  в каом кантиненте ${citys.country}  популяция ${citys.population} площадь города ${citys.area} вот это время было основона ${citys.founded } он является столцей ${citys.isCapital}`)

//  first movie
let movie = {
  title: " The Fast and the Furious",
  year: 2001,
  genre: "ORIGINAL ",
  rating: 8.8,
  country: "USA",
  duration: 148
};
 
console.log(movie);
//  two movie
let movies = {
  title: " The Fast and the Furious",
  year: 2001,
  genre: "ORIGINAL ",
  rating: 8.8,
  country: "USA",
  duration: 148
};
 
console.log(`фильм ${movies.title} вэтом году вышел фильм ${movies.year} в этом студие вышел фильм ${movies.genre}  райтинг по всему миру ${movies.rating} в эмом континенте был процес съемки ${movies.country}`);
// first actor
let actor = {
  name: "Vin Diesel",
  age: 56,
  moviesCount: 60,
  country: "USA",
  awards: "MTV Movie Awards",
  activeYears: "1990-present"
};

console.log(actor);
// two actors
let actors = {
  name: "Vin Diesel",
  age: 56,
  moviesCount: 60,
  country: "USA",
  awards: "MTV Movie Awards",
  activeYears: "1990-present"
};

console.log(`${actors.name} жто почти самый популярный актер из США ему ${actors.age} у него было снята фильмов ${actors.moviesCount} он живет в ${actors.country} и в компание ${actors.awards} он свойю кареру начил в ${actors.activeYears}`);