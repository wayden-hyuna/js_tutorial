function Alphebetise(str){

    return [...str]
    .sort()
    .join('');

}

console.log(Alphebetise('hello'));
console.log(Alphebetise('goodbye'));