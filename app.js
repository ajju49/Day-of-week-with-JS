//selectors

let date = new Date();
let abc = date.getDay();

//created  2 new names
let nameOfDay;
let quote;

switch (abc) {
  case 0:
    nameOfDay = "sunday";
    quote = "Time to chillax";
    break;

  case 1:
    nameOfDay = "monday";
    quote = "day of mahadev";
    break;

  case 2:
    nameOfDay = "tuesday";
    quote = "swimming time";
    break;

  case 3:
    nameOfDay = "wednesday";
    quote = "time to nonveg";
    break;

  case 4:
    nameOfDay = "thursday";
    quote = "time to pray";
    break;

  case 5:
    nameOfDay = "friday";
    quote = "party day";
    break;
    
  case 3:
    nameOfDay = "saturday";
    quote = "excercise day";
    break;
}

let xyz = document.getElementById('weekday');
xyz.innerHTML = `${nameOfDay}`;

let mno = document.getElementById('phrase');
mno.innerHTML = `${quote}`