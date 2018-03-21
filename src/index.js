import React from 'react'
import ReactDOM from 'react-dom'
import 'react-dates/initialize'
import { Provider} from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configurestore from './store/configurestore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'

const store = configurestore()


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

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push("/dashboard")
      }
    })
  } else {
    renderApp()
    history.push('/')
  }
})
