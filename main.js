let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let chances = 5;
let chanceArea = document.getElementById("chance-area");
let userValueHistory = [];
let gameOver = false;
let resultAreaImg = document.querySelector(".main-img");


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
    userInput.value = "";
});

function randomNumber() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    console.log("정답:", computerNumber);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1에서 100까지의 숫자를 입력해주세요.";
        return;
    }

    if (userValueHistory.includes(userValue)) {
        resultArea.textContent = "이미 입력된 숫자입니다. 다른 숫자를 입력해주세요.";
        return;
    }

    chances--;
    chanceArea.textContent = `남은기회: ${chances}회`;

    if (userValue < computerNumber) {
        resultAreaImg.src =
            "https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
        resultArea.textContent = "Up";
    } else if (userValue > computerNumber) {
        resultAreaImg.src =
            "https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
        resultArea.textContent = "Down";
    } else {
        resultAreaImg.src =
            "https://storage.googleapis.com/jjalbot/2016/10/B1iqI6UA/20160820_57b8357a2b0fd.jpg";
        resultArea.textContent = "정답입니다.";
        chanceArea.textContent = "살았다!!!";
        gameOver = true;
    }

    userValueHistory.push(userValue);
    console.log(userValueHistory);

    if (chances < 1) {
        gameOver = true;
    }
    if (gameOver == true) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    randomNumber();
    chances = 5;
    chanceArea.textContent = `남은 기회: ${chances}회`;
    resultArea.textContent = "결과";
    userValueHistory = [];
    playButton.disabled = false;
    gameOver = false;
    resultAreaImg.src = "https://media1.giphy.com/media/9DinPR8bzFsmf74j9W/giphy.gif";

}

randomNumber();

