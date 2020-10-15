var name; var num3; var num4;

name = prompt("Tell me your name");
num1 = parseInt(prompt("Give me a number"));
num2 = parseInt(prompt("Give me another number"));

function day(name1)
{
    return "You are going to have a wonderful day, "+name1+".<br><br>";
}

function add(num3, num4)
{
    return "By the way, the sum of your numbers is "+(num3+num4)+".";
}

document.write(day(name));
document.write(add(num1, num2));
