
//class used to represent clouds in the background sketch
class Cloud {

    //initializes cloud just of the left side of the screen, also called when this cloud goes off the screen so that a new cloud is drawn
    initialise() {

        //stores x offset and radius of each cloud point that forms this cloud
        this.cloudPoints = [];
        //maximum number of cloud points that can be used to make a cloud
        let maxCloudPoints = 8;
        //minimum number of cloud points that can be used to make a cloud
        let minCloudPoints = 5;
        //the overall width of any cloud (in percentage of screen height)
        let cloudWidth = 0.2;

        //stores the number of cloud points that this cloud will have
        this.cloudPointNum = Math.floor((Math.random() * maxCloudPoints) + minCloudPoints );
        
        //the minimum radius of any cloud point in a cloud (in percentage of screen height)
        let cloudPointMinWidth = this.cloudWidth/(this.cloudPointNum - 1);
        //the maximum radius of any cloud point in a cloud (in percentage of screen height)
        let cloudPointMaxWidth = this.cloudPointMinWidth * 4/3; 
        
        //radius of each cloud point as a percentage of viewport height
        this.ellipsePerc = [];
        //generate a number (between min/maxCloudPoints) of cloud points with varying relative x coordinates and radius' to make a cloud looking blob
        for (let i = 0; i < this.cloudPointNum; i++) {
            let ellipseRadius;

            // start of the cloud should be thinner
            // so allow ellipses to be bigger or equal in size to the previous cloud point
            if ( i < Math.floor(this.cloudPointNum/2) ) {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
                this.ellipsePerc.push(ellipseRadius);
            } 
            else if ( i == Math.floor(this.cloudPointNum/2) - 1 ) {
                ellipseRadius = Math.random() * (cloudPointMaxWidth - cloudPointMinWidth) ;
                this.ellipsePerc.push(ellipseRadius);
            }
            // end of the cloud should be thinner 
            // so allow ellipses to be smaller or equal in size to the previous cloud point
            else {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
                this.ellipsePerc.push(ellipseRadius);
            }
            //set start and ending ellipses to be min cloud width
            if ( i == 0 || i == this.cloudPointNum - 1) {
                ellipseRadius = cloudPointMinWidth;
            }

            let xOffset = cloudWidth * (i/this.cloudPointNum);

            this.cloudPoints.push([xOffset, ellipseRadius * height]);
        }

        //initial x coordinate of cloud is set so that the cloud starts just off the left side of the screen
        this.startingPoint = -((this.cloudWidth + (cloudPointMaxWidth/2)) * this.width);
        this.x = this.startingPoint;

        //initial y coordinate of cloud is a random number between 0 and view port height (stored as percentage of viewport height from top of page)
        this.yPerc = Math.random() * this.height; 
        this.y = this.height * (this.yPerc/2);
    }

    //a cloud is essentially a collection of ellipses, of varying size. In this code each ellipse is refered to as a "cloud point"
    constructor(sketch, newWidth, newHeight){
        //pass a reference of the sketch object, which contains all p5 methods
        this.sketch = sketch;
        //store a local copy of the width and height of the canvas containing this cloud
        this.width = newWidth;
        this.height = newHeight;

        this.initialise();
    }

    move() {
        if (this.x++ >= this.width ) {
            this.x = this.startingPoint;
        }
        this.x++;
    }

    updateSize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;

        for (let i = 0; i < this.cloudPoints.length; i++) {
            //update y position of clouds
            this.y = this.height * (this.yPerc/2);
            //update cloud offsets
            this.cloudPoints[i][0] = this.cloudPoints[i][0] * this.width;
            //update cloud radius' 
            this.cloudPoints[i][1] = this.ellipsePerc[i] * this.height;
        }
    }

    draw(){
        for (let i = 0; i < this.cloudPoints.length; i++) {
            this.sketch.ellipse( this.cloudPoints[i][1] + this.x, this.y, this.cloudPoints[i][0]);
        }
    }
}

export default function( sketch ) {
    //stores the dimensions of the canvas (relative to the viewport)
    let width;
    let height;
    let clouds = [];
    let cloudInterval;
    let maxClouds = 20;

    //setup function, run at initialization
    sketch.setup = function() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;

        let cnv = sketch.createCanvas(width, height);

        cloudInterval = setInterval( function() { 
            clouds.push(new Cloud(sketch, width, height)); 
            if (clouds.length == maxClouds) {
                clearInterval(cloudInterval);
            }
        }, 1500);
    };

    //called every time the canvas is drawn
    sketch.draw = function() {
        sketch.noStroke();
        sketch.background('#80dfff');
        sketch.smooth();

        //draw sun
        sketch.fill('#FFD670');
        sketch.ellipse(width - 30, 30, 0.15 * width);
        
        sketch.fill('#fff');
        //draw and move clouds
        clouds.forEach(function(element) { 
            element.move(width, height); 
            element.draw();  
        });

        //draw background hill
        sketch.fill('#9dc785');
        sketch.arc(width - 20, height + 45, 1.5*width, height-100, sketch.PI, 0, sketch.PIE);
        //draw foreground hill
        sketch.fill('#93C178');
        sketch.arc(0, height + 45, 1.5*width, height-100, sketch.PI, 0, sketch.PIE);
    };

    //called every time the canvas is resized
    sketch.windowResized = function() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;
        sketch.resizeCanvas(width, height);
        clouds.forEach(function(element) { 
            element.updateSize();  
        });
    };
}
