// delete all
db.inventory.deleteMany({})

// feild included items are delete.
db.inventory.deleteMany({ status : "A" })

// delete one
db.inventory.deleteOne( { status: "D" } )
