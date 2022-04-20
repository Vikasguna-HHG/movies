import React, { Component, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import './App.css'
import { AppContent } from './components'
  //  import AppContext from "./utls/AppContext";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

function App() {
  const [User_Name, setUser_Name] = useState('')
  const [userId, setuserId] = useState(null)

  function handleLoginState() {
    let name = localStorage.getItem('userName')
    let user = localStorage.getItem('userId')

    if (user) {
      setUser_Name(name)
      setuserId(user)

      // setUserStatus(true)
    } else {
      setuserId('')
      // alert("hello")
    }
  }

  useEffect(() => {
    handleLoginState()
  }, [])

  return (
    <AppContext.Provider>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" component={() => <Login />} />
            <Route exact path="/register" name="Register Page" component={() => <Register />} />
            <Route exact path="/404" name="Page 404" component={() => <Page404 />} />
            <Route exact path="/500" name="Page 500" component={() => <Page500 />} />
            <Route path="*" name="Home" component={() => <DefaultLayout />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
