const gender = ["male", "female", "other"]

// console.log(places[1])
// console.log(places[3])

// since array is an object so we can define it using array()
let lakes = new Array("Phewa", "begnas", "Rara" , "tilicho")

// array properties and methods
// properties

// length - return the length of an array
// example
// console.log(places.length)
// console.log(gender.length)

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

console.log(movies)
movies.shift()
console.log(movies)

//4.unshift() - add an element at the beginning of the array
let kings =["Mahender", "Birendra", "Gyanendra"]
console.log("Unshift Example")
kings.unshift("Prithvi")
console.log(kings)
kings.unshift("Gehendra")
console.log(kings)

// 5.splice() - add and/or remove element from specified index
let languages = ["java", "javascript", "php"]

// this method takes 3 arguments
// 1st - position
// 2nd - number elements want to remove
// 3rd - elements can be more then one

// to add element - set 2nd argument 0
console.log(languages)
languages.splice(1, 0, "python")

// to remove element - set 2nd argment greater than 0
console.log(languages)
languages.splice(1, 1, "Dart")
console.log(languages)
languages.splice(2, 1, "Ruby")
console.log(languages)

// 6. slice() - to break array into another piece
console.log("slice example")
let province = ["bagmati", "Koshi" , "sudar paschin", "Karnali"]
let province_two = province.slice(0,2)
console.log(province)
console.log(province_two)
console.log(province_three)

//7. concat - to  merge one or more 
