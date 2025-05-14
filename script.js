const sketchContainer = document.querySelector(".sketch-container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid gray";
    div.style.boxSizing = "border-box";
    div.style.height = "40px";
    div.style.width = "40px";
    sketchContainer.appendChild(div);
}

const sketchSquare = sketchContainer.childNodes;
console.log(typeof sketchSquare);
sketchSquare.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    });
});
