export default class Star {
    constructor(clientWidth, clientHeight) {
        this.x = Math.random() * clientWidth;
        this.y = Math.random() * clientHeight;
        this.w = 2;
        this.h = 2;
    }

    draw(sketch) {
        sketch.noStroke();
        sketch.fill(255, 255, 200);
        sketch.ellipse(this.x, this.y, this.w, this.h);

        if (this.w < 2) {
            let offset = Math.random() * 0.25;
            this.w += offset;
            this.h += offset;
        } else {
            let offset = Math.random() * -0.25;
            this.w += offset;
            this.h += offset;
        }
    }
}