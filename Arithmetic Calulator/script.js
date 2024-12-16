let number1=0;
let number2=0;

function addNum()
{
     number1=parseFloat(document.getElementById("num1").value);
     console.log(number1);
     number2=parseFloat(document.getElementById("num2").value);
     console.log(number2);

     let sum=number1+number2;

     document.getElementById("res").innerHTML=sum;
}

function subNum()
{
     number1=parseFloat(document.getElementById("num1").value);
     console.log(number1);
     number2=parseFloat(document.getElementById("num2").value);
     console.log(number2);

     let sub=number1-number2;

     document.getElementById("res").innerHTML=sub;
}

function mulNum()
{
     number1=parseFloat(document.getElementById("num1").value);
     console.log(number1);
     number2=parseFloat(document.getElementById("num2").value);
     console.log(number2);

     let mul=number1*number2;

     document.getElementById("res").innerHTML=mul;
}


function divNum(){
     number1=parseFloat(document.getElementById("num1").value);
     console.log(number1);
     number2=parseFloat(document.getElementById("num2").value);
     console.log(number2);

     let div=number1/number2;

     document.getElementById("res").innerHTML=div;
}
