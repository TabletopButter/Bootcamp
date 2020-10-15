var num1; var num2; var num3;
var numlist;
var sum=0;

num1=Number(prompt("Give a number"));
num2=Number(prompt("Give me a number"));
num3=Number(prompt("Give me another number"));


numlist=[num1, num2, num3];

for(i=0; i<numlist.length; i++)
{
    sum+=Number(numlist[i]);
}

document.write("The sum of all your numbers is "+sum+".");