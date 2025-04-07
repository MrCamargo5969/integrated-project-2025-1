const bar = document.getElementById("waterBar");

async function fetchData() {
    const data = await fetch('http://192.168.86.7:3000/api/data') //Substitua o IP aqui para poder rodar local
    if (data.status === 200){
        const response = await data.json()
        bar.textContent = response['value'] + ' L';
        updateBar(parseFloat(response['value']));
    }
}

function updateBar(volume) {
    const percentage = (parseFloat(volume) / 2) * 100;

    if (volume >= 0 && volume <= 2) {
        bar.style.height = percentage + '%';
        bar.textContent = volume.toFixed(1) + ' L';
    }
}

fetchData();
setInterval(fetchData, 5000);