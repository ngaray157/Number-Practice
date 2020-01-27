"use strict";

//Global Variables
var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");
var output = document.getElementById("output");

function mean(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);
    
    var mean = (number1 + number2 + number3 + number4 + number5 + number6)/6;
    output.innerHTML = mean;
    return true;
}

function smallest(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var smallest = Math.min(number1, number2, number3, number4, number5, number6);
    output.innerHTML = smallest;
}

function largest(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var largest = Math.max(number1, number2, number3, number4, number5, number6);
    output.innerHTML = largest;
}

function range(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var large = Math.max(number1, number2, number3, number4, number5, number6);
    var small = Math.min(number1, number2, number3, number4, number5, number6);
    output.innerHTML = large - small;
}

function leastGreat(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(number1, number2, number3, number4, number5, number6);

    if(o1 === number1){
        number1 = number2;
        number2 = number3;
        number3 = number4;
        number4 = number5;
        number5 = number6;
    }else if(o1 === number2){
        number2 = number3;
        number3 = number4;
        number4 = number5;
        number5 = number6;
    }else if(o1 === number3){
        number3 = number4;
        number4 = number5;
        number5 = number6;
    }
    else if(o1 === number4){
        number4 = number5;
        number5 = number6;
    }else if(o1 === number5){
        number5 = number6;
    }

    o2 = Math.min(number1, number2, number3, number4, number5);

    if(o2 === number1){
        number1 = number2;
        number2 = number3;
        number3 = number4;
        number4 = number5;
    }else if(o2 === number2){
        number2 = number3;
        number3 = number4;
        number4 = number5;
    }else if(o2 === number3){
        number3 = number4;
        number4 = number5;
    }
    else if(o2 === number4){
        number4 = number5;
    }

    o3 = Math.min(number1, number2, number3, number4);

    if(o3 === number1){
        number1 = number2;
        number2 = number3;
        number3 = number4;
    }else if(o3 === number2){
        number2 = number3;
        number3 = number4;
    }else if(o3 === number3){
        number3 = number4;
    }

    o4 = Math.min(number1, number2, number3);

    if(o4 === number1){
        number1 = number2;
        number2 = number3;
    }else if(o4 === number2){
        number2 = number3;
    }

    o5 = Math.min(number1, number2);

    if(o5 === number1){
        number1 = number2;
    }

    o6 = number1;

    output.innerHTML = o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
}

//----MODE----

function mode(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    var n1 = 1;
    var n2 = 1;
    var n3 = 1;
    var n4 = 1;
    var n5 = 1;
    var n6 = 1;

    if(number1 === number2){
        n1++;
    }
    if(number1 === number3){
        n1++;
    }
    if(number1 === number4){
        n1++;
    }
    if(number1 === number5){
        n1++;
    }
    if(number1 === number6){
        n1++;
    }

    if(number2 === number3){
        n2++;
    }
    if(number2 === number4){
        n2++;
    }
    if(number2 === number5){
        n2++;
    }
    if(number2 === number6){
        n2++;
    }

    if(number3 === number4){
        n3++;
    }
    if(number3 === number5){
        n3++;
    }
    if(number3 === number6){
        n3++;
    }

    if(number4 === number5){
        n4++;
    }
    if(number4 === number6){
        n4++;
    }
    
    if(number5 === number6){
        n5++;
    }

    var max= Math.max(n1, n2, n3, n4, n5, n6);
    if(n1 === "1" && n2 === "1" && n3 === "1" && n4 === "1" && n5 === "1" && n6 === "1"){
        output.innerHTML = "There are no duplicates";
    }else if(max === n1){
        output.innerHTML = "The mode is " + number1 + " and it appears " + n1 + " times";
    }else if(max === n2){
        output.innerHTML = "The mode is " + number2 + " and it appears " + n2 + " times";
    }else if(max === n3){
        output.innerHTML = "The mode is " + number3 + " and it appears " + n2 + " times";
    }else if(max === n4){
        output.innerHTML = "The mode is " + number4 + " and it appears " + n4 + " times";
    }else if(max === n5){
        output.innerHTML = "The mode is " + number5 + " and it appears " + n5 + " times";
    }else if(max === n6){
        output.innerHTML = "The mode is " + number6 + " and it appears " + n6 + " times";
    }
}

//----UNIQUE NUMBERS----

function unique(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    output.innerHTML = "";
    if (number1 !== number2 && number1 !== number3 && number1 !== number4 && number1 !== number5 && number1 !== number6){
        output.innerHTML = "" + number1;
    }
    if (number2 !== number1 && number2 !== number3 && number2 !== number4 && number2 !== number5 && number2 !== number6){
        output.innerHTML = "" + number2;
    }
    if (number3 !== number1 && number3 !== number2 && number3 !== number4 && number3 !== number5 && number3 !== number6){
        output.innerHTML = "" + number3;
    }
    if (number4 !== number1 && number4 !== number2 && number4 !== number3 && number4 !== number5 && number4 !== number6){
        output.innerHTML = "" + number4;
    }
    if (number5 !== number1 && number5 !== number2 && number5 !== number3 && number5 !== number4 && number5 !== number6){
        output.innerHTML = "" + number5;
    }
    if (number6 !== number1 && number6 !== number2 && number6 !== number3 && number6 !== number4 && number6 !== number5){
        output.innerHTML = "" + number6;
    }
}

//----DUPLICATE----

function duplicate(){
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var number3 = parseFloat(num3.value);
    var number4 = parseFloat(num4.value);
    var number5 = parseFloat(num5.value);
    var number6 = parseFloat(num6.value);

    output.innerHTML = "";
    if(number1 === number2 || number1 === number3 || number1 === number4 || number1 === number5 || number1 === number6){
        output.innerHTML += " " + number1;
    }
    if(number2 === number3 || number2 === number4 || number2 === number5 || number2 === number6){
        output.innerHTML += " " + number2;
    }
    if(number3 === number4 || number3 === number5 || number3 === number6){
        output.innerHTML += " " + number3;
    }
    if(number4 === number5 || number4 === number6){
        output.innerHTML += " " + number4;
    }
    if(number5 === number6){
        output.innerHTML += " " + number5;
    }
    return true;
}