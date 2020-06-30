function Ball(x,y,radius,speedx,speedy) {
     this.x = x;
     this.y = y;
     this.radius = radius;
     this.speedx = speedx;
     this.speedy = speedy;
     this.creatCircle = function (ctx) {
          ctx.beginPath();
          ctx.strokeStyle  = "red"
          ctx.arc(this.x,this.y, this.radius,0, 2 * Math.PI);
          ctx.fillStyle ="red";
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
     };
     this.moveBall = function () {
          this.x += this.speedx;
          this.y += this.speedy;


     };
     this.checkCollision = function () {
          if ( this.x <= this.radius || this.x >= canvas.width  - this.radius) this.speedx = -this.speedx;
          if ( this.y <= this.radius) this.speedy = -this.speedy;
     };



}
