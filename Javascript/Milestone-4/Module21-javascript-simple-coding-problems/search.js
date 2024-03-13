let lyrics = "tumi bondo sada pakhi tumi jano ki bosonto kale tumia bolte pari ni sada sada kala rong mileche sada kala";
console.log(lyrics.length)

// includes
console.log(lyrics.includes("pakhi"));

// toUpperCase
console.log(lyrics.toUpperCase());

// toLowerCase
let searchString = "Bosonto";
 lyrics = lyrics.toLowerCase();
console.log(lyrics.includes(searchString.toLowerCase()));


// indexOf
console.log(lyrics.indexOf('sada'))


// startWith
console.log(lyrics.startsWith("tumi"))