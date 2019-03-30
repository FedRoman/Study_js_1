
//Виконав мало завдань.
//Спробую ще посидіти над темой протягом вихідних

alert('hello');
let userName = 'John';
alert(userName);

let userAge =parseFloat(prompt('your age'));
const message = 'your age'+ userAge
alert(message);

const newAges = userAge + 1;
alert(newAges);

const newAge = addOne(userAge);

alert(newAge);

// Number - NaN, Infinity
// String
// Boolean: true, false
// undefined
// null
// Object
// From 2015:
// Symbol

if (userAge < 18) { // <= > == === != !== || &&
    alert('You are not adult');
} else if (userAge > 80 && userAge < 100) {
    alert('You are between 80 and 100');
} else if (userAge > 100) {
    alert('You have seen a lot in your life');
} else {
    alert('You are adult');
}


function addOne(num) {
    const result = num + 1;
    return result;
}


var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"

  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"

  return "yes";
}

