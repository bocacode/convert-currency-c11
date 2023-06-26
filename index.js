const form = document.querySelector('form') // grab the form
form.addEventListener("submit", convertUSDtoWon) // onsubmit

function convertUSDtoWon(event) { // conversion
  event.preventDefault() // stop form from refreshing page
  const usd = Number(event.target.usd.value) // get form value
  const won = usd / 0.00078 // convert to Won
  // Now display on page:
  document.querySelector('h2').innerText = 
  "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won"

  const brl = usd * 4.77;
  const brlH3 = document.createElement('h3');

  brlH3.innerText = `$${usd.toLocaleString()} U.S. Dollar is equal to R$${brl.toLocaleString()} Brazilian Real`;
  document.querySelector("body").appendChild(brlH3);
}
