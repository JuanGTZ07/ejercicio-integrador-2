var form = document.getElementById("formulario");

function calcular() {
    total = 0;
    var marca = document.getElementById("marca");
    var preciomarca = Number(marca.value);
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;

    document.querySelectorAll('input[type="checkbox"]').forEach(extra => {
        if(extra.checked) {
            total += Number(extra.value);
        }
    })

    total += preciomarca;
    document.getElementById('NA').innerText = `${nombre} ${apellido}`
    document.getElementById('COT').innerText = "total $" + total.toLocaleString();
}