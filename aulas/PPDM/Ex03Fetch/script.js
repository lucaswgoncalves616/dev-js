const fatogatoElement = document.getElementById("fatogato");
const buscarfatoElement = document.getElementById("buscarfato");

async function buscarGato() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const dados = await response.json();
        fatogatoElement.textContent = dados.fact;
    } catch (e) {
        console.error("Erro ao buscar: " + e);
    }
}

buscarfatoElement.addEventListener("click", buscarGato);
buscarGato();