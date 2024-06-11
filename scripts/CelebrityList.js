import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()


export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li 
                    data-id="${star.id}" 
                    data-type="celebrity"
                    data-sport="${star.sport}"
                    id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) =>{
        const targetedClick = clickEvent.target;
        if (targetedClick.dataset.type === "celebrity") {
            const celebId = parseInt(targetedClick.dataset.id);
            const celeb = celebrities.find(celeb => celeb.id === celebId);
            if (celeb) {
                window.alert(`${celeb.name} is a ${celeb.sport} star`);
            }
        }
    }
)