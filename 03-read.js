// fetch all documents
db.inventory.find() || db.inventory.find({})

// filter - item include
db.inventory.find({qty: 90})

// filter - item include a perticular field
db.inventory.find({tags: {$in: ["cotton"]}})

// filter - item 'a' or 'b' include a perticular field in a document
db.inventory.find({tags: {$in: ["copper", "red"]}})

// AND condition
db.inventory.find({ status: "A", qty: {$lt: 30}})

// OR condition
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

db.inventory.findOne({tags: {$in: ["copper", "red"]}})
