/*Maybe first create few helpful global variables. Can make them local later*/
const grid = document.querySelector("#grid-container");
const box = document.createElement("div");
let size = 16;
const button = document.querySelector(".clear");

/* Creating the canvas grid by iterating. Then adding eventListener for the
mouse movement.*/
function canvas() {
for (i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (j = 0; j < size; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
    box.addEventListener("mouseover", function(e) {
        e.target.style.background = 'black';
        e.target.style.opacity = "1";
    })
}
}
}
/*Need a CLEAR button. Probably similiar to the one I used in the RPS-UI.
Also when clicked, prompt should pop up asking for the size of the new canvas.
That number should link to the first phase.
Sliders probably acceptable and nifty solution too.*/

button.addEventListener("click", function() {
    let newSize = parseInt(prompt("New size?"));
    if (newSize > 1 && newSize < 101) {
        size = newSize;
        canvas();
    } else {
        alert("Please use a number between 2 and 100");
    }
    console.log(size);
})

canvas();