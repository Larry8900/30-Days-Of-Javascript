// Exercise LEvel 3

/*
1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
2.  Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/

// Exercise 1;

const loveWord = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
const repeatedWord = loveWord.match(/love/gi);

console.log(repeatedWord.length); // gives 3

// 2
const sentence = 'You cannot end a sentence with because because because is a conjuction';
const repeatedArray = sentence.match(/because/gi);
console.log(repeatedArray.length); // 3

//3 

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const nonWordCharacters = (sentences.replace(/\W/g,' '));
console.log(nonWordCharacters.trim(''));

//4
const word = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const extractedNumbers = word.match(/\d+/g);
console.log(extractedNumbers); // ['5000', 10000, '15000']

function add(a){
    let number = 0
    
        // turn each string to number
        let num1 = parseInt(a[0] * 12);
        let num2 = parseInt(a[1]);
        let num3 = parseInt(a[2]*12);
        number = num1 + num2 + num3;
    
    console.log(number); // 250000
};
add(extractedNumbers)

// Level 3 Exercise 4 was a tricky one but i got it figured out lol..
