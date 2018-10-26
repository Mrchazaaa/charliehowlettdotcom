export default function( sketch ) {
    var width = 0;
    var height = 0;
    sketch.setup = function() {
        var cnv = sketch.createCanvas(document.body.clientWidth, document.body.scrollHeight);//sketch.windowHeight);
        // cnv.parent("sketch");
    }
    sketch.draw = function() {
        sketch.noStroke();
        sketch.background('#80dfff');
        sketch.smooth();
        sketch.fill('#9dc785');
        sketch.arc(document.body.clientWidth - 20, document.body.scrollHeight+200, 1.5*document.body.clientWidth, 1080, sketch.PI, 0, sketch.PIE);
        sketch.fill('#93C178');
        sketch.arc(0, document.body.scrollHeight+200, 1.5*document.body.clientWidth, 1080, sketch.PI, 0, sketch.PIE);
    }
    sketch.windowResized = function() {
        sketch.resizeCanvas(document.body.clientWidth, document.body.scrollHeight);
    }
}
