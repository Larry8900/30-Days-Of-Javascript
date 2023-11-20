// Exercise Level 1

/*

1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Reverse the array using reverse() method
17. Slice out the first 3 companies from the array
18. Slice out the last 3 companies from the array
19. Slice out the middle IT company or companies from the array
20. Remove the first IT company from the array
21. Remove the middle IT company or companies from the array
22. Remove the last IT company from the array
23. Remove all IT companies
*/

//1 
const arr = new Array();

//2
const arr1 = new Array(6).fill('items')

//3 
console.log(arr1.length); //6

//4
console.log(arr1[0]);
console.log(arr1[3]);
const lastElemet = arr1.length - 1;
console.log(arr1[lastElemet]);

//5
const mixedDataTypes = [1,'two', 'three', 4, true, null, 7];
console.log(mixedDataTypes.length); //7

//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7
console.log(itCompanies);

//8
console.log(itCompanies.length);

//9 
console.log(itCompanies[0], itCompanies[3], itCompanies[(itCompanies.length -1)])

//10
console.log(itCompanies.toString(','));

//11
let upperCase = (itCompanies.toString(''));
console.log(upperCase.toLocaleUpperCase());

//12
let sentence = itCompanies.toString(' ')
console.log(`${sentence} are big iT companies`);

//13
itCompanies.includes('Google') ? console.log(`Google`)
:console.log('company not found')

//14
console.log(sentence.match('oo'));
// this is a bit tricky as it doesnt return the full word that contains more than one 'o'

//15
console.log(itCompanies.sort())

//16
console.log(itCompanies.sort().reverse())

//17
console.log(itCompanies.slice(0,3));

//18
console.log(itCompanies.slice(4,(itCompanies.length)))

//19
console.log(itCompanies.slice(3,4));

//20 
itCompanies.shift();
console.log(itCompanies);

//21 
itCompanies.splice(2,2);
console.log(itCompanies);

//22
itCompanies.pop();
console.log(itCompanies);

//23
itCompanies.splice();
console.log(itCompanies);