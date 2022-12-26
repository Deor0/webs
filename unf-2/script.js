const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 5;

const backGroundLayer1 = new Image();
backGroundLayer1.src = 'background/layer-1.png'
const backGroundLayer2 = new Image();
backGroundLayer2.src = 'background/layer-2.png'
const backGroundLayer3 = new Image();
backGroundLayer3.src = 'background/layer-3.png'
const backGroundLayer4 = new Image();
backGroundLayer4.src = 'background/layer-4.png'
const backGroundLayer5 = new Image();
backGroundLayer5.src = 'background/layer-5.png'

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -(this.width)) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= -(this.width)) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backGroundLayer1, 0.2);
const layer2 = new Layer(backGroundLayer2, 0.4);
const layer3 = new Layer(backGroundLayer3, 0.6);
const layer4 = new Layer(backGroundLayer4, 0.8);
const layer5 = new Layer(backGroundLayer5, 1);

const gameObject = [layer1, layer2, layer3, layer4, layer5];

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameObject.forEach(object => {
        object.update();
        object.draw();
    })

    requestAnimationFrame(animate);
};
animate();
