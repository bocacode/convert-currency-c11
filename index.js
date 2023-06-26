const form = document.querySelector('form') // grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  const won = usd / 0.00078 // convert to Won
  const forint = usd * 340;
  // Now display on page:
  document.querySelector('h2').innerText = 
  "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won"
const forintH3 = document.createElement('h3')
forintH3.innertext = `$${usd.toLocaleString()} USD is equal to ${forint.toLocaleString()} Hungarian forints`
document.querySelector('body').appendChild(forintH3)
}
