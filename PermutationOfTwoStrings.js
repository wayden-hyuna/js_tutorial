
var mystring1 = "football club"
var mystring2 = "club football"


function isPermutation(str1, str2)
{
    var str1Array = str1.split('');
    str1Array.sort();
    var str2Array = str2.split('');
    str2Array.sort();
    sortedStr1 = str1Array.join(" ");
    sortedStr2 = str2Array.join(" ");

    console.log(sortedStr1, "", sortedStr2);
    if(sortedStr1 === sortedStr2)
    {
        return true;
    }
    else
        return false;

    
}

console.log(permutation(mystring1, mystring2));