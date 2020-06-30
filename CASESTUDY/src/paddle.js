// thanh chắn
function Paddle(width,height,speed) {
     this.width = width;
     this.height = height;
     this.px = 300;
     this.py = canvas.height - this.height;
     this.speed = speed;
     this.isMovingLeft = false;
     this.isMovingRight = false;
     this.creatRec = function (ctx) {
          ctx.beginPath();
          ctx.rect(this.px, this.py, this.width, this.height);
          ctx.fillStyle ="red";
          ctx.fill();
          ctx.strokeStyle  = "red";
          ctx.stroke();
          ctx.closePath();
     };
     // bắt sự kiện phím
     this.movePaddle = function () {
          document.addEventListener('keyup',function(event){
               if (event.keyCode === 37){
                    paddle.isMovingLeft = false;
               } else if (event.keyCode === 39) {
                    paddle.isMovingRight = false;
               }
          });
          document.addEventListener('keydown',function(event){
               if (event.keyCode === 37){
                    paddle.isMovingLeft = true;
               } else if (event.keyCode === 39) {
                    paddle.isMovingRight = true;
               }
          });
     };
     // di chuyển thanh chắn sang 2 bên
     this.checkPaddleCollision = function() {
          if(this.isMovingLeft){
               this.px -= this.speed;
          } else if (this.isMovingRight){
               this.px += this.speed;
          }
          if(this.px < 0){
               this.px = 0;
          } else if (this.px > canvas.width - this.width){
               this.px = canvas.width - this.width;
          }
     };
     // kiem tra va cham giua bong va thanh chan
     this.checkPaddleCollisionBall = function () {
          if (ball.x + ball.radius >= this.px && ball.x + ball.radius <= this.px + this.width &&
               ball.y + ball.radius >= canvas.height - this.height && ball.x + ball.radius  ){
               ball.speedy = -ball.speedy;
          }
          if (Math.sqrt(Math.pow(ball.x-this.px,2)+Math.pow(ball.y-this.py,2)) <ball.radius) {
               // this.speedX = -this.speedX;
               this.speedY = -this.speedY;
          }
          if (Math.sqrt(Math.pow(ball.x-this.px-this.width,2)+Math.pow(ball.y-this.py,2)) <ball.radius) {
               // this.speedX = -this.speedX;
               this.speedY = -this.speedY;
          }

     }
}