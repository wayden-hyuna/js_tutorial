//return random # from zero to max

function RngToX(max){
    return Math.floor(Math.random()*max)
}


var randomBodyParts = ['head', 'arms', 'legs', 'feet', 'toes', ' hips'];
var randomAdjectives = ['fat', 'ugly', 'dirty', 'smelly'];
var randomWords = ['clap', 'butt', 'crack', 'dumpster', 'bum'];
var verb = '';

var randomBodyPart = randomBodyParts[RngToX(randomBodyParts.length)];
var randomAdjective = randomAdjectives[RngToX(randomAdjectives.length)];
var randomWord = randomWords[RngToX(randomWords.length)];

// change tense of verb if body part is plural

if (randomBodyPart[(randomBodyPart.length-1)] != 's')
    verb = 'is';
else
    verb = 'are';



console.log('Your ' + randomBodyPart + ' ' + verb + ' like a ' + randomAdjective + " " + randomWord +'!!!')