const sketchContainer = document.querySelector(".sketch-container");

setGridSize(2);

const sketchSquare = sketchContainer.childNodes;
sketchSquare.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    });
});

const sizeButton = document.querySelector("#size-button");
sizeButton.addEventListener("click", () => {
    let size = prompt("Enter grid size...");
    let changedHeight = 640/Number(size);
    let changedWidth = 640/Number(size);
    sketchSquare.forEach((div) => {
        div.style.backgroundColor = "white";
        div.style.height = changedHeight + 'px';
        div.style.width = changedWidth + 'px';
    });
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
