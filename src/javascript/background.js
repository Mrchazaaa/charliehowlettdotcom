import p5 from 'p5/lib/p5.min.js';
import Cloud from './cloud';

let cloudColor = '#fff';

export function setTheme(theme) {
    let newCloudColor;

    switch(theme) {
        case "light":
            newCloudColor = "#fff";
            break;
        case "dark":
            newCloudColor = "#ADB5BD";
            break;
    }

    cloudColor = newCloudColor;
}

export function cloudsSketch(dockItem) {
    return new p5(sketch => {
        // Stores the dimensions of the canvas (relative to the viewport).
        let width = dockItem.clientWidth;
        let height = dockItem.clientHeight;
        let clouds = [];
        let cloudSpeeds = [12, 13, 15];
        let initialCloudCount = 5;
        let cloudCountLimit = 0;
        // let cloudCreationSuccessRate = 0.005;

        // Setup function, run at initialization.
        sketch.setup = function() {
            sketch.createCanvas(width, height);

            clouds = Array.from(
                {length: initialCloudCount},
                () => new Cloud(sketch, width, height, cloudSpeeds[Math.floor(Math.random() * cloudSpeeds.length)]));

            for (var i = 0; i < cloudCountLimit; i++)
            {
                var speed = cloudSpeeds[Math.floor(Math.random() * cloudSpeeds.length)];

                clouds.push(new Cloud(sketch, width, height, speed));
            }
        };

        // Called every time the canvas is drawn.
        sketch.draw = function() {
            sketch.clear();
            sketch.noStroke();

            // sketch.smooth();

            clouds.forEach(function(element) {
                element.move(width, height);
                element.draw(cloudColor);
            });
        };

        // Called every time the canvas is resized.
        sketch.windowResized = function() {
            width = dockItem.clientWidth;
            height = dockItem.clientHeight;

            sketch.resizeCanvas(width, height);

            clouds.forEach(function(element) {
                element.updateSize(width, height);
            });
        };
    }, dockItem);
}
