const sketchContainer = document.querySelector(".sketch-container");

setGridSize(16);

const sketchSquare = sketchContainer.childNodes;
addHoverEffect(sketchSquare);

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", () => {
    let size = prompt("Enter grid size...");
    clearGrid();
    setGridSize(size);
    addHoverEffect(sketchSquare);
});

function setGridSize(size) {
    let area = size * size;
    let height = 640/size;
    let width = 640/size;
    for (let i = 0; i < area; i++) {
        const div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.boxSizing = "border-box";
        div.style.height = height + 'px';
        div.style.width = width + 'px'; 
        sketchContainer.appendChild(div);
    }
}

function clearGrid() {
    while (sketchContainer.hasChildNodes()) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
}

function addHoverEffect(element, color = "black") {
    element.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = color;
        });
    });
}
