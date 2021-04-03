## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});

    This will sort the points array in numerical order

    the way the sort function works is if you pass in roo and raa and then return roo minus raa the array is sorted from least to greatest

    If we wanted to reverse it we would use this

     var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return raa-roo});
    ```

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
    
    In your code you cannot access pi before it is initialized so you get an error

    You can fix it by moving the const above the boundry variable, I don't beleive using var pi would help either.
    You are trying to access the variable or constant before it is initialized to use in the boundary calucation

