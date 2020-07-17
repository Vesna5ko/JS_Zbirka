//1
var i = 0;
var suma = 0;

while(i<=99){
    if(i%2!=0){
        suma += i;
    }
        i++;
}
console.log(suma);
//2
var i = 0;
var suma = 0;

while(i<=99){
    if(i%2!=0){
        suma += i;
    }
        i++;
}
console.log(suma);
//3
var a = 5;
        var n = 3;
        var stepen = 1;
        var i = 1;

        while (i <= n) {
            stepen = stepen * a;
            i++
        }
        console.log(stepen);
//4
var i = 1;

        while (i <= 100) {
            if (i % 2 == 0 || i % 3 == 0) {
                console.log(i + " Beoj nije prost")
            } else {

                console.log(i + " Beoj je prost")
            }
            i++
        }
