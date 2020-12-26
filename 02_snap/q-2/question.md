Consider the following JS:

  var myvar = {this:1,that:2,nothing:['one','two','three']};

What would be the value of the following:

- myvar.that
  2

- myvar['this']
1

- myvar.nothing[1]
"two"

- myvar['nothing']
["one", "two", "three"]

- myvar[2]
get an error or undefined

### Feedback:
Your answers are correct.