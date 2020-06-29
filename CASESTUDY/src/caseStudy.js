let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext ("2d");
let ball = new Ball();
let paddle = new Paddle();
// let score = new Score();

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
}

// function handleBallCollidePaddle(){
//      if (ball.x + ball.radius >= paddle.px && ball.x + ball.radius <= paddle.px + paddle.width &&
//           ball.y + ball.radius >= canvas.height - paddle.width ){
//           ball.speedy = -ball.speedy;
//      }
// }
function f() {

}

function Draw() {

     creatBall();
     creatPaddle();
     // handleBallCollidePaddle();
     drawBrick();

     handleBallCollideBricks();
     requestAnimationFrame(Draw)

}
Draw();