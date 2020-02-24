const pickRandomQuote = array => {
  const randomNumber= Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

module.exports = pickRandomQuote;