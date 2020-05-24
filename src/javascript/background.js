import p5 from 'p5';

// Class used to represent clouds in the background sketch.
class Cloud {

    // Dynamically generates the clouds shape and sets its position to just off the left side of the screen.
    initialise() {

        // Stores x offset and radius of each cloud point that forms this cloud (px units).
        this.cloudPoints = [];
        // Maximum number of cloud points that can be used to make a cloud.
        const maxCloudPoints = 8;
        // Minimum number of cloud points that can be used to make a cloud.
        const minCloudPoints = 4;
        // The average width of any cloud (in percentage of screen width).
        this.cloudWidth = 0.2;

        // Randomly generate the number of cloud points that this cloud will have.
        this.cloudPointNum = Math.floor((Math.random() * (maxCloudPoints - minCloudPoints) + minCloudPoints ));

        // The minimum radius of any cloud point in a cloud (in percentage of screen width).
        // let cloudPointMinWidth = (this.cloudWidth/(this.cloudPointNum - 1))*1.5;
        const cloudPointMinWidth = (this.cloudWidth/(this.cloudPointNum - 1))*1.8;
        // The maximum radius of any cloud point in a cloud (in percentage of screen width).
        // let cloudPointMaxWidth = cloudPointMinWidth * 2; 
        const cloudPointMaxWidth = cloudPointMinWidth * 2.3; 

        // Generate a cloud point with random a relative x offset and radius to make a cloud looking blob.
        for (let i = 0; i < this.cloudPointNum; i++) {
            let ellipseRadius;

            // Set start and ending ellipses to be min cloud width.
            if ( i == 0 || i == this.cloudPointNum - 1) {
                ellipseRadius = cloudPointMinWidth;
            }
            // Start of the cloud should be thinner, so allow ellipses to be bigger
            // or equal in size to the previous cloud point.
            else if ( i < Math.floor(this.cloudPointNum/2) ) {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
            } 
            else if ( i == Math.floor(this.cloudPointNum/2) - 1 ) {
                ellipseRadius = (Math.random() * (cloudPointMaxWidth - cloudPointMinWidth)) + cloudPointMinWidth;
            }
            // End of the cloud should be thinner so allow ellipses 
            // to be smaller or equal in size to the previous cloud point.
            else {
                ellipseRadius = (Math.random() * ((cloudPointMaxWidth - cloudPointMinWidth)/2)) + cloudPointMinWidth ;
            }

            let xOffset = this.cloudWidth * (i/this.cloudPointNum) * this.height;
            let radius = ellipseRadius * this.height; 

            // Store percentage value of this cloud points radius so that it can be updated on screen size change.
            this.cloudPoints.push([xOffset, radius, ellipseRadius]);

            this.lastTime = new Date();
        }

        // Initial x coordinate of cloud is set so that the cloud starts just off the left side of the screen.
        this.startingPoint = -((this.cloudWidth + (cloudPointMaxWidth)) * this.height);
        this.x = this.startingPoint;
        // Randomly positon cloud along x axis.
        // this.x = Math.random() * this.width;

        // Initial y coordinate of cloud is a random number between 0 and canvas height (stored as percentage of viewport height from top of page).
        // Minus maximum height of clouds, plus 10 padding, to avoid rendering clouds off the top of the screen.
        this.yPerc = Math.random() / 2; 
        this.y = (this.height + 10 + (cloudPointMaxWidth/2)) * this.yPerc;
    }

    // A cloud is essentially a collection of ellipses, of varying size. Each ellipse is refered to as a "cloud point".
    constructor(sketch, newWidth, newHeight, speed){
        // Pass a reference of the sketch object, which contains all p5 methods.
        this.sketch = sketch;
        // Store a local copy of the width and height of the canvas containing this cloud.
        this.width = newWidth;
        this.height = newHeight;

        this.speed = speed;

        this.initialise();
    }

    move() {
        if (this.x++ >= this.width + (this.cloudPoints[0][1]/2)) {
            this.x = this.startingPoint - (this.x - (this.width + (this.cloudPoints[0][1]/2)));
        }

        let newTime = new Date();
        let timeDiff = (newTime - this.lastTime)/1000; //milliseconds
        let offset = (this.width/this.speed)*timeDiff;

        this.x+=offset;

        this.lastTime = newTime;
    }

    updateSize(newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;

        for (let i = 0; i < this.cloudPoints.length; i++) {
            // Update y position of clouds.
            this.y = this.height * this.yPerc;
            // Update cloud offsets.
            this.cloudPoints[i][0] = this.cloudWidth * (i/this.cloudPointNum) * this.height;
            // Update cloud radius'. 
            this.cloudPoints[i][1] = this.cloudPoints[i][2] * this.height;
        }
    }

    draw(){
        this.sketch.rect(
            this.cloudPoints[0][0] + this.x - (this.cloudPoints[0][1]/2), 
            this.y-1,
            this.cloudPoints[this.cloudPoints.length - 1][0] + (this.cloudPoints[this.cloudPoints.length - 1][1]/2) + (this.cloudPoints[0][1]/2),
            10,
            0,
            0,
            5,
            5);

        for (let i = 0; i < this.cloudPoints.length; i++) {
            this.sketch.arc(this.cloudPoints[i][0] + this.x, this.y, this.cloudPoints[i][1], this.cloudPoints[i][1], this.sketch.PI, 0, this.sketch.CHORD);
        }
    }
}

let cloudColor = '#fff';

function clouds( sketch ) {
    // Stores the dimensions of the canvas (relative to the viewport).
    let width;
    let height;
    let clouds = [];
    let cloudSpeeds = [12, 13, 15];
    let initialCloudCount = 4;
    let cloudCountLimit = 15;
    let cloudCreationSuccessRate = 0.005;

    // Setup function, run at initialization.
    sketch.setup = function() {
        width = document.body.clientWidth;
        height = document.body.clientHeight;

        sketch.createCanvas(width, height);

        clouds = Array.from({length: initialCloudCount}, () => new Cloud(sketch, width, height, cloudSpeeds[Math.floor(Math.random() * cloudSpeeds.length)]));

        // cloudInterval = setInterval( function() { 
        //     clouds.push(new Cloud(sketch, width, height)); 
        //     if (clouds.length == maxClouds) {
        //         clearInterval(cloudInterval);
        //     }
        // }, 1500);
    };

    // Called every time the canvas is drawn.
    sketch.draw = function() {

        if (clouds.length < cloudCountLimit) {
            if (Math.random() < cloudCreationSuccessRate ) {
                var speed = cloudSpeeds[Math.floor(Math.random() * cloudSpeeds.length)];
                
                clouds.push(new Cloud(sketch, width, height, speed));
            }
        }

        sketch.clear();
        sketch.noStroke();

        // sketch.smooth();

        // Draw and move clouds.
        sketch.fill(cloudColor);

        clouds.forEach(function(element) { 
            element.move(width, height);
            element.draw();
        });
    };

    // Called every time the canvas is resized.
    sketch.windowResized = function() {
        width = $(window).width(); //document.body.clientWidth;
        height = $(window).height(); //document.body.clientHeight;
        sketch.resizeCanvas(width, height);
        clouds.forEach(function(element) { 
            element.updateSize(width, height);  
        });
    };
}


export function setCloudColor(color) {
    cloudColor = color;
}

export function cloudsSketch(dockItem) {
    return new p5(clouds, dockItem);
}