document.addEventListener('DOMContentLoaded', () => {
    // Gęstość
    const obj = document.getElementById("obj");
    const masa = document.getElementById("masa");
    const zapiszButton = document.getElementById("zapisz");
    const wynikGestosc = document.getElementById("wynikGestosc");

    zapiszButton.addEventListener('click', () => {
        let masaValue = parseFloat(masa.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        let objValue = parseFloat(obj.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        
        if (objValue !== 0) {
            wynikGestosc.textContent = (masaValue / objValue).toFixed(2);
        } else {
            wynikGestosc.textContent = "N/D";
        }
    });

    // Prędkość
    const dystans = document.getElementById("dystans");
    const czas = document.getElementById("czas");
    const obliczPredkoscButton = document.getElementById("obliczPredkosc");
    const wynikPredkosc = document.getElementById("wynikPredkosc");

    obliczPredkoscButton.addEventListener('click', () => {
        let dystansValue = parseFloat(dystans.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        let czasValue = parseFloat(czas.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        
        if (czasValue !== 0) {
            wynikPredkosc.textContent = (dystansValue / czasValue).toFixed(2);
        } else {
            wynikPredkosc.textContent = "N/D";
        }
    });

    // Siła
    const masaSila = document.getElementById("masaSila");
    const przyspieszenie = document.getElementById("przyspieszenie");
    const obliczSilaButton = document.getElementById("obliczSila");
    const wynikSila = document.getElementById("wynikSila");

    obliczSilaButton.addEventListener('click', () => {
        let masaValue = parseFloat(masaSila.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        let przyspieszenieValue = parseFloat(przyspieszenie.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        
        wynikSila.textContent = (masaValue * przyspieszenieValue).toFixed(2);
    });

    // Moc
    const pracaMoc = document.getElementById("praca");
    const czasMoc = document.getElementById("czasMoc");
    const obliczMocButton = document.getElementById("obliczMoc");
    const wynikMoc = document.getElementById("wynikMoc");

    obliczMocButton.addEventListener('click', () => {
        let pracaValue = parseFloat(pracaMoc.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        let czasValue = parseFloat(czasMoc.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        
        if (czasValue !== 0) {
            wynikMoc.textContent = (pracaValue / czasValue).toFixed(2);
        } else {
            wynikMoc.textContent = "N/D";
        }
    });

    // Praca
    const silaPraca = document.getElementById("sila");
    const przemieszczenie = document.getElementById("przemieszczenie");
    const obliczPraceButton = document.getElementById("obliczPraca");
    const wynikPraca = document.getElementById("wynikPraca");

    obliczPraceButton.addEventListener('click', () => {
        let silaValue = parseFloat(silaPraca.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        let przemieszczenieValue = parseFloat(przemieszczenie.value.replace(/[^\d.-]/g, '')); // Usuwa nie-numeryczne znaki
        
        wynikPraca.textContent = (silaValue * przemieszczenieValue).toFixed(2);
    });

    // Nocny tryb
    const themeToggleButton = document.querySelector(".theme-toggle");

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggleButton.textContent = isDarkMode ? '🌞' : '🌙'; // Zmiana ikony
    });
});
