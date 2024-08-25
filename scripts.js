const botaoconverter = document.querySelector("button");
const selecioneamoeda = document.querySelector("#escolhe-moedas");
function coverter() {
  const inputvalor = document.querySelector(".inputmoedas").value;
  const praconverte = document.querySelector(".valor-pra-converter");
  const convertida = document.querySelector(".valor-convertido");
  const eurohoje = 5.63;
  const dolarhoje = 5.2;
const bithoje = 355.90044
const librahoje = 6.68

  if (selecioneamoeda.value == "dolar") {
    convertida.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputvalor / dolarhoje);
  }
  if (selecioneamoeda.value == "Euro") {
    convertida.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputvalor / eurohoje);
 
}

if (selecioneamoeda.value == "btc"){
convertida.innerHTML = new Intl.NumberFormat("BTC", {
  style: 'currency', currency: 'BTC', minimumFractionDigits: 4
}).format(inputvalor/ bithoje);}

if (selecioneamoeda.value == "libra"){
  convertida.innerHTML = new Intl.NumberFormat("en-gb", {
    style: "currency",
    currency: "GBP",
  }).format(inputvalor/ librahoje);}
  




  praconverte.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputvalor);



}

function c (){
    
    const nomemoeda = document.querySelector("#dollar")
        const logos = document.querySelector(".logodamoeda")
    if(selecioneamoeda.value== "dolar"){
        nomemoeda.innerHTML = "Dolár americano"
        logos.src = "./assets/estados-unidos (1) 1.png"
    }
    if(selecioneamoeda.value== "Euro"){
        nomemoeda.innerHTML = "Euro"
        logos.src = "./assets/Design sem nome 3.png"
    }

    if(selecioneamoeda.value== "btc"){
      nomemoeda.innerHTML = "Bitcoin"
      logos.src = "./assets/bitcoin 1.png"
  }

  if(selecioneamoeda.value== "libra"){
    nomemoeda.innerHTML = "Libra"
    logos.src = "./assets/libra 1.png"
}



    coverter()
}



selecioneamoeda.addEventListener("change", c)
botaoconverter.addEventListener("click", coverter);
