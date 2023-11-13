const btn = document.querySelector("#send");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    const name = document.querySelector("#dolar");
    const value = dolar.value;
    var valorEmDolar = value;
    var cotacaoDolar = 5.32;

    var valorEmReal = valorEmDolar * cotacaoDolar;
    valorEmReal = valorEmReal.toFixed(2);
    // alert("R$ " + valorEmReal);
    console.log("R$ " + valorEmReal);
});