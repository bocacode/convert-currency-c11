const form = document.querySelector('form') // grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  const won = usd / 0.00078 // convert to Won
  // Now display on page:
  document.querySelector('h2').innerText = 
  "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won"

const tugrik = usd * 3516.8543 // convert to tugrik
const tugrikH3 = document.createElement('h3')
//tugrikH3.innerText = "$" + usd.toLocaleString() + "USD is equal to " + tugrik.toLocaleString() + " Mongolian Tugrik"
tugrikH3.innerText = `$${usd.toLocaleString()} USD is equal to ${tugrik.toLocaleString()} Mongolian Tugrik`
document.querySelector('body').appendChild(tugrikH3)
}
