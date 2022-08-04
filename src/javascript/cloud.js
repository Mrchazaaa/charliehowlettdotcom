class CloudPoint {
    constructor(xOffset, radius, ellipseRadius) {
        this.xOffset = xOffset;
        this.radius = radius;
        this.ellipseRadius = ellipseRadius;
    }
}

// Class used to represent clouds in the background sketch.
export default class Cloud {

    // A cloud is essentially a collection of ellipses, of varying size. Each ellipse is refered to as a "cloud point".
    constructor(sketch, containerWidth, containerHeight, speed, debug) {
        this.sketch = sketch;
        this.containerWidth = containerWidth;
        this.containerHeight = containerHeight;

        this.speed = speed;

        this.initialise();
        this.debug = debug;
    }

    getCloudWidth() {
        var firstCloudPoint = this.cloudPoints[0];
        var lastCloudPoint = this.cloudPoints[this.cloudPoints.length - 1];

        return lastCloudPoint.xOffset
            + (lastCloudPoint.radius/2)
            + (firstCloudPoint.radius/2);
    }

    // Dynamically generates the clouds shape and sets its position to just off the left side of the screen.
    initialise() {

        // Stores x offset and radius of each cloud point that forms this cloud (px units).
        this.cloudPoints = [];
        // Maximum number of cloud points that can be used to make a cloud.
        const maxCloudPoints = 5;
        // Minimum number of cloud points that can be used to make a cloud.
        const minCloudPoints = 3;
        // The average width of any cloud (in percentage of screen width).
        this.averageCloudWidth = 0.2;

        // Randomly generate the number of cloud points that this cloud will have.
        const cloudPointNum = Math.round(random(minCloudPoints, maxCloudPoints));

        // The minimum radius of any cloud point in a cloud (in percentage of screen width).
        const cloudPointMinWidth = (this.averageCloudWidth/(cloudPointNum)) * 1.5;
        // The maximum radius of any cloud point in a cloud (in percentage of screen width).
        const cloudPointMaxWidth = cloudPointMinWidth*2.5;

        console.log(`max width: ${cloudPointMaxWidth}`);
        console.log(`min width: ${cloudPointMinWidth}`);
        console.log(`point num: ${cloudPointNum}`);

        // Generate a cloud point with random a relative x offset and radius to make a cloud looking blob.
        for (let i = 0; i < cloudPointNum; i++) {
            let ellipseRadius;

            var isMiddle = isMiddleElement(cloudPointNum, i);
            switch(isMiddle) {
                // Start of the cloud should be thinner, so allow ellipses to be bigger
                // or equal in size to the previous cloud point.
                case ArrayPosition.FirstElement:
                    ellipseRadius = random(cloudPointMinWidth, cloudPointMaxWidth, 0.15);
                    console.log(`${isMiddle} ${ellipseRadius}`);
                    break;
                case ArrayPosition.FirstHalf:
                    ellipseRadius = random(this.cloudPoints[i-1].ellipseRadius, cloudPointMaxWidth, 0.5);
                    console.log(`${isMiddle} ${ellipseRadius}`);
                    break;
                case ArrayPosition.Middle:
                    ellipseRadius = random(this.cloudPoints[i-1].ellipseRadius, cloudPointMaxWidth);
                    console.log(`${isMiddle} ${ellipseRadius}`);
                    break;
                case ArrayPosition.LastHalf:
                    ellipseRadius = random(cloudPointMinWidth, this.cloudPoints[i-1].ellipseRadius, 0.5);
                    console.log(`${isMiddle} ${ellipseRadius}`);
                    break;
                case ArrayPosition.LastElement:
                    ellipseRadius = random(cloudPointMinWidth, this.cloudPoints[i-1].ellipseRadius, 0.15);
                    console.log(`${isMiddle} ${ellipseRadius}`);
                    break;
            }

            let xOffset = this.averageCloudWidth * (i/cloudPointNum) * this.containerHeight;
            let radius = ellipseRadius * this.containerHeight;

            // Store percentage value of this cloud points radius so that it can be updated on screen size change.
            this.cloudPoints.push(new CloudPoint(xOffset, radius, ellipseRadius));

            this.lastTime = new Date();
        }

        // Initial x coordinate of cloud is set so that the cloud starts just off the left side of the screen.
        this.startingPoint = -this.getCloudWidth() + this.cloudPoints[0].radius/2;

        // Randomly positon cloud along x axis.
        this.x = this.containerWidth * Math.random();

        // Initial y coordinate of cloud is a random number between 0 and canvas height (stored as percentage of viewport height from top of page).
        // Minus maximum height of clouds, plus 10 padding, to avoid rendering clouds off the top of the screen.
        this.yPerc = Math.random() / 2;
        this.y = (this.containerHeight + 10 + (cloudPointMaxWidth/2)) * this.yPerc;
    }

    move() {
        if (this.x++ >= this.containerWidth + (this.cloudPoints[0].radius/2)) {
            this.x = this.startingPoint - (this.x - (this.containerWidth + (this.cloudPoints[0].radius/2)));
        }

        let newTime = new Date();
        let timeDiff = (newTime - this.lastTime)/1000; //milliseconds
        let offset = (this.containerWidth/this.speed)*timeDiff;

        this.x+=offset;

        this.lastTime = newTime;
    }

    updateSize(containerWidth, containerHeight) {
        this.containerWidth = containerWidth;
        this.containerHeight = containerHeight;

        for (let i = 0; i < this.cloudPoints.length; i++) {
            // Update y position of clouds.
            this.y = this.containerHeight * this.yPerc;
            // Update cloud offsets.
            this.cloudPoints[i].xOffset = this.averageCloudWidth * (i/this.cloudPoints.length) * this.containerHeight;
            // Update cloud radius'.
            this.cloudPoints[i].radius = this.cloudPoints[i].ellipseRadius * this.containerHeight;
        }
    }

    draw(cloudColor) {

        this.sketch.fill(cloudColor);
        // this.sketch.fill("green");
        this.sketch.rect(
            this.cloudPoints[0].xOffset
                + this.x
                - (this.cloudPoints[0].radius/2),
            this.y-1,
            this.getCloudWidth(),
            10,
            0,
            0,
            5,
            5);


        for (let i = 0; i < this.cloudPoints.length; i++) {
            // this.sketch.stroke('purple');
            this.sketch.fill(cloudColor);
            this.sketch.arc(this.cloudPoints[i].xOffset + this.x, this.y, this.cloudPoints[i].radius, this.cloudPoints[i].radius, this.sketch.PI, 0, this.sketch.CHORD);
        }
        for (let i = 0; i < this.cloudPoints.length; i++) {
            // this.sketch.fill("red");
            // this.sketch.circle(this.cloudPoints[i].xOffset + this.x, this.y, 5);
        }
    }
}

function random(min, max, quartile = 1) {
    const quartileMax = (max - min) * quartile;

    return (Math.random() * quartileMax) + min;
}

const ArrayPosition = {
    FirstElement: "FirstElement",
    FirstHalf: "FirstHalf",
    Middle: "Middle",
    LastHalf: "LastHalf",
    LastElement: "LastElement"
};

function isMiddleElement(arrayLength, index) {
    if (index == 0) {
        return ArrayPosition.FirstElement;
    }

    if (index == arrayLength - 1) {
        return ArrayPosition.LastElement;
    }

    if (index == Math.floor((arrayLength - 1)/2) || index == Math.ceil((arrayLength - 1)/2)) {
        return ArrayPosition.Middle;
    }

    for (var i = 0; i < index; i++) {
        if (index == Math.floor((arrayLength - 1)/2) - 1 || index == Math.ceil((arrayLength - 1)/2) - 1) {
            return ArrayPosition.LastHalf;
        }
    }

    return ArrayPosition.FirstHalf;
}