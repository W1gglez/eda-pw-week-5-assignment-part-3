console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(Collection, title, artist, yearPublished) {
  const album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };

  Collection.push(album);
  return album;
}

console.log(
  addToCollection(myCollection, 'Here and Now', 'Nickelback', '2011')
);
console.log(addToCollection(myCollection, 'Dark Horse', 'Nickelback', '2008'));
console.log(
  addToCollection(myCollection, 'Silver Side Up', 'Nickelback', '2001')
);
console.log(
  addToCollection(myCollection, 'Honkytonk University', 'Toby Keith', '2005')
);
console.log(addToCollection(myCollection, 'Toby Keith', 'Toby Keith', '1993'));
console.log(addToCollection(myCollection, 'Meteora', 'Linkin Park', '2003'));

console.log(myCollection);

function showCollection(collection) {
  for (let album of collection) {
    console.log(
      ` ${album.title} by ${album.artist}, published in ${album.yearPublished}.`
    );
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let artistMatch = [];

  for (let album of collection) {
    if (album.artist === artist) {
      artistMatch.push(album);
    }
  }
  return artistMatch;
}

console.log(findByArtist(myCollection, 'Nickelback'));
console.log(findByArtist(myCollection, 'Shakira'));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
