const pickRandomQuote = require('./pickRandomQuote');

const sampleData = [
  {
    author: 'John',
    quote: 'Why would you hate on pickles?',
    image: "random/image/url.jpg"
  },
  {
    author: 'Pedro',
    quote: 'There is a chance that a cosmic pink elephant that reads Tolkien, exists',
    image: "random/image/url.jpg"
  },
  {
    author: 'Yao',
    quote: 'What I mean is that meaning means for something to mean something or to have a meaningful meaning... I need a beer',
    image: "random/image/url.jpg"
  }
]


it("should return an object when called", ()=> {
  const result = pickRandomQuote([{},{},{}]);
  expect(typeof result).toBe("object");
});

it("should return an object with properties 'quote' and 'author'", ()=> {
  const result = pickRandomQuote(sampleData);
  expect(result.hasOwnProperty('author')).toBe(true);
  expect(result.hasOwnProperty('quote')).toBe(true);
  expect(result.hasOwnProperty('image')).toBe(true);
});

it("should pick a random quote", () => {
  const resultArr = [];
  for (let i = 0; i < 10; i++) {
    resultArr.push(pickRandomQuote(sampleData));
  }
  const filteredArr = resultArr.filter(quote => quote.author === 'Pedro');
  expect(filteredArr.length !== resultArr.length).toBe(true);
});

console.log(pickRandomQuote(sampleData));