const powerButton = document.getElementById("powerButton");
const energyLevel = document.getElementById("energyLevel");
const energyValue = document.getElementById("energyValue");

let energy = 75;

powerButton.addEventListener("click", function () {

    if (energy > 0) {

        energy -= 15;

        energyLevel.style.width = energy + "%";
        energyValue.textContent = energy + "%";

        powerButton.textContent = "⚡ PODER ATIVADO!";

        document.body.style.background = "#10183a";

        setTimeout(() => {
            powerButton.textContent = "⚡ ATIVAR PODER";
            document.body.style.background = "#070b1a";
        }, 1000);

    } else {

        powerButton.textContent = "🪫 SEM ENERGIA";

        setTimeout(() => {
            energy = 75;

            energyLevel.style.width = energy + "%";
            energyValue.textContent = energy + "%";

            powerButton.textContent = "⚡ ATIVAR PODER";

        }, 2000);
    }
});