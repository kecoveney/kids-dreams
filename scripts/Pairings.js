    import { getChildren, getCelebrities } from "./database.js"

    const kids = getChildren();
    const celebrities = getCelebrities();

    const findCelebrityMatch = (kid, celebrities) => {
        let matchedCelebrity = null;
    
        for (const celebrity of celebrities) {
            if (celebrity.id === kid.celebrityId) {
                matchedCelebrity = celebrity; // Assign the matched celebrity, not the entire celebrities array
                break; // Once matched, no need to continue the loop
            }
        }
    
        return matchedCelebrity;
    };

    export const Pairings = () => {
        let html = ""
        html = "<ul>"

        for (const kid of kids) {
            const kidsStar = findCelebrityMatch(kid, celebrities)
            html += `
                <li>
                    ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
                </li>
            `
        }

        html += "</ul>"

        return html
    }
