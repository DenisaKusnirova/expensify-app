import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCONgrDuFqhL3iUJjGwdrID4JLaTY7TdLk",
  authDomain: "expensify-132ee.firebaseapp.com",
  databaseURL: "https://expensify-132ee.firebaseio.com",
  projectId: "expensify-132ee",
  storageBucket: "expensify-132ee.appspot.com",
  messagingSenderId: "573307664004"
};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 1500,
//   createdAt: 93461957485
// })

// FETCH the expense:
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//
//     console.log(expenses);
//   })

// SUBSCRIBE to the expense:
// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//
//       console.log(expenses);
// })
// Arrays in firebase:
// database.ref('notes').push({
//   title: 'Course',
//   body: 'Angular, Python'
// })

// database.ref('notes').set(notes)
// set up data subscribtion:
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// change the data and make sure it reprints:

// // FETCHING DATA:
// database.ref('location')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetching data: ', e);
// })

// database.ref().set({
//   name: 'Denko',
//   age: 22,
//   stressLevel: 6,
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kosice',
//     country: 'SK',
//   }
// }).then(() => {
//   console.log('Data is saved!!');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// // UPDATING data:
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatle'
// })

// // REMOVE THE DATA FROM FIREBASE:
// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Data was removed');
// }).catch((e) => {
//   console.log('Error: ', e);
// })


// // WIPE ALL THE DATA WITH SET:
//database.ref().set(null)
