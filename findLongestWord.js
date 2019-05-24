function longestWord(str){

 var longestWord = '';

    newStr =  str.replace(/\W/g, " ").split(" ").forEach(a => {
        if(a.length > longestWord.length)
        longestWord = a;
    });
   
   return longestWord.length;

}

console.log(longestWord('Hi, where is the airport?'));

console.log(longestWord('Thanks for stopping by!'));