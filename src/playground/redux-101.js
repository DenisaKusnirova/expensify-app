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

// This function- REDUCER:
// Actions describe the fact that something happened, but they don't specify how
// the application's state changes in responce- this is the job of reducers

// Reducers:
// 1. Reducers are pure funcions- output is only determined by the input
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
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
}

const  store = createStore(countReducer)

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
