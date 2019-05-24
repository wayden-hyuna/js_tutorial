function isPalindrome(myString){
   
    myString = myString.toLowerCase().replace(/\W/g, '');
    return (myString == myString.split('').reverse().join(''));

}

console.log(isPalindrome('level'));

