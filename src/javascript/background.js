class Cloud {

    // var cloudPoints;
    // var maxCloudPoints;
    // var cloudWidth;
    // var cloudPointWidth;
    // var sketch;

    constructor(sketch){
        this.sketch = sketch;
        //maximum number of ellipses that can be used to make this cloud
        this.maxCloudPoints = 7;
        //the maximum size of any cloud
        this.cloudWidth = 270;
        //the maximum radius of any ellipse ("cloud point") in a cloud
        this.cloudPointWidth = 140;
        this.cloudPointMinWidth = 100;
        this.cloudPoints = [];
        this.offset = 400;


        //loop a random number of times (between) 3 and maxCloudPoints
        for (let i = 0; i < Math.floor((Math.random() * this.maxCloudPoints) + 3); i++) {
            //generate a number of arrays where the first element is the position of a cloud point and the second is the radius of the cloud point
            this.cloudPoints.push( [Math.floor(Math.random() * this.cloudWidth) + this.offset,  Math.floor((Math.random() * this.cloudPointWidth) + this.cloudPointMinWidth)]);
            console.log("plot");
        }        
    }

    draw(){
        this.sketch.fill('#f0ead6');
        for (let i = 0; i < this.cloudPoints.length; i++) {
            this.sketch.ellipse( this.cloudPoints[i][0], 100, this.cloudPoints[i][1], this.cloudPoints[i][1] );
        }
        this.sketch.stroke('#222222');
        this.sketch.strokeWeight(4);
        this.sketch.noFill();
        this.sketch.rect(this.offset - this.cloudPointWidth, 0, this.cloudWidth, this.cloudPointWidth);
        this.sketch.noStroke();
    }
}

export default function( sketch ) {
    //stores the dimensions of the canvas (relative to the whole page not just viewport)
    var width;
    var height;
    var cloud;

    //setup function, run at initialization
    sketch.setup = function() {
        width = document.body.clientWidth;
        height = document.body.scrollHeight + 20;
        var cnv = sketch.createCanvas(width, height);

        cloud = new Cloud(sketch);
    }

    //called every time the canvas is drawn
    sketch.draw = function() {
        var viewportHeight = document.documentElement.clientHeight;

        sketch.noStroke();
        sketch.background('#80dfff');
        sketch.smooth();
        //draw sun
        sketch.fill('#FFD670');
        sketch.ellipse(width - 30, 30, 200, 200);
        //draw background hill
        sketch.fill('#9dc785');
        sketch.arc(width - 20, viewportHeight+200, 1.5*width, 1080, sketch.PI, 0, sketch.PIE);
        //draw foreground hill
        sketch.fill('#93C178');
        sketch.arc(0, viewportHeight+200, 1.5*width, 1080, sketch.PI, 0, sketch.PIE);
        //draw background below hills
        sketch.rect(0, viewportHeight+200, width, height);
        
        cloud.draw();
    }

    //called every time the canvas is resized
    sketch.windowResized = function() {
        width = document.body.clientWidth;
        height = document.body.scrollHeight + 20;
        sketch.resizeCanvas(width, height);
    }
}
