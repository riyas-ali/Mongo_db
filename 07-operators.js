// greater than
db.books.find({ rating: {$gt: 9} })

// greater than or equal to
db.books.find({ rating: {$gte: 9} })

// less than
db.books.find({ rating: {$lt: 7} })

// less than equal to
db.books.find({ rating: {$lte: 7} })

// or
db.books.find({ $or: [{ rating: 7 }, { rating: 9 }] })

// in
db.books.find({ rating: {$in: [7, 8, 9]} })

// not in
db.books.find({ rating: {$nin: [7, 8, 9]} })