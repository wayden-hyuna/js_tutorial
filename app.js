

var height = 10;

function volume () {
    var width = 10;
    var length = 10;

    var volumeOfObject = function() {
        // child/local scope
        return length*width*height;
    }

    return volumeOfObject();
}

console.log(volume());