function openBox() {
    // deres kode her
    // <p id="result"
    // 0. Lag tilfeldig tall 0-1
    let tall = Math.random();
    let txt = "Du fikk en ";
    // 1. Sjekk om legendary (2 %)
    if (tall < 0.02) {
        txt += "legendary item.";
    } // Epic 8 %
    else if (tall < 0.10) {
        txt += "epic item.";
    } // Rare 20 %
    else if (tall < 0.30) {
        txt += "rare item.";
    } // common 70 %
    else {
        txt += "common item.";
    }

    document.getElementById("result").textContent = txt;
}
