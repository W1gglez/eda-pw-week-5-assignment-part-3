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

const searchCriteria = {
  artist: 'Ray Charles',
  year: 1957,
};

function search(collection, searchCriteria) {
  let matchFound = [];
  searchCriteria = searchCriteria || undefined;

  for (let album of collection) {
    if (
      searchCriteria === undefined ||
      searchCriteria.artist === undefined ||
      searchCriteria.year === undefined ||
      !searchCriteria.artist ||
      !searchCriteria.year
    ) {
      matchFound = collection;
    } else if (
      album.artist === searchCriteria.artist &&
      album.yearPublished === searchCriteria.year
    ) {
      matchFound.push(album);
    }
  }
  return matchFound;
}

console.log(search(myCollection, searchCriteria));

addToCollection(myCollection, 'Friendship', 'Ray Charles', 1984);
console.log(search(myCollection, searchCriteria));

addToCollection(myCollection, 'Hallelluja I Love Her So', 'Ray Charles', 1957);
console.log(search(myCollection, searchCriteria));

searchCriteria.artist = '';
console.log(search(myCollection, searchCriteria));

searchCriteria.artist = 'Ray Charles';
searchCriteria.year = 0;
console.log(search(myCollection, searchCriteria));

searchCriteria.artist = 'Wilco';
searchCriteria.year = '1908';
console.log(search(myCollection, searchCriteria));

delete searchCriteria.artist;
console.log(search(myCollection, searchCriteria));

delete searchCriteria.year;
console.log(search(myCollection, searchCriteria));

console.log(search(myCollection));





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
