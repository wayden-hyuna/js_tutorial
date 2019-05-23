
var uhString = " String method that will split a string into an array of substrings"
function longestWord(str){

   var splitStrArray = str.split(" ");
   var longWord = " ";

    for(var i = 0; i < splitStrArray.length; i++)
    {
        if(longWord.length < splitStrArray[i].length)
        {
            longWord = splitStrArray[i];
        }
    }
    return (longWord +" ==> "+ longWord.length);
}

console.log(longestWord(uhString));
