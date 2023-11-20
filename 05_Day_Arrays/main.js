// Exercise Level 2

/*

1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

2. First remove all the punctuations and change the string to array and count the number of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13
3. In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
        i. add 'Meat' in the beginning of your shopping cart if it has not been already added
        ii. add Sugar at the end of you shopping cart if it has not been already added
        iii. remove 'Honey' if you are allergic to honey
        iv. modify Tea to 'Green Tea'

4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

6. Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    console.log(fullStack)
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

 */


//1
const webTechs = require('./web_techs');
const countries = require('./countries');

console.log(webTechs,countries);

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let word = (text.split(' '))
console.log(word);
console.log(word.length) //13

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


    //3i
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);

    //3ii
    shoppingCart.push('Sugar');
    console.log(shoppingCart);

    //3iii
    shoppingCart.splice(4,1);
    console.log(shoppingCart)

    //3iv
    shoppingCart[3] = 'Green Tea';
    console.log(shoppingCart);

//4
countries.includes('Ethiopia') ? console.log('ETHIOPIA')
: countries.push('Ethiopia');

//5
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess')
: webTechs.push('Sass') ;
console.log(webTechs);

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(frontEnd.concat(backEnd))



