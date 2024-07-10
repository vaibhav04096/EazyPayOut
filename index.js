// before starting the page enable the database  [npx json-server Backend/data.json --watch --port 5009] 
let company = document.getElementById("Company"); 
let account = document.getElementById("Account"); 
let balance = document.getElementById("Balance")
const tbody = document.getElementById("data-body")
let url = ""
const row1 = document.createElement('tr')

let comp1 = document.createElement("option");
let comp2 = document.createElement("option");

comp1.innerText = "Google";
comp1.value = "Google"
comp2.innerText = "Microsoft";
comp2.value = "Microsoft";
company.append(comp1, comp2);

company.addEventListener("change", function () {
    account.innerHTML = ""
    if (company.value == "Google") {
        let acco0 = document.createElement("option")
        let acco1 = document.createElement("option")
        let acco2 = document.createElement("option")
        acco0.innerText = "Account Name"
        acco0.value = "Account Name"
        acco1.innerText = "GOOG_ACC1"
        acco1.value = "GOOG_ACC1"
        acco2.innerText = "GOOG_ACC2"
        acco2.value = "GOOG_ACC2"
        account.append(acco0,acco1, acco2)
        url=""
        row1.innerHTML=""
        tbody.appendChild(row1)
        tbody.innerHTML = ""
        balance.innerText=""
    } else if (company.value == "Microsoft") {
        let acco0 = document.createElement("option")
        let acco1 = document.createElement("option")
        let acco2 = document.createElement("option")
        acco0.innerText = "Account Name"
        acco0.value = "Account Name"
        acco1.innerText = "MICRO_ACC1"
        acco1.value = "MICRO_ACC1";
        acco2.innerText = "MICRO_ACC2";
        acco2.value = "MICRO_ACC2";
        account.append(acco0,acco1, acco2);
        url=""
        row1.innerHTML=""
        tbody.appendChild(row1)
        tbody.innerHTML = ""
        balance.innerText=""
    } else {
        let defaul = document.createElement("option");
        defaul.innerText = "Account Name";
        defaul.value = "Account Name";
        account.append(defaul);
        url=""
        row1.innerHTML=""
        tbody.appendChild(row1)
        tbody.innerHTML = ""
        balance.innerText=""
    }
});

account.addEventListener("change", function () {

    if (account.value == "GOOG_ACC1") {
        url = "http://localhost:5009/GOOG-ACC1"
        balance.innerText="₹ 90,042.38"
    } else if (account.value == "GOOG_ACC2") {
        url = "http://localhost:5009/GOOG-ACC2"
        balance.innerText="₹ 106,016.29"
    } else if (account.value == "MICRO_ACC1") {
        url = "http://localhost:5009/MICRO-ACC1"
        balance.innerText=" ₹ 103,016.64"
    } else if (account.value == "MICRO_ACC2") {
        url = "http://localhost:5009/MICRO-ACC2"
        balance.innerText=" ₹ 109,016.79"
    } else if(account.value=="Account Name"){
        url=""
        row1.innerHTML=""
        tbody.appendChild(row1)
        tbody.innerHTML = ""
        balance.innerText=""
    }

    if (url !== "") {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                tbody.innerHTML = ""
                    data.forEach(load => {

                        const row = document.createElement('tr');
                        row.innerHTML = `
                        <td>${load.date}</td>
                        <td>${load.credit}</td>
                        <td>${load.account_balance}</td>
                        <td>${load.utr_rrn}</td>
                        <td>${load.account_no_upi}</td>`
                        tbody.appendChild(row)
                        
                    });
                
            })
            .catch(error => console.error('Error fetching data:', error))
    }
})
