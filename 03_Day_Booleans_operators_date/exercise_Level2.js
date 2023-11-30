// Exercise Level 2

/*
1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    Enter base: 20
    Enter height: 10
    The area of the triangle is 100

2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    Enter side a: 5
    Enter side b: 4
    Enter side c: 3

    The perimeter of the triangle is 12
3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
7. Compare the slope of above two questions.
8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
9. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    Enter hours: 40
    Enter rate per hour: 28

    Your weekly earning is 1120
10. If the length of your name is greater than 7 say, your name is long else say your name is short.
11. Compare your first name length and your family name length and you should get this output.
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'

    Your first name, Asabeneh is longer than your family name, Yetayeh
12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    let myAge = 250
    let yourAge = 25

    I am 225 years older than you.
13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    
    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years. 
14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    
    Enter number of years you live: 100
    You lived 3153600000 seconds.
15. Create a human readable time format using the Date time object
    i. YYYY-MM-DD HH:mm
    ii. DD-MM-YYYY HH:mm
    iii. DD/MM/YYYY HH:mm

*/

//1
let base = prompt('enter base number');
let height = prompt('enter height number');
let area = 0.5;

let areaOfTriangle = area * base * height;
console.log(`The area of the triangle is ${areaOfTriangle} `);

//2
let sideA = parseInt(prompt('enter side a'));
let sideB = parseInt(prompt('enter side b'));
let sideC = parseInt(prompt('enter side c'));
let perimeter = sideA + sideB + sideC;

console.log(`The perimeter of the triangle is ${perimeter}`);

//3

let length = parseInt(prompt('enter length'));
let width = parseInt(prompt('enter width'));
let area_ = length * width;
let perimeter_ = 2 * (length + width);

console.log(`the area is: ${area_}, and the perimeter is: ${perimeter_}`);

//4 
let radius = parseInt(prompt('enter radius number'));
let pi = (+Math.PI.toFixed(2)) // to 2 decimal places
let area1 = Math.round(pi * radius * radius);
let circumferenceOfCircle = Math.round(2 *(pi * radius));
console.log(area1, circumferenceOfCircle);

//5
//6
// slope = (y2 - y1) / (x2 - x1)
let x1 = 2, x2 = 6, y1 = 2, y2 = 10;
let slope = (y2 - y1)/ (x2 - x1);
console.log(slope) // 2

//7
//8 
// y = x2 + 6x +9 
let x = 3;
let y = (x *x + 6*x + 9);
console.log(y); //49
// to get y value to equal 0 we use x = -3

//9
let hours = parseInt(prompt('enter hours:'));
let rate = parseInt(prompt('enter rate per hour'));

console.log(`Your weekly earning is ${hours * rate}`)

//10
let yourName = prompt('enter your name')
yourName.length > 7 ? console.log('your name is long')
: console.log('your name is short');

//11
let yourFirstName = prompt('enter your first name');
let yourLastName = prompt('enter your last name');
yourFirstName.length > yourLastName ? console.log(`Your first name, ${yourFirstName} is longer than your family name, ${yourLastName}`)
:console.log(`Your family name, ${yourLastName} is longer than your first name, ${yourFirstName}`);

//12
let myAge = 250;
let yourAge = 25;

console.log(`I am ${myAge - yourAge} older than you.`);

//13 
let birthYear = parseInt(prompt('Enter birth year:'));
let presentYear = new Date().getFullYear()
let presentAge = presentYear - birthYear
presentAge > 18 ? console.log(`You are ${presentAge}. You are old enough to drive`)
: console.log(`You are ${presentAge}. You will be allowed to drive after ${18 - presentAge}`);

//14
let yearsLived = parseInt(prompt('Enter number of years you lived:'));
let secondsInYear = 31536000;
console.log(`You lived ${yearsLived * secondsInYear}`);

//15
let presentDate  = new Date();
let year_ = presentDate.getFullYear();
let month_ = presentDate.getMonth();
let day_ = presentDate.getDate();
let hour_ = presentDate.getHours();
let minutes_ = presentDate.getMinutes();

//15i 
console.log(`${year_}-${month_}-${day_} ${hour_}:${minutes_}`);

//15ii
console.log(`${day_}-${month_}-${year_} ${hour_}:${minutes_}`);

//15iii
console.log(`${day_}/${month_}/${day_} ${hour_}:${minutes_}`);
