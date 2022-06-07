const express = require('express')
const app = express()
const userSchema = require('./models/User')
const connectDB = require('./config/ConnectDB')
require('dotenv').config()

connectDB()

let user = User.model('User', userSchema)

/*create a new user */

var user1 = new user({
  name:'user0',
  age:'20'
});

user1.save();

/* Create Many Records */

user.create(
  [
    {
      name: 'user1',
      age: 10,
      favoriteFoods: ['makrouna'],
    },
    {
      name: 'user2',
      age: 15,
      favoriteFoods: ['chakchouka', 'sandwich'],
    },
    {
      name: 'user3',
      age: 20,
      favoriteFood: ['lasagne', 'meat'],
    },
  ],
  function (err, data) {
    if (err) {
      return console.log.error(err)
    }
    return console.log('users are created')
  },
)

/* Find users with names  */

user.find({name: 'user1'}).then( (data) => { console.log(data) })
//same with all the oyher users


/* Find user with favoritefood */
user.findOne( {favoriteFood: 'Pasta',} ).then( (data) => { console.log(data) })


/* Find with _id */
user.findById('7c83056383e874948c6383').then( (data) => { console.log(data) })

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
user.findOneAndUpdate({ name: 'user2' },{ $set: { age: 10 } },{ new: true },
  (err, data) => {
    if (err) {
      console.log('error')
    }

    console.log('age updated',data)
  },
)

/* Delete user witth id */
user.findByIdAndRemove('7c83056383e874948c6383', function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log('Removed User : ', data)
  }
})

/*Delete all the people whose name is “emna”*/
user.remove({ name: 'user3' }, (err, data) => {
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
