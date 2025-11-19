var form = document.getElementById("formulario");

function calcular() {
    total = 0;

    document.querySelectorAll('input[type="checkbox"]').forEach(extra => {
        if(extra.checked) {
            total += Number(extra.value);
        }
    })

    var marca = document.getElementById("marca");
    var preciomarca = Number(marca.value);
    total += preciomarca;

    document.getElementById('COT').innerText = "total $" + total.toLocaleString();
}