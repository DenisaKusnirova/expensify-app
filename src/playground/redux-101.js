import { createStore } from 'redux'

//Action generators- functions that return the action object

// if incrementBy exists, great, if no, then use 1
// if the argument does not exist we will start with an empty object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count: count
})

const resetCount = () => ({
  type: 'RESET'
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }

    case 'RESET':
      return {
        count: 0
      }

    case 'SET':
      return {
        count: action.count
      }

    default:
      return state
  }
})

// you can watch the changes with subscribe:
// you can fetch the state with getState function

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())

})

// Actions- allow us to change redux store- an object that gets sent to the store
// Action is passed as an argument in a store

// INCREMENT
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// }

store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 5 }))

// RESET
store.dispatch(resetCount())


// DECREMENT
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 10}))

// SET
store.dispatch(setCount({ count: 101}))
