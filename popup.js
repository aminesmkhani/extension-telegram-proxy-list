fetch('https://mtpro.xyz/api/?type=mtproto')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Get the container element
        let tableBody = document.getElementById("json-table-body");

        for (let i = 0; i < data.length; i++) {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${data[i].host}</td><td>${data[i].port}</td><td>${data[i].secret}</td><td>${data[i].country}</td><td>${data[i].ping}</td>`;
            tableBody.appendChild(row);
        }
    });