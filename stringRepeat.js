
var str1 = 'car';
var str2 = 'bar';


function repeatString(str, num){

    var newStr = '';
    if(num == 0)
    return newStr;
    else
    {
        var newStr = '';
        for (var i = 0; i < num; i++)
        {
            newStr = newStr + str;
        }
        return newStr;
    }
}

console.log(repeatString(str1, 6));

console.log(repeatString(str2, 0));