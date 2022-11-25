var myArray = ["five", "four", "three", "two", "one"];
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
    // for(var i = 0; i < 10; i++){
    //     console.log('I want' + i + 'Ice creams')

    // }

//  for (var i = 0; i < myArray.length; i++){
//      console.log(myArray[i]);
// }

for(var words in myArray){
    console.log(myArray[words]);
}

function draw() {
    background(220);

    stroke(255);
}

    // for (var lineX = 75; lineX <= width; lineX += 75) {
    //     line(lineX, 0, lineX, height);
    // }

    // for(var x = 0; x <=80; x++){
    //     circle(x * 10, height/2, 10)
    // }

//         for(var y = 0; y <= 80; y++){
//             for(var x = 0; x <=80; x++) {
//                 fill(x * y, x * 10, y);
//                 circle(x * 10, y * 10, 5)
//             }
//         }
// }