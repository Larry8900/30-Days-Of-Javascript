

let presentDate  = new Date();
let year_ = presentDate.getFullYear();
let month_ = presentDate.getMonth().toString().padStart(2, "0");
let day_ = presentDate.getDate().toString().padStart(2, "0");
let hour_ = presentDate.getHours().toString().padStart(2, "0");
let minutes_ = presentDate.getMinutes().toString().padStart(2, "0");


console.log(`${year_}-${month_}-${day_} ${hour_}:${minutes_}`);

