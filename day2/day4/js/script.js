const gender = ["male", "female", "other"]
// accessing array element with indexing
console.log(places[0])
console.log(places[1])
console.log(places[3])

// since array is an object so we can define it using array()
let lakes = new Array("Phewa", "begnas", "Rara" , "tilicho")

// array properties and methods
// properties

// length - return the length of an array
// example
console.log(places.length)
console.log(gender.length)

//methods
//1.push - append an element in an array
//example
let days =["Sunday","Monday"]
console.log(days)
days.push(days)
days.push("Tuesday")
console.log(days)
days.push("wednesday")
console.log(days)

//2.pop - removes last index element from an array
let capital = ["Kathmandu","New Delhi","Beijing","Dhaka"]
console.log(capital)
capital.pop()
console.log(capital)
capital.pop()
console.log(capital)

//3.shift() - removes element of first index
let movies = ["Animal","jyoti","sana","Krish"]
console.log("Shift Example")
console.log(movies)
console.shift()
console.log(movies)
movies.shift()
console.log(movies)

//4.unshift() - add an element at the beginning of the array
let king
