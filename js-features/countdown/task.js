const changeNumber = function() {
    const outputNumber = document.getElementById("timer");
    outputNumber.textContent -= 1;
}

setInterval(changeNumber, 1000);

let timerId = setInterval(() => alert("Вы победили в конкурсе!"), 59000);

clearInterval(changeNumber);
