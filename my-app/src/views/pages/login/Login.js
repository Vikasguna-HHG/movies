import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import React, { useEffect, useState } from 'react';

// import { useNavigate ,Link} from 'react-router-dom';
import { useHistory,Link } from "react-router-dom"

import {env} from '../../../environment'
import axios from 'axios';


const Login = () => {
  
  const navigate = useHistory();
  // const navigate = useNavigate();
  
  const [User_Name, setUser_Name] = useState('')
  const [Password, setPassword] = useState('')


    useEffect(()=> {
      if(localStorage.getItem('user-info'))
      {
        navigate.push('/base/Home');
        // History.push('/base/Home');
      }
    },[])
    localStorage.removeItem('user-info')
    console.log(localStorage.getItem('user-info'));

    const submit = async (e) => {
      e.preventDefault()

      console.log("User_Name,Password",User_Name,Password);

        // const result = await fetch(env.apiURL+'Mlogin',{
        const result = await axios.post("http://localhost:5000/Mlogin",{User_Name,Password}).then((res)=>{

        if(res.data.status){
          localStorage.setItem('userId',res.data.data._id)
          localStorage.setItem('userName',res.data.data.First_Name)
          
        }else{
          alert("not valid")
        }
        
        })
      
      
    }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center" >
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4" >
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <br/>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" value={User_Name}  onChange={(e) => {setUser_Name(e.target.value)}}  />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={Password} 
                        onChange={(e) => {setPassword(e.target.value)}}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Link to="/base/video">
                        <CButton  onClick={submit} className="px-4" style={{backgroundImage: 'linear-gradient(360deg,#16222A,#3A6073)'}}>
                          Login
                        </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
