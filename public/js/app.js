const bar = document.getElementById("values-display");
const barHeight = document.getElementById("level");
console.log(barHeight)

async function fetchData() {
    const data = await fetch('https://integrated-project-2025-1.vercel.app/api/data')
    // const data = await fetch('http://localhost:3000/api/data')
    if (data.status === 200){
        const response = await data.json()
        console.log(response['value'])
        bar.textContent = response['value'] + ' L';
        updateBar(parseFloat(response['value']));
    }
}

function updateBar(volume) {
    const percentage = (parseFloat(volume) / 2) * 100;

    if (volume >= 0 && volume <= 2) {
        barHeight.style.height = percentage + '%';
        bar.textContent = volume.toFixed(1) + ' L';
    }
}

fetchData();
setInterval(fetchData, 5000);