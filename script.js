document.getElementById("contactBtn").addEventListener("click", function() {
    const contactInfo = document.getElementById("contactInfo");
    if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
        this.textContent = "Skrýt e-mail";
    } else {
        contactInfo.style.display = "none";
        this.textContent = "Zobrazit e-mail";
    }
});