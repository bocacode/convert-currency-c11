const form = document.querySelector('form') // grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  const won = usd / 0.00078 // convert to Won
  // Now display on page:
  document.querySelector('h2').innerText = 
  "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Egyptian Pounds"

  const egp = usd * 30.90 // convert to egyptian currency
  const egpH3 = document.createElement('h3')
  egpH3.innerText = `$${usd.toLocaleString()} USD is equal to ${egp.toLocaleString()} Egyptian Pound`;
  document.querySelector('body').appendChild(yenH3)
}
