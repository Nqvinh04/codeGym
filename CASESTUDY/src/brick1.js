// gạch
let BrickConfig = {
     offsetX: 25,
     offsetY: 25,
     margin: 24,
     width: 75,
     height: 15,
     totalRow: 5,
     totalCol: 7
}

let BrickList = [];

for(let i = 0; i < BrickConfig.totalRow; i++){
     for(let j = 0; j < BrickConfig.totalCol; j++){
          BrickList.push({
               x: BrickConfig.offsetX + j * (BrickConfig.width + BrickConfig.margin),
               y: BrickConfig.offsetY + i * (BrickConfig.height + BrickConfig.margin),
               // kiểm tra điều kiện xem viên gạch đã vỡ hay chưa
               isBroken: false
          })
     }
}

function drawBrick(){
     BrickList.forEach(function (b){
          if (!b.isBroken){
               context.beginPath();
               context.rect(
                    b.x,
                    b.y,
                    BrickConfig.width,
                    BrickConfig.height
               );
               context.fill();
               context.closePath();
          }

     });

}

// function handleBallCollideBricks(){
//      BrickList.forEach(function (b){
//           if(!b.isBroken){
//                if(ball.x >= b.x && ball.x <= b.x + BrickConfig.width &&
//                     ball.y + ball.radius >= b.y && ball.y - ball.radius <= b.y + BrickConfig.height){
//                     ball.dy = -ball.dy;
//                     b.isBroken = true;
//                     // UserScore += 1;
//                     // if (UserScore >= MaxScore){
//                     //      isGameOver = true;
//                     //      isGameWin = true;
//                     // }
//                }
//           }
//      })
// }