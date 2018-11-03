
//class used to represent clouds in the background sketch
class Cloud {

    //initializes cloud just of the left side of the screen, also called when this cloud goes off the screen so that a new cloud is drawn
    reset() {

        //stores relative x coordinate and radius of each cloud point that form this cloud
        this.cloudPoints = [];
        //maximum number of cloud points that can be used to make a cloud
        this.maxCloudPoints = 7;
        //minimum number of cloud points that can be used to make a cloud
        this.minCloudPoints = 4;
        //the maximum size of any cloud in the x dimension
        this.cloudWidth = 120;
        //the maximum radius of any cloud point in a cloud
        this.cloudPointMaxWidth = 80;
        //the minimum radius of any cloud point in a cloud
        this.cloudPointMinWidth = 70; //50;

        //initial x coordinate of cloud is set so that the cloud starts just off the left side of the screen
        this.x = -this.cloudWidth;
        //initial y coordinate of cloud is a random number between 0 and the view port height (so that clouds are only generated in the top part of the page)
        this.y = Math.floor(Math.random() * (document.documentElement.clientHeight * (2/4)) );

        //stores the number of cloud points that this cloud will have
        let cloudPointNum = Math.floor((Math.random() * this.maxCloudPoints) + this.minCloudPoints );
        
        //generate a number (between min/maxCloudPoints) of cloud points with varying relative x coordinates and radius' to make a cloud looking blob
        for (let i = 0; i < cloudPointNum; i++) {

            let ellipseRadius;

            //TODO: ellipses in cloud are sometimes small than min cloud point

            // start of the cloud should be thinner
            // so allow ellipses to be bigger or equal in size to the previous cloud point
            if ( i < Math.floor(cloudPointNum/2) ) {
                // let prevCloudPointRadius = this.cloudPoints[i - 1] || this.cloudPointMinWidth;
                // ellipseRadius = Math.max(Math.floor((Math.random() * this.cloudPointMaxWidth) + this.cloudPointMinWidth), prevCloudPointRadius);
                ellipseRadius = Math.floor((Math.random() * (this.cloudPointMaxWidth/4 - this.cloudPointMinWidth)) + this.cloudPointMinWidth);
            } 
            else if ( i == Math.floor(cloudPointNum/2) || i == Math.floor(cloudPointNum/2) - 1 || i == Math.floor(cloudPointNum/2) + 1 ) {
                ellipseRadius = Math.floor((Math.random() * (this.cloudPointMaxWidth - this.cloudPointMinWidth)) + this.cloudPointMinWidth);
            }
            // end of the cloud should be thinner 
            // so allow ellipses to be smaller or equal in size to the previous cloud point
            else {
                // let prevCloudPointRadius = this.cloudPoints[i - 1] || cloudPointMinWidth;
                // ellipseRadius = Math.min(Math.floor((Math.random() * this.cloudPointMaxWidth) + this.cloudPointMinWidth), prevCloudPointRadius);
                ellipseRadius = Math.floor((Math.random() * (this.cloudPointMaxWidth/4)) + this.cloudPointMinWidth);
            }

            let relativeX = Math.floor(this.cloudWidth * (i/cloudPointNum));

            this.cloudPoints.push([relativeX, ellipseRadius]);
        }
    }

    //a cloud is essentially a collection of ellipses, of varying size. In this code each ellipse is refered to as a "cloud points"
    constructor(sketch, width, height){
        //pass a reference of the sketch object, which contains all p5 methods
        this.sketch = sketch;
        //store a local copy of the width and height of the canvas containing this cloud
        this.width = width;
        this.height = height;

        this.reset();
    }

    move(newWidth, newHeight) {
        //update local width/height variables
        this.width = newWidth;
        this.height = newHeight;
        this.x++;
    }

    draw(){
        if (this.x >= this.width + this.cloudWidth ) {
            this.reset();
        }
        else {
            this.sketch.fill('#f0ead6');
            for (let i = 0; i < this.cloudPoints.length; i++) {
                this.sketch.ellipse( this.cloudPoints[i][0] + this.x, this.y, this.cloudPoints[i][1], this.cloudPoints[i][1] );
            }
        }
    }
}

export default function( sketch ) {
    //stores the dimensions of the canvas (relative to the whole page not just viewport)
    let width;
    let height;
    let clouds = [];
    let cloudInterval;
    let maxClouds = 20;

    //setup function, run at initialization
    sketch.setup = function() {
        width = document.body.clientWidth;
        height = document.body.scrollHeight + 20;

        let cnv = sketch.createCanvas(width, height);

        cloudInterval = setInterval( function() { 
            clouds.push(new Cloud(sketch, width, height)); 
            if (clouds.length == maxClouds) {
                clearInterval(cloudInterval);

            }
        }, 1500);


        // for (let i = 0; i < 1; i++) {
        //     clouds.push(new Cloud(sketch, width, height));
        // }


    };

    //called every time the canvas is drawn
    sketch.draw = function() {
        var viewportHeight = document.documentElement.clientHeight;

        sketch.noStroke();
        sketch.background('#80dfff');
        sketch.smooth();
        //draw sun
        sketch.fill('#FFD670');
        sketch.ellipse(width - 30, 30, 200, 200);
        // sketch.ellipse(100, 100, 65, 65);
        // sketch.ellipse(200, 100, 80, 80);
        //draw and move clouds
        clouds.forEach(function(element) { 
            // if (element.x < width) {
                element.move(width, height); 
                element.draw();  
            // } else {
            // }
        });

        


        //draw background hill
        sketch.fill('#9dc785');
        sketch.arc(width - 20, viewportHeight+200, 1.5*width, 1080, sketch.PI, 0, sketch.PIE);
        //draw foreground hill
        sketch.fill('#93C178');
        sketch.arc(0, viewportHeight+200, 1.5*width, 1080, sketch.PI, 0, sketch.PIE);
        //draw background below hills
        sketch.rect(0, viewportHeight+200, width, height);



        let y = viewportHeight-200;
        let x = 0.75*width;
        let h = 100;

        sketch.noFill();

        for (let i = y; i <= y+h; i++) {
            let inter = sketch.map(i, y, y+h, 0, 1);
            let c = sketch.lerpColor(sketch.color('#9dc785'), sketch.color('#93c178'), inter);
            sketch.stroke(c);
            sketch.line(x, i, x+1000, i);
        }

    };

    //called every time the canvas is resized
    sketch.windowResized = function() {
        width = document.body.clientWidth;
        height = document.body.scrollHeight + 20;
        sketch.resizeCanvas(width, height);
    };
}
