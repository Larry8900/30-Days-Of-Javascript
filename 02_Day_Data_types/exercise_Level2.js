// Exercise: Level 2
/* 

1. Using console.log() print out the following statement:
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
2. Using console.log() print out the following quote by Mother Teresa:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. I hope this course is not full of jargon. Check if jargon is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10. Access the 'JavaScript' string characters using a random number.
11. Use console.log() and escape characters to print the following pattern.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

*/



// Exercise 1
const quote = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Homes teaches us to help one another. ";
console.log(`The quote ${quote}`);

//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." `);

//3
let num = '10';
typeof(num) === typeof(10) ? console.log('they are exaxtly equal')
:num = parseInt(num);
console.log(typeof(num) === typeof(10)); //true


// const number = parseInt(num);
// const number10 = 10;
// console.log(typeof(number), typeof(number10));

//4
let floatNum = parseFloat('9.8');
floatNum === 10? console.log('parsefloat(9.8) is equal 10')
: console.log('float 9.8 is not equal 10') // parseFloat('9.8) is not equal to 10
floatNum = Math.ceil((floatNum));
console.log(floatNum === 10); //true

//5
const Python = 'python';
const jargon = 'jargon';
console.log(Python.includes('on'), jargon.includes('on')); // true true

//6 
let jargons = 'i hope this course i snot full of jargon';
console.log(jargons.includes(jargon)); //true

//7 
const randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

//8
const number50 = 50;
const random = number50 + Math.floor(Math.random()* 51)
console.log(random);

//9
const randNum = Math.floor(Math.random()* 256);
console.log(randNum);

//10
const strng = 'Javascript';
const strngArray = strng.split('');
const strngNum = strng.length;
const randStringNum = Math.floor(Math.random()* strngNum);
console.log(randStringNum);
console.log(strngArray[randStringNum]);

//11
let num1 = 1;
let num2 = 2;
console.log(num1, num1, num1, num1, num1);
console.log(num2, num1,num2,num2 *2, num2 )


//12
let sentence = 'You cannot end a sentence with because because because is a conjuction';
console.log(sentence.substr(31, 24))

