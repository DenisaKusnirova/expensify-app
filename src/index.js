import React from 'react'
import ReactDOM from 'react-dom'
import 'react-dates/initialize'
import { Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configurestore from './store/configurestore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import './firebase/firebase'

const store = configurestore()

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 109500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

// provider - lets us to define a store that we want to provide to all of ours component
// we have to pass a single prop- store- that we try to share with the rest of the application
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
