

var myStr = 'this is my string';

function unique(myString){

    for (var i = 0; i < myString.length; i++)
    {
       if(myString.indexOf(myString[i]) !== myString.lastIndexOf(myString[i]))
       {
           return false;
       } 
    }
    return true;
}

if(unique("adfs"))
{
    console.log('the string is unique');
}
else
{
    console.log('the string is not unique');
}