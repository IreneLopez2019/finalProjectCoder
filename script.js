const docStyles = document.documentElement.style;
let cursor;

// Se esconde el cursor del navegador
docStyles.cursor = "none";

// Setea dos variables para modificar la posición del cursor
function setCursorPosition({ x, y }) {
    docStyles.setProperty("--mouseX", `${x}px`);
    docStyles.setProperty("--mouseY", `${y}px`);
}

function setTag({ target }) {
    const tag = isDescendantOfFooter(target) ? "FOOTER" : target.tagName;
    setPointerContent(tag);
}

function restartCustomCursor() {
    cursor.classList = "custom-cursor";
}

// Los listeners
function setCursorListeners() {
    const events = [
        {
            name: "pointerdown",
            callbacks: setCursorPosition,
        },
        {
            name: "pointerup",
            callbacks: restartCustomCursor,
        },
        {
            name: "pointermove",
            callbacks: [setCursorPosition, setTag],
        },
    ];

    for (let event of events) {
        const { name, callbacks } = event;

        document.addEventListener(name, (e) => {
            if (callbacks.length) {
                for (let callback of callbacks) callback(e);
            } else {
                callbacks(e);
            }
        });
    }
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
            cursor.classList = "custom-cursor image-white color-black";
            break;

        case supportedTags[3]:
            cursor.classList = "custom-cursor image-white color-blue";
            cursor.classList.remove("color-default")

        break;
        default:
            cursor.classList = "custom-cursor color-dafault";
            cursor.classList.remove(
                "color-black",
                "image-carousel",
                "color-indigo",
                "color-blue",
                "image-white"
            );
        break;
    }
}

createCursor();
