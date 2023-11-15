// Exercise 1
const quote = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Homes teaches us to help one another. ";
console.log(`The quote ${quote}`);

//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." `);

//3
const num = '10';
const number = parseInt(num);
const number10 = 10;
console.log(typeof(number), typeof(number10));

//4
const floatNum = '9.8';
const floatRoundUp = Math.ceil(Number(floatNum));
console.log(floatRoundUp);

//5
const Python = 'python';
const jargon = 'jargon';
console.log(Python.includes('on'), jargon.includes('on')); // true

//6 
let jargons = 'i hope this course i snot full of jargon';
console.log(jargons.includes(jargon)); //true

//7 
const randomNum = Math.round(Math.random() * 101);
console.log(randomNum);

//8
const number50 = 50;
const random = Math.floor(Math.random()* 51)
console.log(number50 + random);

//9
const randNum = Math.floor(Math.random()* 256);
console.log(randNum);

//10
const strng = 'Javascript';
const strngArray = strng.split('');
const strngNum = strng.length;
const randStringNum = Math.ceil(Math.random()* strngNum);
console.log(strngArray[randStringNum]);

//11
let num1 = 1;
let num2 = 2;
console.log(num1, num1, num1, num1, num1);
console.log(num2, num1,num2,num2 *2, num2 )


//12
let sentence = 'You cannot end a sentence with because because because is a conjuction';
console.log(sentence.substr(31, 24))

