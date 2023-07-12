// fetch all documents
db.inventory.find() || db.inventory.find({})

// fetching all document specified fields only
db.books.find({}, { title: 1, author: 1 })

// filter - item include
db.inventory.find({qty: 90})

// filter and show true fields only
db.books.find({ author: "Brandon Sanderson" }, { title: 1, author: 1 })

// filter - item include a perticular field
db.inventory.find({tags: {$in: ["cotton"]}})

// filter - item 'a' or 'b' include a perticular field in a document
db.inventory.find({tags: {$in: ["copper", "red"]}})

// AND condition
db.inventory.find({ status: "A", qty: {$lt: 30}})

// OR condition
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

// find with id
db.books.findOne({ _id: ObjectId("64ae2698b7f4c9903316433e") })

// filter - item 'a' or 'b' include a perticular field in a document return one item
db.inventory.findOne({tags: {$in: ["copper", "red"]}})

// display all items included 'magic' genres
db.books.find({ genres: "magic" })

// display all items genres is magic only
db.books.find({ genres: ["magic"] })
