
const temp = document.getElementsByTagName("span")

async function fetchData() {
    const data = await fetch('http://localhost:8080/api/data')
    if (data.status === 200){
        const response = await data.json()
        temp[0].textContent = response['temperatura'];
        console.log(response['temperatura']);
        console.log(temp[0].textContent);
    }
}

fetchData();
setInterval(fetchData, 5000);