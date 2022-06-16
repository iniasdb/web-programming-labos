class Ball {
    constructor (canvas, speed, diameter) {
        this.context = canvas.getContext("2d")
        this.xPos = 350;
        this.yPos = 350;
        this.speedX = speed;
        this.speedY = speed+2;
        this.diameter = diameter;
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.gameActive = true;
        this.directionState = 0;
        this.player1Score = 0;
        this.player2Score = 0;
    }

    Move(){
        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

    Draw(){
        this.context.beginPath();
        this.context.arc(this.xPos,this.yPos,this.diameter,0,Math.PI*2,false);
        this.context.fillStyle="red";
        this.context.fill();
    }

    CheckBoundaries(){
        if(this.xPos >=this.canvasWidth) {
            this.pointScored(1);
            if (this.getPlayerPoints(1) == 3) {
                this.gameOver();
            }
        } else if (this.xPos<=0) {
            this.pointScored(2);
            if (this.getPlayerPoints(2) == 3) {
                this.gameOver();
            }
        } else if(this.yPos >=this.canvasHeight || this.yPos <=0) {
            this.speedY*=-1;
        }
    }

    isGameActive() {
        return this.gameActive;
    }

    getXPos() {
        return this.xPos;
    }

    getYPos() {
        return this.yPos;
    }

    getRadius() {
        return this.width/2;
    }

    changeDirection() {
            this.speedX*=-1;
    }

    pointScored(player) {
        if (player == 1) {
            this.player1Score++;
        } else {
            this.player2Score++;
        }
        this.xPos = 350;
        this.yPos = 350;
        this.changeDirection();
    }

    getPlayerPoints(player) {
        if (player == 1) {
            return this.player1Score;
        } else {
            return this.player2Score;
        }
    }

    gameOver() {
        this.gameActive == false;
        this.speedX = 0;
        this.speedY = 0;
    }

}