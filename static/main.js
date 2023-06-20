window.addEventListener("load", fetchdata)
function fetchdata() {
    console.log("hello")
    fetch("http://localhost:3000/json", {
        mode: "cors"
    }).then((result) => {
        return result.json();
    }).then((data) => {
        let li = `<tr><th>Name</th><th>Expiry Date</th><th>Recurrence</th><th>Temperature</th> <th>Humidity</th></tr>`;

        // 3. Loop through each data and add a table row
        data.forEach((med) => {
            li += `<tr>
        <td>${med.medName}</td>
        <td>${med.expiryDate} </td>
        <td>${med.medRecurrence}</td>
        <td>${med.medTempterature}</td>
        <td>${med.medHumidity}</td>
      </tr>`;
        });

        // 4. DOM Display result
        document.getElementById("users").innerHTML = li;
    });
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout('startTime()', 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
