function Text() {
     this.showGameOver = function (ctx) {
          ctx.fillStyle = "back";
          ctx.font = "30px Arial";
          ctx.fillText("GAME OVER!", canvas.width/2.5, canvas.height/2);
          ctx.fillText("Press f5 or Reset to resart", canvas.width/3.4, canvas.height/2 + 50);
     }
     this.shoWin = function (ctx) {
          ctx.fillStyle= "back";
          ctx.font=("50px Arial");
          ctx.textAlign="center";
          ctx.fillText("WIN", canvas.width/2, canvas.height/2);
     }
}

