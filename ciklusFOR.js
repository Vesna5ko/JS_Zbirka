//1
for(var i = 65; i<91; i++ ){
    var niz = String.fromCharCode(i);
    console.log(niz);}

//2
var suma = 0;
   
for(var i=1; i<=100; i++){
    console.log(i); 
   
    suma += i;
   console.log(suma); 
} 
//3
var zbir = 0;
for(var i =15; i<=25; i++){
    var kvadrat = Math.pow(i,2);
    zbir += kvadrat;
    console.log(zbir); 
}
//4
var m = parseInt(prompt("Unesi broj m"));
var n = parseInt(prompt("Unesi broj n"));

for(var i = 1; i<=m;i++){
    var s = n*(n+i*m);
    console.log(s);}