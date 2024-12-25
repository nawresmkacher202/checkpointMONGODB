
db.createCollection("contactlist")
db.contactlist.insertMany([
    { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
    { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
    { last_name: "Emilie", first_name: "Brouge", email: "emilie.b@gmail.com", age: 40 },
    { last_name: "Alex", first_name: "Brown", age: 4 },
    { last_name: "Denzel", first_name: "Washington", age: 3 }
  ])
  db.contactlist.find().pretty()
  var person = db.contactlist.findOne({ first_name: "Seif" }) 
  db.contactlist.find({ _id: person._id }).pretty()
  db.contactlist.find({ age: { $gt: 18 } }).pretty()
  db.contactlist.find({ age: { $gt: 18 }, first_name: /ah/i }).pretty()
  db.contactlist.updateOne(
    { first_name: "Seif", last_name: "Kefi" },
    { $set: { first_name: "Anis" } }
  )
  db.contactlist.find().pretty()

