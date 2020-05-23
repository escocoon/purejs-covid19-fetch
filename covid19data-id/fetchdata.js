//Get the Url
const url = "https://api.kawalcorona.com/"

//Indonesia DATA FETCH
//Declare the elements first for later use
let positifElement = document.getElementById("positif");
let sembuhElement = document.getElementById("sembuh");
let meninggalElement = document.getElementById("meninggal");

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    let dataIndonesia = data.find(country => country.attributes.OBJECTID === 92); //Find the array with an object property OBJECTID with a value of 92 (Indonesia)
    positifElement.innerHTML = dataIndonesia.attributes.Confirmed.toLocaleString();
    sembuhElement.innerHTML = dataIndonesia.attributes.Recovered.toLocaleString();
    meninggalElement.innerHTML = dataIndonesia.attributes.Deaths.toLocaleString();
})

//GLOBAL DATA FETCH
//Declare the elements first for later use
let confirmedElement = document.getElementById("confirmed");
let recoveredElement = document.getElementById("recovered");
let deathElement = document.getElementById("death");
fetch(url)
.then((resp) => resp.json())
.then((data) => {
    let resultConfirmed = data.map(res => res.attributes.Confirmed).reduce((a, b) => a + b); //Get the Confirmed properties from collection of arrays and then sum using reduce function
    let resultRecovered = data.map(res => res.attributes.Recovered).reduce((a, b) => a + b); //Get the Recovered properties from collection of arrays and then sum using reduce function
    let resultDeath = data.map(res => res.attributes.Deaths).reduce((a,b) => a + b); //Get the Death properties from collection of arrays and then sum using reduce function
    confirmedElement.innerHTML = resultConfirmed.toLocaleString();
    recoveredElement.innerHTML = resultRecovered.toLocaleString();
    deathElement.innerHTML = resultDeath.toLocaleString();
})