//Exercise Level 2

/*
1. Write a code which can give grades to students according to theirs scores:
    A, 80-100 B, 70-89 C, 60-69 D, 50-59 F, 0-49

2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
3. Check if a day is weekend day or a working day. Your script will take day as an input.
        What is the day  today? Saturday
        Saturday is a weekend.

        What is the day today? saturDaY
        Saturday is a weekend.

        What is the day today? Friday
        Friday is a working day.

        What is the day today? FrIDAy
        Friday is a working day.

*/

//1
let score = parseInt(prompt('enter score'))
let grade = ''

if(score >= 80 && score < 101){
grade = 'A'
}
else if(score >= 70 && score < 90){
    grade = 'B'
}
else if(score >= 60 && score < 70){
    grade = 'C'
}
else if(score >= 50 && score < 60){
    grade = 'D'
}
else if(score < 50){
    grade = 'F'
}
console.log(`Your score is ${score}, Grade: ${grade}`);

//2
let month = prompt('Enter month');
let season = '';

if(month == 'september' || month == 'october' || month == 'november'){
     season = 'Autumn'
}
else if(month == 'december' || month == 'january' || month == 'february'){
     season = 'Winter'
}
else if(month == 'march' || month == 'april' || month == 'may'){
     season = 'Spring'
}
else if(month == 'june' || month == 'july' || month == 'august'){
     season = 'Summer'
}
console.log(`Season: ${season}`);


//3
let day = prompt('What is the day today?');
day = day.toLowerCase()
switch (day) {
  case 'monday' :
    console.log(`${day} is a working day`);
    break;
  case 'tuesday':
    console.log(`${day} is a working day`);
    break;
  case 'wednesday':
    console.log(`${day} is a working day`);
    break;
    case 'thursday':
        console.log(`${day} is a working day`);
        break;
    case 'friday':
        console.log(`${day} is a working day`);
        break;
    case 'saturday':
        console.log(`${day} is a weekend`);
        break;
    case 'sunday':
        console.log(`${day} is a weekend`);
  default:
    console.log('it is not a week day.');
}