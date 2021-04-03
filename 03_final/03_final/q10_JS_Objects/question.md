Consider the following code.  What would be console logged?  Messed up?  Why? (33%)

Apple type is Clemntine because we are only refrencing the apple object so when you you set the var orange to apple you are really saying apple.type on the orange.type line

What would you change to address this issue (the Apple type is mis-represented in the last line below)? (66%)

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


Hint: this question refers to copying of objects.


I would parse and stringfy the object


var orange = JSON.prase(JSON.stringify(apple))


    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = JSON.parse(JSON.stringify(apple))

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)