// find item for update
db.inventory.findOne({ item: "paper" });

// update item
db.inventory.updateOne({ item: "paper" }, { $set: { "size.uom": "cm", status: "P" }, $currentDate: { lastModified: true } });

// find condition true all items
db.inventory.find({ qty: { $lt: 50 } });

// update that all items
db.inventory.updateMany({ qty: { $lt: 50 } }, { $set: { "size.uom": "in", status: "P" }, $currentDate: { lastModified: true } });
