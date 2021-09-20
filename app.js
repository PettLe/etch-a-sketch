/*Maybe first create few helpful global variables. Can make them local later*/
const grid = document.querySelector("#grid-container");
const box = document.createElement("div");


/* First we need to create a grid. Use loops to iterate through it. First one for
a single row and number of boxes, second one for the number of rows.
Probably need to use querySelectors, createElement and appendChild*/

for (i= 0; i<16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (j= 0; j<16; j++) {
    const box = document.createElement("div");
    box.classList.add("box");
    row.appendChild(box);
    box.addEventListener("mouseover", function(e) {
        e.target.style.background = 'blue';
    })
}
}
/*Using eventListener (hover?) make the boxes change color. Or maybe create
a CSS class :hover and call that with the use of a eventListener?
It's probably possible. Maybe easier.*/
box.addEventListener("mouseover", function(e) {
    e.target.style.background = 'blue';
})

/*Need a CLEAR button. Probably similiar to the one I used in the RPS-UI.
Also when clicked, prompt should pop up asking for the size of the new canvas.
That number should link to the first phase.
Sliders probably acceptable and nifty solution too.*/

/*Call the function immediately when the page loads?*/

