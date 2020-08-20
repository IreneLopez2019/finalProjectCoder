const docStyles = document.documentElement.style;
let cursor;

// Se esconde el cursor del navegador
docStyles.cursor = "none";

// Setea dos variables para modificar la posición del cursor
function setCursorPosition({ x, y }) {
    docStyles.setProperty("--mouseX", `${x}px`);
    docStyles.setProperty("--mouseY", `${y}px`);
}

// Los listeners
function setCursorListeners() {
    const span = document.querySelector(".custom-cursor span");

    document.addEventListener("pointermove", setCursorPosition);
    document.addEventListener("pointerdown", (e) => {
        setPointerContent(e.target.tagName);
        // span.innerText = target.;
    });

    document.addEventListener("pointerup", () => {
        cursor.classList = "custom-cursor";
        // span.innerText = "";
    });
}

// Esta funcion crea el cursor y setea los listeners
function createCursor() {
    cursor = document.createElement("div");
    cursor = document.createElement("img");
    span = document.createElement("span");
    title = document.queryCommandValue("h1");
    cursor.append(span);
    cursor.classList.add("custom-cursor");
    document.body.append(cursor);
    setCursorListeners();
}

function setPointerContent(tag) {
    const supportedTags = ["IMG", "P", "A"];

    switch (tag) {
        case (tag = supportedTags[0]):
            cursor.classList.add("is-image");
            break;
        case (tag = supportedTags[1]):
            cursor.classList.add("is-paragraph");
            break;
        case (tag = supportedTags[2]):
            cursor.classList.add("is-item");
            break;
        default:
            console.log("No es ninguna de las etiquetas soportadas");
            break;
    }
}

createCursor();