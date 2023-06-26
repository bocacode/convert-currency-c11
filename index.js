function setupApp(){
  const rubleH3 = document.createElement('h3')
  document.querySelector('body').appendChild(rubleH3)
  
  const cadH3 = document.createElement('h3')
  document.querySelector('body').appendChild(cadH3)
  
  const forintH3 = document.createElement('h3')
  document.querySelector('body').appendChild(forintH3)
  
  const pesoH3 = document.createElement('h3')
  document.querySelector('body').appendChild(pesoH3)
  
  const yenH3 = document.createElement('h3')
  document.querySelector('body').appendChild(yenH3)

  const form = document.querySelector('form') // grab the form
  form.addEventListener('submit', handleConvert) // onsubmit
}

function handleConvert(event) {
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  convertUSDtoWon(usd)
  convertUSDtoYen(usd)
  convertUSDtoForint(usd)
  convertUSDtoRuble(usd)
  convertUSDtoCAD(usd)
  convertUSDtoPeso(usd)
}

function convertUSDtoForint(usd) {
  const forint = usd * 340
  forintH3.innerText = `$${usd.toLocaleString()} USD is equal to ${forint.toLocaleString()} Hungarian forints`
}

function convertUSDtoYen(usd) {
  // conversion
  const yen = usd * 143.48 // convert to Yen
  yenH3.innerText = `$${usd.toLocaleString()} USD is equal to ${yen.toLocaleString()} Japanese Yen`
}
function convertUSDtoRuble(usd) {
  // conversion
  const ruble = usd / 0.012
  rubleH3.innerText =
    '$' + usd.toLocaleString() + ' USD is equal to ' + ruble.toLocaleString() + ' Russian Ruble'
}

function convertUSDtoCAD(usd) {
  // conversion
  const cad = usd * 1.26 //convert to Canadian Dollar
  cadH3.innerText = `$${usd.toLocaleString()} USD is equal to ${cad.toLocaleString()} Canadian Dollar`
}

function convertUSDtoPeso(usd) {
  const peso = usd * 0.00024 //convert to colombian peso
  pesoH3.innerText = `$${usd.toLocaleString()} USD is equal to ${peso.toLocaleString()}Colombian pesos`
}

function convertUSDtoWon(usd) {
  const won = usd / 0.00078 // convert to Won
  // Now display on page:
  document.querySelector('h2').innerText =
    '$' + usd.toLocaleString() + ' USD is equal to ' + won.toLocaleString() + ' Korean Won'
}

setupApp()
