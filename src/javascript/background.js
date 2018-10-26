export default function( sketch ) {
    var width = 0;
    var height = 0;
    sketch.setup = function() {
        var cnv = sketch.createCanvas(document.body.clientWidth, document.body.scrollHeight);//sketch.windowHeight);
        // cnv.parent("sketch");
    }
    sketch.draw = function() {
        sketch.fill(0);
        sketch.ellipse(50, 50, 80, 80);
        sketch.background(255, 204, 0);
    }
    sketch.windowResized = function() {
        sketch.resizeCanvas(document.body.clientWidth, document.body.scrollHeight);
    }
}
