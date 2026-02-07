document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-toggle');
    if (languageButton) {
        languageButton.addEventListener('click', () => {
            alert("Sistemul de traduceri se încarcă. Momentan site-ul este disponibil în Română.");
        });
    }
});
