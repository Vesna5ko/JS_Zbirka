//Zadatak 29---------------------------------------------------------
         /*   
        var celzius = prompt("Unesite vrednost u Celziusima:");
        var faranhajt = celzius * 1.80 + 32;
        alert("Temperatura u Faranhajtima iznosi "+faranhajt);
        */

        //Zadatak30-----------------------------------------------------------------

        /*var galon = prompt("Unesite galone");
        var litar = galon * 4.54;
        alert(galon + " galona u litrima iznosi "+parseFloat(litar).toFixed(2));*/

        //Zadatak 31--------------------------------------------------------------------

        /*
        var dolar = prompt("Iznos Americkih dolara:");
        var kursDolara = prompt("Kurs dolara je:");
        var kursEvra = prompt("Kurs evra je:");
        var evri = (dolar * kursDolara)/kursEvra;
        alert(dolar+ " dolara, u evrima iznosi " +parseFloat(evri).toFixed(2));*/

        //32-----------------------------------------------------------
        /*
        var rezervoar = prompt("Rezervoar kapaciteta:");
        var kilometri = prompt("Predjeni put:");
        var potroseniLitri = (rezervoar*100)/kilometri;
        alert("Motor kapaciteta " +rezervoar+"l, koji je presao " +kilometri+"km, potrosijo je "+potroseniLitri+"l.");
        */

        //33--------------------------------------------------------------------------------------------------------------

/*
        var kateta1 = parseFloat(prompt("Unesite velicinu prve katete:"));
        var kateta2 = parseFloat(prompt("Unesite velicinu druge katete:"));
        var hipotenuza = Math.sqrt(Math.pow(kateta1,2) + Math.pow(kateta2,2));
        alert("Velicina hipotenuze sa zadatim katetama iznosi "+hipotenuza.toFixed(2));
        */

        //34---------------------------------------------------------------------------------

        var zapremina1 = parseFloat(prompt("Zapremina1 iznosi: "));
        var temperatura1 = parseFloat(prompt("Temperatura1 iznosi: "));
        var zapremina2 = parseFloat(prompt("Zapremina2 iznosi: "));
        var temperatura2 = parseFloat(prompt("Temperatura2 iznosi: "));
        var temperaturaMesavine = (zapremina1/(zapremina1+zapremina2)/temperatura1)+(zapremina2/(zapremina1+zapremina2)*temperatura2);
        alert("Temperatura mesavine iznosi "+temperaturaMesavine.toFixed(2)+"C");

    //35-----------------------------------------------------------------------------------
    /*
    var prviRadnik = parseFloat(prompt("Broj dana potreban prvom radniku:"));
    var drugiRadnik = parseFloat(prompt("Broj dana potreban drugom radniku:"));
    var timskiRad = (prviRadnik*drugiRadnik)/(prviRadnik+drugiRadnik);
    alert("Broj dana potreban da posao bude obavljen zajednickim snagama je "+timskiRad.toFixed(2));
        */

