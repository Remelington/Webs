const chessboard = document.getElementById("chessboard");
const resetButton = document.getElementById("reset");

for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        const square = document.createElement("div");
        square.classList.add("square");
        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
        }
        square.addEventListener("click", () => {
            square.classList.toggle("clicked");
        });

        chessboard.appendChild(square);
    }
}

resetButton.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(square => {
        square.classList.remove("clicked");
    });
});
