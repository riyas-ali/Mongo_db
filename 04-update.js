// find item for update
db.inventory.findOne({ item: "paper" });

// update item
db.inventory.updateOne({ item: "paper" }, { $set: { "size.uom": "cm", status: "P" }, $currentDate: { lastModified: true } });

// find condition true all items
db.inventory.find({ qty: { $lt: 50 } });

// update that all items
db.inventory.updateMany({ qty: { $lt: 50 } }, { $set: { "size.uom": "in", status: "P" }, $currentDate: { lastModified: true } });

// find and increment
db.books.updateOne({ _id: ObjectId("64ae2698b7f4c9903316433e") }, { $inc: { pages: 2 } })

// find and decrement
db.books.updateOne({ _id: ObjectId("64ae2698b7f4c9903316433e") }, { $inc: { pages: -2 } })

// find and remove field item
db.books.updateOne({ _id: ObjectId("64ae2698b7f4c9903316433e") }, { $pull: { genres: "fantasy" } })

// find and add field item
db.books.updateOne({ _id: ObjectId("64ae2698b7f4c9903316433e") }, { $push: { genres: "fantasy" } })

// find and add field multiple item
db.books.updateOne({ _id: ObjectId("64ae2698b7f4c9903316433e") }, { $push: { genres: { $each: ["1", "2"] } } })
