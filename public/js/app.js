const bar = document.getElementById("waterBar");

async function fetchData() {
    const data = await fetch('http://192.168.86.7:3000/api/data')
    if (data.status === 200){
        const response = await data.json()
        bar.textContent = response['value'] + ' L';
        updateBar(parseFloat(response['value']));
    }
}

function updateBar(volume) {
    const percentage = (parseFloat(volume) / 2) * 100; // Converte litros em porcentagem (0 a 2L)

    if (volume >= 0 && volume <= 2) {
        bar.style.height = percentage + '%';
        bar.textContent = volume.toFixed(1) + ' L'; // Mostra com uma casa decimal
    }
}

fetchData();
setInterval(fetchData, 5000);