const temp = document.getElementsByTagName("span")

async function fetchData() {
    const data = await fetch('http://localhost:3000/api/data')
    if (data.status === 200){
        const response = await data.json()
        temp[0].textContent = response['value'];
        console.log(response['value']);
        console.log(temp[0].textContent);
    }
}

fetchData();
setInterval(fetchData, 5000);