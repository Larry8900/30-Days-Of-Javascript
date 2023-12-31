// Exercise Level 3

const countries = require("./countries");

/*
1. The following is an array of 10 students ages:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

    i. Sort the array and find the min and max age
    ii. Find the median age(one middle item or two middle items divided by two)
    iii. Find the average age(all items divided by number of items)
    iv. Find the range of the ages(max minus min)
    v. Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

2. Find the middle country(ies) in the countries array

3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

*/

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortArray = ages.sort();
console.log(`the min age is ${sortArray[0]}, and the max age is ${sortArray[(sortArray.length -1)]}`);
// the min age is 19, and the max age is 26

//ii
let median = ages.splice(4,2);

console.log(median[0] + median[1]);

//iii
let average = 0
console.log(ages)
for(let i = 0; i < ages.length; i++){
    average += ages[i]; // adds all the elements in the array
}
console.log(average / ages.length)

//iv
// to get the range of ages( max - min)
let min = sortArray[0];
let max = sortArray[sortArray.length -1];
console.log(max - min) // 26 - 19 = 7

//2

console.log(countries.splice(5,1));

//3
let array1 = countries.splice(0,5)
let array2 = countries.splice(0,countries.length)
console.log(array1,array2)

