 // For loop that logs every even number starting from 1000 down to 0
 for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
  }

  // For loop that alerts at certain intervals
  for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
      alert("A quarter of the way there!");
    } else if (i === 5000) {
      alert("Halfway there!");
    } else if (i === 10000) {
      alert("The loop is done!");
    }
  }

  // Array of my top 5 favorite TV shows

  const favoriteTVShows = ["Naruto", "Master Chef", "Love Island UK", "1000 Pound Sisters", "Sabbath"];

  // For loop that logs a message for each TV show in the array

  for (let i = 0; i < favoriteTVShows.length; i++) {
    console.log(`My #${i+1} favorite TV show is ${favoriteTVShows[i]}.`);
  }