function nameSwap(str){
    return (str.split(" ").reverse().join(" "));    
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));

function nameSwapArr(str){
    
    var strArr = str.split(' ');
    var tmp = strArr[0];
    strArr[0] = strArr[1];
    strArr[1] = tmp;
    return strArr.join(' ');
}


console.log(nameSwapArr('Abraham Lincoln'));
console.log(nameSwapArr('Hank Aaron'));
