export const clearPage = () => {
    const content = document.getElementById('content'); 
    if (content) {
        content.replaceChildren();
    }
}