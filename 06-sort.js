// document count
db.inventory.find().count()

// filter with count
db.books.find({ author: "Brandon Sanderson" }).count()

// limit result
db.inventory.find().limit(2)

// skip first item
db.inventory.find().skip(1)

// sort(Number) by feild acending
db.inventory.find().sort({ qty: 1 })

// sort(Number) by feild decending
db.inventory.find().sort({ qty: -1 })

// sort(Alphabet) by feild acending
db.books.find().sort({ title: 1 })

// sort(Alphabet) by feild decending
db.books.find().sort({ title: -1 })

// paignation eg:- 1 to 10
itemCount = 10
pageNo = n
db.inventory.find().skip((pageNo - 1)*itemCount).limit(itemCount)
