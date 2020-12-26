What do the following two expressions evaluate to, in JS. Please explain.

```
		"1" + 2 + "3" + 4 

		This evaluates to 1234. It has to do with the way concatonation works in js. Since 1 is a string js con catonates the 2 on the end, then the 3 then the 4.



	  4  + 3 +  2  + "1"
```		
		This evaluates to 91. It has to do with the way concatonation works in js. Since the first datatype is a number it will attempt to add all the values instead of concaotnating them

### Feedback:
Mostly correct. The first statement is true.

In the second case, + is acting like an addition operator
first and then when it encounters "1" it starts acting
like a concat operator. So it has a dual role.

Score: 30/40