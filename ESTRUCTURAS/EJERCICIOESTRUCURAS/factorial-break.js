let j = 1;
let num3 = 10;
let numFactorial3 = 1;
while (j > 0) {
    numFactorial3 = numFactorial3*(j+1);
	j++;
    console.log('numFactorial3', numFactorial3)
    if(j === 10){
        break;
    }
    
}