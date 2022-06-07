const express = require('express')
const app = express()
const userSchema = require('./models/person')
const connectDB = require('./config/ConnectDB')
require('dotenv').config()

connectDB()

let person = person.model('person', personSchema)

/*create a new user */

var person1 = new person({
  name:'personr0',
  age:'20'
});

person1.save();

/* Create Many Records */

person.create(
  [
    {
      name: 'person1',
      age: 10,
      favoriteFoods: ['makrouna'],
    },
    {
      name: 'person2',
      age: 15,
      favoriteFoods: ['chakchouka', 'sandwich'],
    },
    {
      name: 'person3',
      age: 20,
      favoriteFood: ['lasagne', 'meat'],
    },
  ],
  function (err, data) {
    if (err) {
      return console.log.error(err)
    }
    return console.log('persons are created')
  },
)

/* Find persons with names  */

person.find({name: 'person1'}).then( (data) => { console.log(data) })


/* Find person with favoritefood */
person.findOne( {favoriteFood: 'Pasta',} ).then( (data) => { console.log(data) })


/* Find with _id */
person.findById('7c83056383e874948c6383').then( (data) => { console.log(data) })

/*Find with _id and add food*/

user.findById('7c83056383e874948c6383', (err, call) => {
  if (err) {
    console.log(err)
  } else {
    call.favoriteFoods.push('mleoui').save((err, updatedResult) => {
      if (err) {
        console.log(err)
      } else {
        console.log('food added')
      }
    })
  }
})

/* Find with Name and change the age */
person.findOneAndUpdate({ name: 'person2' },{ $set: { age: 10 } },{ new: true },
  (err, data) => {
    if (err) {
      console.log('error')
    }

    console.log('age updated',data)
  },
)

/* Delete witth id */
person.findByIdAndRemove('7c83056383e874948c6383', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log('Removed person : ', data)
  }
})

/*Delete*/
person.remove({ name: 'person3' }, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})

/* */
person.find({ favoriteFoods: { $all: ['chakchouka'] } })
  .sort({ name: 'asc' })
  .limit(2)
  .select('-age')
  .exec((err, data) => {
    if (error) {
      console.log(err)
    } else {
      console.log(data)
    }
  })

app.listen(5000),
  (err) => (err ? console.log('Error') : console.log(`port 5000`))
