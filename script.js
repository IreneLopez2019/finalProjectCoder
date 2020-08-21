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
    document.addEventListener("pointermove", setCursorPosition);
    document.addEventListener("pointermove" , (e) => {
        if (isDescendantOfFooter(e.target)) {
            setPointerContent("FOOTER");
        } else {
            setPointerContent(e.target.tagName);
        }

        console.log(isDescendantOfFooter(tag));
    });

    document.addEventListener("pointerup", () => {
        cursor.classList = "custom-cursor";
    });
}

function isDescendantOfFooter(child) {
    let footer = document.querySelector("footer");

    if (child === footer || footer.contains(child)) return "FOOTER";
    return false;
}

// Esta funcion crea el cursor y setea los listeners
function createCursor() {
    cursor = document.createElement("div");
    cursor = document.createElement("div");
    span = document.createElement("span");
    title = document.queryCommandValue("h1");
    cursor.append(span);
    cursor.classList.add("custom-cursor");
    document.body.append(cursor);
    setCursorListeners();
}

function setPointerContent(tag) {
    const supportedTags = ["IMG", "P", "NAV", "FOOTER"];

    switch (tag) {
        case supportedTags[0]:
            cursor.classList.add(
                "custom-cursor",
                "color-black",
                "image-carousel"
            );
            break;

        case supportedTags[1]:
            cursor.classList.add("is-paragraph");
            break;

        case supportedTags[2]:
            cursor.classList.add("color-indigo", "image-white");
            break;

        case supportedTags[3]:
            cursor.classList = "custom-cursor image-white color-blue";

            break;
        default:
            cursor.classList.remove(
                "color-black",
                "image-carousel",
                "is-paragraph",
                "color-indigo",
                "color-blue",
                "image-white"
            );
            break;
    }
}

createCursor();
