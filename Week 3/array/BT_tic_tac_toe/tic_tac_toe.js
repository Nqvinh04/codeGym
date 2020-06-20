let count = 0;
let b = document.getElementById("caro");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board [i] = new Array(".", ".", ".", ".", ".");
}

for (let i = 0; i < 5; i++){
    data += "</br>";
    for (let j = 0; j < 5; j++){
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "</br></br><input type = 'button' value='Change value' onclick ='changeValue()' >"
b.innerHTML = data;

function changeValue() {
    count++;
    if (count % 2 === 0) {
        let positionX = prompt("X: ");
        let positionY = prompt("Y: ");
        data = " ";
        board[positionX][positionY] = "X";
        for (let i = 0; i < 5; i++) {
            data += "</br>";
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        data += "</br></br><input type = 'button' value='Change value' onclick ='changeValue()' >"
        b.innerHTML = "<hr/>" + data;
    } else {
        let positionX = prompt("X: ");
        let positionY = prompt("Y: ");
        data = " ";
        board[positionX][positionY] = "O";
        for (let i = 0; i < 5; i++) {
            data += "</br>";
            for (let j = 0; j < 5; j++) {
                data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
            }
        }
        data += "</br></br><input type = 'button' value='Change value' onclick ='changeValue()' >"
        b.innerHTML = "<hr/>" + data;
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (board[i][j] == board[i + 1][j] && board[i + 2][j] == board[i][j] && board [i][j] === 'X' ||
                board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && board[i][j] === 'X' ||
                board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] === 'X' ||
                board[i][j] == board[i + 1][j - 1] && board[i][j] == board[i + 2][j - 2] && board[i][j] === 'X') {
                alert('x win');
            }
            if (board[i][j] == board[i + 1][j] && board[i + 2][j] == board[i][j] && board [i][j] === 'O' ||
                board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && board[i][j] === 'O' ||
                board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] === 'O' ||
                board[i][j] == board[i + 1][j - 1] && board[i][j] == board[i + 2][j - 2] && board[i][j] === 'O') {
                alert('o win');
            }

        }
    }
}


