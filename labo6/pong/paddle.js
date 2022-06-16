class Paddle {
    constructor(canvas, xPos, yPos, speed) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d")
        this.xPos = xPos;
        this.yPos = yPos;
        this.width = 10;
        this.height = 100;
        this.speed = speed;
    }

    Move(mouseYPos){
        if(mouseYPos+50 <= this.canvas.height && mouseYPos >= 0) {
            this.yPos = mouseYPos;
        } else {
        }
    }

    Draw(){
        this.context.beginPath();
        this.context.rect(this.xPos, this.yPos, this.width, this.height)
        this.context.fillStyle="white";
        this.context.fill();
    }

    getXPos() {
        return this.xPos;
    }

    getYPos() {
        return this.yPos;
    }

    setYPos(yPos) {
        this.yPos = yPos;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}