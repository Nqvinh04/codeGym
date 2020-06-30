function BrickConfig (offsetX,offsetY,margin,width,height,totalRow,totalCol) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.margin = margin;
    this.width = width;
    this.height = height;
    this.totalRow = totalRow;
    this.totalCol = totalCol;
    this.score = 0;
    let brickList = [];

    this.MaxScore = this.totalRow * this.totalCol;
    this.drawScore = function (ctx) {
        ctx.beginPath();
        ctx.font = "20px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Score: " + this.score, 20, 20);
        ctx.closePath();
    }
    for (let i = 0; i < this.totalRow; i++) {
        brickList[i] = [];
        for (let j = 0; j < this.totalCol; j++) {
            brickList[i][j] = {x: 0, y: 0, status: 1};
        }
    }
    this.collisionCheck = function () {
        for (let i = 0; i < this.totalRow; i++) {
            for (let j = 0; j < this.totalCol; j++) {
                let b = brickList[i][j];
                if (b.status == 1) {
                    if (ball.x > b.x && ball.x < b.x + this.width && ball.y > b.y && ball.y < b.y + this.height) {
                        ball.speedy = -ball.speedy;
                        b.status = 0;
                        this.score += 1 ;
                        // if ( this.score  >= this.MaxScore){
                        //     // isGameOver = true;
                        //     // isWinOver = true;
                        //     this.shoWin(context);
                        // }
                    }
                }
            }
        }
    }

        this.creatBrick = function (ctx) {
            for (let i = 0; i < this.totalRow; i++) {
                for (let j = 0; j < this.totalCol; j++) {
                    if (brickList[i][j].status == 1) {
                        let brickX = (this.offsetX + j * (this.width + this.margin));
                        let brickY = (this.offsetY + i * (this.height + this.margin));
                        brickList[i][j].x = brickX;
                        brickList[i][j].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, this.width, this.height);
                        ctx.fillStyle = "red";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
}