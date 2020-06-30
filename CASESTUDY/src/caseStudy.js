let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext ("2d");
let ball = new Ball(150,150,5, 3,3);
let paddle = new Paddle( 70,10,8);
let brick = new BrickConfig(25,25, 24,75,15,5,7);
let isGameOver = false;
let isWinOver = false;

let text = new Text();

function creatBall() {
     context.clearRect(0,0,canvas.width,canvas.height);
     ball.creatCircle(context);
     ball.moveBall();
     ball.checkCollision();
}


function creatPaddle() {
     paddle.creatRec(context);
     paddle.movePaddle();
     paddle.checkPaddleCollision();
     paddle.checkPaddleCollisionBall();
}
function drawBrick() {
     brick.creatBrick(context);
     brick.collisionCheck();
     brick.drawScore(context);

}

function gameOver() {
     if (ball.y >= canvas.height-ball.radius){
          isGameOver=true;
          ball.speedx = 0;
          ball.speedy =0;
          text.showGameOver(context);
     }
     if ((ball.x + ball.radius === paddle.px || ball.x - ball.radius === paddle.px + paddle.width) && ball.y >= paddle.py
          && ball.y <= paddle.py + paddle.height){
          ball.speedx = 0;
          ball.speedy = 0;
          text.showGameOver(context);
     }
}
function gameWin() {
     if (brick.score >= brick.MaxScore){
          isWinOver = true;
          ball.speedx = 0;
          ball.speedy = 0;
          text.shoWin(context);
     }
}
function gameStart() {

     creatBall();
     creatPaddle();
     drawBrick();
     // drawText();

     requestAnimationFrame(gameStart);
     gameOver();
     gameWin();
}

function startGame() {
     gameStart()
}

function resetGame() {
     window.location.reload();
}