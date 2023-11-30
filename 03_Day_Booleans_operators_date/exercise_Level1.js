// Exeercise Level 1

/*
1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
    i. Write three JavaScript statement which provide truthy value.
    ii. Write three JavaScript statement which provide falsy value.
5.  Use the Date object to do the following activities
    i. What is the year today?
    ii. What is the month today as a number?
    iii. What is the date today?
    iv. What is the day today as a number?
    v. What is the hours now?
    vi. What is the minutes now?
    vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.

    */

//1 
    let firstName = 'ridwan';
    let lastName = 'adesina';
    let country = 'nigeria';
    let city = 'lagos';
    let age = 12;
    let isMarried = false;
    let date = new Date();
    let year = date.getFullYear();
    
    console.log(typeof(firstName)); // string
    console.log(typeof(lastName)); // string
    console.log(typeof(country)); // string
    console.log(typeof(city)); // lagos
    console.log(typeof(age)); // number
    console.log(typeof(isMarried)); // boolean
    console.log(typeof(year)); // number

//2 
console.log(typeof('10') == typeof(10)); // false;

//3
console.log(typeof(parseInt('9.8')) == typeof(10)); //true

//4i
console.log(4 > 0); // true
console.log(typeof('friends') == typeof('enemies')); //true
console.log(!false); //true

//4ii
console.log(!true); //false
console.log(12 !== 12); //false
console.log(5 == 2); //false

//5i
let today = new Date();
console.log(today.getFullYear());

//5ii
console.log(today.getMonth());

//5iii
console.log(today.toLocaleDateString());

//5iv
console.log(today.getDate());

//5v
console.log(today.getHours());

//5vi
console.log(today.getMinutes());

//5vii
console.log(today.getTime());



