import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) =>{
        const targetedClick = clickEvent.target;
        if (targetedClick.dataset.type === "child") {
            const childId = parseInt(targetedClick.dataset.id);
            const child = children.find(child => child.id === childId);
            if (child) {
                window.alert(`${child.name}'s wish is to ${child.wish}`);
            }
        }
    }
)