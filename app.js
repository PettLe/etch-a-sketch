//FEW USEFUL GLOBAL VARIABLES
const grid = document.querySelector("#grid-container");
const box = document.createElement("div");
let size = 16;
const button = document.querySelector(".clear");

/* CANVAS GRID
Creating the canvas grid by iterating. Then adding eventListener for the
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

/*THE CLEAR BUTTON*/
button.addEventListener("click", function() {
    let newSize = parseInt(prompt("New size?"));
    if (newSize > 1 && newSize < 101) {
        size = newSize;
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
       canvas();
    } else {
        alert("Please use a number between 2 and 100");
    }
    console.log(size);
})

canvas();