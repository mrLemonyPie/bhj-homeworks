let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {

    function getHole (i) {
        let holeClick = document.getElementById(`hole${i}`);
        return holeClick;
    }

    let hole = getHole (i);
    
    hole.onclick = function() {
        if (hole.className.includes("hole_has-mole") === true) {
            dead.innerHTML++;
        } else {
            lost.innerHTML++;
        }

        if (dead.textContent == 10) {
            alert ("Ура! Вы победили!");
            dead = 0;
            lost = 0;
        } else if (dead.textContent === 5) {
            alert ("Вы проиграли. Попробуйте еще.");
            dead = 0;
            lost = 0;
            }
    }
}