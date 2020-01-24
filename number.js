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

function mode(){
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