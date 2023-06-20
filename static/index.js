document.getElementById("medicineForm").addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e)

    var medName = document.getElementById("name").value;
    var expiry = document.getElementById("expiry").value;
    var medRecurrence = document.getElementById("recurrence").value;
    var medTempterature = document.getElementById("temperature").value;
    var medHumidity = document.getElementById("humidity").value;
    jsonObject = {
            medName,
            expiryDate: expiry,
            medRecurrence,
            medTempterature,
            medHumidity
    }
    
    var str = JSON.stringify(jsonObject);
    console.log(str)
    fetch("http://localhost:3000/submit", {
        // mode: "cors",
        body: str,
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).catch(err => console.error(err));
})

function home() {
    window.location.href = "main.html";
}