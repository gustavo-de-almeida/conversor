const botaoconverter = document.querySelector("button");
const selecioneamoeda = document.querySelector("#escolhe-moedas");

async function coverter() {
  const inputvalor = document.querySelector(".inputmoedas").value;
  const praconverte = document.querySelector(".valor-pra-converter");
  const convertida = document.querySelector(".valor-convertido");
  const moedasapi = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,JPY-BRL").then((response) => response.json());

  const eurohoje = moedasapi.USDBRL.high;
  const dolarhoje = moedasapi.EURBRL.high;
  const bithoje = moedasapi.BTCBRL.high;
  const librahoje = moedasapi.GBPBRL.high;
  const ienehoje = moedasapi.JPYBRL.high;
  

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

  if (selecioneamoeda.value == "btc") {
    convertida.innerHTML = new Intl.NumberFormat("BTC", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 4,
    }).format(inputvalor / bithoje);
  }
  if (selecioneamoeda.value == "iene"){
    convertida.innerHTML = new Intl.NumberFormat('ja-JP', { 
      style: 'currency',
      currency: 'JPY' })
      .format(inputvalor / ienehoje)
  
  }

  if (selecioneamoeda.value == "libra") {
    convertida.innerHTML = new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(inputvalor / librahoje);
  }
  

  praconverte.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputvalor);
}

function c() {
  const nomemoeda = document.querySelector("#dollar");
  const logos = document.querySelector(".logodamoeda");
  if (selecioneamoeda.value == "dolar") {
    nomemoeda.innerHTML = "Dolár americano";
    logos.src = "./assets/estados-unidos (1) 1.png";
  }
  if (selecioneamoeda.value == "Euro") {
    nomemoeda.innerHTML = "Euro";
    logos.src = "./assets/Design sem nome 3.png";
  }

  if (selecioneamoeda.value == "btc") {
    nomemoeda.innerHTML = "Bitcoin";
    logos.src = "./assets/bitcoin 1.png";
  }

  if (selecioneamoeda.value == "libra") {
    nomemoeda.innerHTML = "Libra";
    logos.src = "./assets/libra 1.png";
  }
  if (selecioneamoeda.value == "iene") {
    nomemoeda.innerHTML = "Iene";
    logos.src = "./assets/Iene.png";
  }

  coverter();
}

selecioneamoeda.addEventListener("change", c);
botaoconverter.addEventListener("click", coverter);
