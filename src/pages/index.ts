// när användaren kommer in på sidan (DOMen laddats in), ska den omdirigeras till index.html
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.location.replace('login.html');
    }, 3000); // 4000 ms = 4 sekunder
});