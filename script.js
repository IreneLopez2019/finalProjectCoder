const docStyles = document.documentElement.style;
let cursor;

// Se esconde el cursor del navegador
docStyles.cursor = "none";

// Setea dos variables para modificar la posición del cursor
function setCursorPosition({ x, y }) {
    docStyles.setProperty("--mouseX", `${x}px`);
    docStyles.setProperty("--mouseY", `${y}px`);
}

// Agrega el estilo cuando clickeas
function setClickedStyle() {
    cursor.classList.add("clicked");
}

// Remueve el estilo cuando levantas el cursor
function removeClickedStyle() {
    cursor.classList.remove("clicked");
}

// Los listeners
function setCursorListeners() {
    document.addEventListener("pointermove", setCursorPosition);
    document.addEventListener("pointerdown", setClickedStyle);
    document.addEventListener("pointerup", removeClickedStyle);
}

// Esta funcion crea el cursor y setea los listeners
function createCursor() {
    cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.append(cursor);
    setCursorListeners();
}

createCursor();
