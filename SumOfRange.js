       

function sumRange(x, y){
                        
    myMax = Math.max(x, y);
    myMin = Math.min(x, y);
    var mySum = 0;

    for(var i = myMin; i <= myMax; i++)
    {
        mySum = mySum + i;021111111111111
    }

    return mySum;
}

console.log(sumRange(1,100));
