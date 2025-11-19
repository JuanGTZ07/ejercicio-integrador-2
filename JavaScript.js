var form = document.getElementById("formulario");

function calcular() {
    total = 0;
    var marca = document.getElementById("marca");
    var preciomarca = Number(marca.value);
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var finan = formulario.finan.value;
    var seguro = document.getElementById("seguro");

    document.querySelectorAll('input[type="checkbox"]').forEach(extra => {
        if(extra.checked) {
            total += Number(extra.value);
        }
    })

    total += preciomarca;

    total += total *0.16;

    if (finan == "credito") {
        interes = total *0.19
        total += interes
        document.getElementById('interes').textContent = "Interes: $" + interes.toLocaleString();
    }
    else if (finan == "contado") {
        document.getElementById('interes').textContent = "";
    }

    if (seguro.checked) {
        var precioseguro = Number(seguro.value);
        document.getElementById('SEGURO').innerText = "Seguro anual: $" + precioseguro.toLocaleString();
    }
    else {
        document.getElementById('SEGURO').innerText = "";
    }

    document.getElementById('NA').innerText = `${nombre} ${apellido}`
    document.getElementById('COT').innerText = "total $" + total.toLocaleString();
}