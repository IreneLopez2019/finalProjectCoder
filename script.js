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
    document.addEventListener("pointerdown", ({ target }) => {
        if (target.tagName !== "IMG") return;

        cursor.classList.add("clicked");
        span.innerText = target.alt;
    });

    document.addEventListener("pointerup", () => {
        cursor.classList.remove("clicked");
        span.innerText = "";
    });
}

// Esta funcion crea el cursor y setea los listeners
function createCursor() {
    cursor = document.createElement("div");
    span = document.createElement("span");
    title = document.queryCommandValue("h1");
    cursor.append(span);
    cursor.classList.add("custom-cursor");
    document.body.append(cursor);
    setCursorListeners();
}

createCursor();
