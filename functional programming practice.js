var numbers = [4,11,33,54,11];
/*
var bigNumber = numbers.reduce(function(a, b){
    if(a > b)
    {
        console.log('accumulative ', a, ' current ', b);
        return a;
    }
    else 
        {
            console.log('accumulative ', a, ' current ', b);
            return b;
        }
}, 0);
*/

function swap(x, y, array){

    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    return array;
}

var tripledBigNum = numbers.map(function(num){

    return num*3;
}).reduce(function(a, b){
    if(a > b)
    {
        console.log('accumulative ', a, ' current ', b);
        return a;
    }
    else 
        {
            console.log('accumulative ', a, ' current ', b);
            return b;
        }
}, 0);

console.log(tripledBigNum);