//1-------------------------------------------
/*
var a = parseFloat(prompt("Vrednost a je:"));
var b = parseFloat(prompt("Vrednost b je:"));

if (a % 2 == 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}
*/
//2
var max;
var a = 10;
var b = 6;

if (a > b) {
    max = a;
} else {
    max = b;
}
console.log(max);

//3
var a = 3;
var b = 6;
var c = 5;
var max = a;

if(a<b && b>c){
    max = b;
}
else if(a<c && c>b){
    max = c;
}
else{
    max = a
}
console.log(max);
//4
/*
var a = parseInt(prompt("Broj A:"));
var b = parseInt(prompt("Broj B:"));


if(a>b){
     console.log("A je vece od b!");
    }
   
else if (a<b){
        console.log("B je vece od A!");
    }
   
else
    console.log("Nekorektno unet broj");
*/
//5
/*
var ocena = parseInt(prompt("Unesi ocnu:"));
switch(ocena){
    case 1:
    console.log("Nedovoljan");
    break;
    case 2:
    console.log("Dovoljan");
    break;
    case 3:
    console.log("Dobar");
    break;
    case 4:
    console.log("Vrlodobar");
    break;
    case 5:
    console.log("Odlican");
    break;
    default:
    console.log("Nekorektno uneta ocena")
}*/
//6
var day;
switch (new Date().getDay()) {
    case 0:
    day="Nedelja"
    break;
    case 1:
    day="Ponedeljak"
    break;
    case 2:
    day="Utorak"
    break;
    case 3:
    day="Sreda"
    break;
    case 4:
    day="Cetvrtak"
    break;
    case 5:
    day="Petak"
    break;
    case 6:
    day="Subota"
    break;
    default:
    day = "Unknown Day";
   
}
console.log(day);

//7
/*
var operand1 = parseInt(prompt("Uneti prvi operand"));
var operand2 = parseInt(prompt("Uneti drugi operand"));
var operacija = prompt("Izaberite jednu od ponudjenih operacija: +,-,*,/");

switch(operacija){
    case"+":
    console.log("Zbir je: " +(operand1 + operand2));
    break;
    case"-":
    console.log("Razlika je: " +(operand1 - operand2));
    break;
    case"*":
    console.log("Proizvod je: " +(operand1 * operand2));
    break;
    case"/":
    console.log("Kolicnik je: " +(operand1 / operand2).parseFloat(2));
    break;
    default:
    console.log("Pogresno uneta cifra ili operacija");
}
*/