const form = document.querySelector('form') // grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  const won = usd / 0.00078 // convert to Won
  // Now display on page:
  document.querySelector('h2').innerText = 
  "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won"

const cad = usd * 1.26 //convert to Canadian Dollar
const cadH3 = document.createElement('h3')
cadH3.innerText = `$${usd.toLocaleString()} USD is equal to ${cad.toLocaleString()} Canadian Dollar`
document.querySelector('body').appendChild(cadH3)
}
