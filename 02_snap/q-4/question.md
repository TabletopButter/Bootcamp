If you had an array of 99 numbers randomly ordered between 1-100, how would you determine WHICH number is missing.

I had to do some reasearch on google for this one

We could calcuate the total sum of all the numbers and then subtract the second result from the first.

missing number = (n(n+1))/2 - (A[1]+A[2]+...A[100]) 

int sum = 0
int index = -1
for (int i =0; i<Array.length; i++){
    if(arr[i]==0){
        index = i
    } else {
        sum+=Array[i]
    }
}
missnum = 5050-sum, and then you could even find the index with the included solution

5050 is the sum of all integers between 1 and 100