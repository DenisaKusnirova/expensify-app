// Higher Order Component (HOC)- Component that renders other component
// Goal: reuse combineReducers
// Render hijacking
// Abstract state
// ...props - we can spread out any object we want

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info, please do not share</p> }
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
        (<WrappedComponent {...props} />
        ) : (
        <p>Please log in to view the info</p>
        )}
    </div>
  )
}


// Info is wrapped component
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// Rendering:
// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details"/>,
//   document.getElementById('app')
// )
ReactDOM.render(
  <AuthInfo isAuthenticated={false} />,
  document.getElementById('app')
)
