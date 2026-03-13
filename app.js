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