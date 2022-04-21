import React, { Component, Suspense, useEffect, useState  } from 'react'
import Appcontext from './Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './App.css'
import { AppContent } from './components'
import Home from './views/Home/Home'
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


function App(){

  const [User_Name, setUser_Name] = useState('')
  const [Password, setPassword] = useState('')

  function handleLoginState(){

    let name = localStorage.getItem('userName');
    let user = localStorage.getItem('userId');

    if(user){
      setUser_Name(user)
      setPassword(name)
      // setUserStatus(true)
    }else{
        // setUserId('')
    }
}

useEffect(()=>{

  handleLoginState()

},[])
    const name ="hello001 - hDr@7L7G";
    return (
      <BrowserRouter>

        <Appcontext.Provider value={name}>
        <Suspense fallback={loading}>
          <Routes>
            <Route  path="/"         name="Login Page"    element={<Login />} />
            <Route  path="/register" name="Register Page" element={<Register />} />
            <Route  path="/404"      name="Page 404"      element={<Page404 />} />
            <Route  path="/500"      name="Page 500"      element={<Page500 />} />
            <Route  path="*"         name="Home"          element={<DefaultLayout />} />
          </Routes>
        </Suspense>
        </Appcontext.Provider>

      </BrowserRouter>
    )
  
}

export default App
