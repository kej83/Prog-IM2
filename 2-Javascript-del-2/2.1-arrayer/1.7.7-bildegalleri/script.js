let bilder = ["./bilder/elg.jpg", "./bilder/fjell.jpg", "./bilder/skog.jpg"];
let bildeTekster = ["En elg", "Vakkert fjell", "Koselig skog"];
let currentIndex = 0;
// Bytt bilde hvert 2. sekund
setInterval(byttBilde, 2000);

function byttBilde() {
    // 1. Øk indeks med 1
    currentIndex++;
    // 2. Endre url i img
    document.getElementById("mittBilde").src = bilder[currentIndex]; 
    // 3. TODO: Endre bildetekst i p-elementet med id bildeTekst
    // TODO: begynne på nytt hvis indeks er for stor
}