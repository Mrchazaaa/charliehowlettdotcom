
//class used to represent clouds in the background sketch
class Cloud {

    //dynamically generates the clouds shape and sets its position to just off the left side of the screen
    initialise() {

        //stores x offset and radius of each cloud point that forms this cloud (as actual pixel values)
        this.cloudPoints = [];
        //maximum number of cloud points that can be used to make a cloud
        let maxCloudPoints = 8;
        //minimum number of cloud points that can be used to make a cloud
        let minCloudPoints = 4;
        //the average width of any cloud (in percentage of screen width)
        this.cloudWidth = 0.2;

        //randomly generate the number of cloud points that this cloud will have
        this.cloudPointNum = Math.floor((Math.random() * (maxCloudPoints - minCloudPoints) + minCloudPoints ));

        //the minimum radius of any cloud point in a cloud (in percentage of screen width)
        let cloudPointMinWidth = (this.cloudWidth/(this.cloudPointNum - 1))*1.5;
        //the maximum radius of any cloud point in a cloud (in percentage of screen width)
        let cloudPointMaxWidth = cloudPointMinWidth * 2; 

        //radius of each cloud point as a percentage of viewport height
        this.ellipsePerc = [];
        //generate a cloud point with random a relative x offset and radius to make a cloud looking blob
        for (let i = 0; i < this.cloudPointNum; i++) {
            let ellipseRadius;

            //set start and ending ellipses to be min cloud width
            if ( i == 0 || i == this.cloudPointNum - 1) {
                ellipseRadius = cloudPointMinWidth;
            }
            // start of the cloud should be thinner
            // so allow ellipses to be bigger or equal in size to the previous cloud point
            else if ( i < Math.floor(this.cloudPointNum/2) ) {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
            } 
            else if ( i == Math.floor(this.cloudPointNum/2) - 1 ) {
                ellipseRadius = (Math.random() * (cloudPointMaxWidth - cloudPointMinWidth)) + cloudPointMinWidth;
            }
            // end of the cloud should be thinner 
            // so allow ellipses to be smaller or equal in size to the previous cloud point
            else {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
            }
            //store percentage value of this cloud points radius so that it can be updated on screen size change
            this.ellipsePerc.push(ellipseRadius);

            let xOffset = this.cloudWidth * (i/this.cloudPointNum) * this.height;
            let radius = ellipseRadius * this.height; 

            this.cloudPoints.push([xOffset, radius]);
        }

        //initial x coordinate of cloud is set so that the cloud starts just off the left side of the screen
        this.startingPoint = -((this.cloudWidth + (cloudPointMaxWidth/2)) * this.height);
        this.x = this.startingPoint;
        this.x = Math.random() * this.width;

        //initial y coordinate of cloud is a random number between 0 and view port height (stored as percentage of viewport height from top of page)
        this.yPerc = Math.random() / 2; 
        this.y = this.height * this.yPerc;
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
        if (this.x++ >= this.width + (this.cloudPoints[0][1]/2)) {
            this.x = this.startingPoint - (this.x - (this.width + (this.cloudPoints[0][1]/2)));
        }
        this.x++;
    }

    updateSize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;

        for (let i = 0; i < this.cloudPoints.length; i++) {
            //update y position of clouds
            this.y = this.height * this.yPerc;
            //update cloud offsets
            this.cloudPoints[i][0] = this.cloudWidth * (i/this.cloudPointNum) * this.height;
            //update cloud radius' 
            this.cloudPoints[i][1] = this.ellipsePerc[i] * this.height;
        }
    }

    draw(){
        for (let i = 0; i < this.cloudPoints.length; i++) {
            this.sketch.ellipse( this.cloudPoints[i][0] + this.x, this.y, this.cloudPoints[i][1]);
        }
    }
}

export default function( sketch ) {
    //stores the dimensions of the canvas (relative to the viewport)
    let width;
    let height;
    let clouds = [];
    let cloudInterval;
    let cloudCount = 25;

    //setup function, run at initialization
    sketch.setup = function() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;

        let cnv = sketch.createCanvas(width, height);


        for (let i = 0; i < cloudCount; i++) {
            clouds.push(new Cloud(sketch, width, height)); 
            if (clouds.length == cloudCount) {
                 clearInterval(cloudInterval);
            }
        }
    
        // cloudInterval = setInterval( function() { 
        //     clouds.push(new Cloud(sketch, width, height)); 
        //     if (clouds.length == maxClouds) {
        //         clearInterval(cloudInterval);
        //     }
        // }, 1500);
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
        width = $(window).width(); //document.body.clientWidth;
        height = $(window).height(); //document.body.clientHeight;
        sketch.resizeCanvas(width, height);
        clouds.forEach(function(element) { 
            element.updateSize(width, height);  
        });
    };
}
