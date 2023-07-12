db.inventory.insertOne({
  item: "canvas",
  qty: 100,
  tags: ["cotton"],
  size: { h: 20, w: 35.5, uom: "cm" },
});

db.inventory.insertMany([
  {
    item: "canvas1",
    qty: 50,
    tags: ["cotton"],
    size: { h: 20, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas2",
    qty: 90,
    tags: ["copper"],
    size: { h: 20, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas3",
    qty: 20,
    tags: ["zinc"],
    size: { h: 20, w: 35.5, uom: "cm" },
  },
  {
    item: "canvas4",
    qty: 80,
    tags: ["aluminium"],
    size: { h: 20, w: 35.5, uom: "cm" },
  },
]);

db.inventory.insertMany([
  {
    title: "The Light Fantastic",
    author: "Terry Pratchett",
    pages: 250,
    rating: 6,
    genres: ["fantasy", "magic"],
    reviews: [
      { name: "Luigi", body: "It was pretty good" },
      { name: "Bowser", body: "Loved It!!!" },
    ],
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 500,
    rating: 10,
    genres: ["fantasy"],
    reviews: [{ name: "Peach", body: "One of my favs" }],
  },
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    pages: 350,
    rating: 8,
    genres: ["fantasy", "magic"],
    reviews: [
      { name: "Luigi", body: "It was OK" },
      { name: "Bowser", body: "Really good book" },
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 300,
    rating: 6,
    genres: ["sci-fi", "dystopian"],
    reviews: [
      { name: "Peach", body: "Not my cup of tea" },
      { name: "Mario", body: "Meh" },
    ],
  },
]);

db.inventory.insertMany([
  { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
  {
    item: "notebook",
    qty: 50,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "P",
  },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  {
    item: "planner",
    qty: 75,
    size: { h: 22.85, w: 30, uom: "cm" },
    status: "D",
  },
  {
    item: "postcard",
    qty: 45,
    size: { h: 10, w: 15.25, uom: "cm" },
    status: "A",
  },
]);

db.books.insertMany([
  {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 600,
    genres: ["fantasy", "magical"],
    rating: 9,
  },
  {
    title: "The Final Empire",
    author: "Brandon Sanderson",
    pages: 450,
    genres: ["fantasy", "dystopian"],
    rating: 8,
  },
  {
    title: "The Way of the King",
    author: "Brandon Sanderson",
    pages: 350,
    genres: ["fantasy", "dystopian"],
    rating: 9,
  },
  {
    _id: {
      $oid: "64ae0e2a87600a745093a2d4",
    },
    title: "The Call of the Weird",
    author: "Louis Theroux",
    pages: 350,
    genres: ["non-fiction", "strange", "comedy"],
    rating: 7,
  },
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    pages: 300,
    rating: 7,
    genres: ["fantasy", "magic"],
  },
  {
    title: "The Light Fantastic",
    author: "Terry Pratchett",
    pages: 250,
    rating: 6,
    genres: ["fantasy"],
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 500,
    rating: 10,
    genres: ["sci-fi", "dystopian"],
  },
]);

db.books.insertOne({
  title: "The Way of Kings",
  author: "Brandon Sanderson",
  rating: 9,
  pages: 320,
  genres: ["fantasy"],
  reviews: [{
    name: "Yoshi",
    body: "Great book!!!"
  },
  {
    name: "mario",
    body: "So so"
  }]
})
  
