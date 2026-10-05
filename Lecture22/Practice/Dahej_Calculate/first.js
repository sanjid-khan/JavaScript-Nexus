

const button=document.querySelector('button')

button.addEventListener('click',(event)=>{

    const val1 = Number(document.getElementById("second").value);
    const val2 = Number(document.getElementById("third").value);
    const val3 = Number(document.getElementById("fourth").value);

    if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        alert("Please fill all fields correctly!");
        return;
    }

    let joutuk = 0;

    // Age factor
    if (val1 >= 20 && val1 < 25)
        joutuk += 100000;
    else if (val1 >= 25 && val1 < 30)
        joutuk += 600000;
    else if (val1 >= 15 && val1 < 20)
        joutuk += 30000;

    // Salary factor
    if (val2 > 20000 && val2 <= 30000)
        joutuk += 100000;
    else if (val2 > 30000 && val2 <= 50000)
        joutuk += 150000;
    else if (val2 > 50000 && val2 <= 100000)
        joutuk += 200000;

    // Education factor
    if (val3 > 8 && val3 <= 10)
        joutuk += 100000;
    else if (val3 > 10 && val3 <= 12)
        joutuk += 150000;

    const res = document.getElementById('result');
    res.textContent = "Tumar total Joutok: " + joutuk;

})