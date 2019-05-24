var numArr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numArr_2 = [21, 26, 28, 29];

function evensOnly(arr){
    var evenArray = [];
    arr.forEach(element => {

        if(element%2 === 0)
        {
            evenArray.push(element);
        }
        
    });

    return (evenArray);
}


function evensOnlyFilter(arr){
    
    return arr.filter((a)=>{ if(a%2 === 0) return true});

}



console.log(...evensOnly(numArr_1));

console.log(...evensOnly(numArr_2));

console.log(...evensOnlyFilter(numArr_1));

console.log(...evensOnlyFilter(numArr_2));

