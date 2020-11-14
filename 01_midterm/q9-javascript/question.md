### Question:

In JavaScript, how do you append a value to an array?  List 4 ways you can find (you may be able to find more) (25% credit).  

Provide example code showing the use of each of the methods you list. (40% credit)

How do you remove a specified member from the array?  Provide small sample. (35% credit)


### Answers: may be pasted here or provided as a script.js file.

push, splice, length, concat, spread


test.push("something");
test.splice(array.length, 0, "something");
test[array.length]="something";


array test=["something"];
array test2=["something else"];

newArray=test.concat(test2);

newArray=[...test, ...test2];


A couple different ways

you could use splice, delete

ex

test.splice(0,1) - > would remove the first element in the array test.

