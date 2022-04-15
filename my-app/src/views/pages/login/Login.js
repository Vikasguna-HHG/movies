import { Link } from 'react-router-dom'
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
import React, { useState } from 'react';

const Login = () => {
  const [User_Name, setUser_Name] = useState('')
  const [Password, setPassword] = useState('')



  const submit = async () => {
    
      const formData = new FormData()
      formData.append('User_Name', User_Name)
      formData.append('Password', Password)
      
      // try {
      //   const res = await axios.post(env.apiURL+'mlogin', formData)
      //   // setList([...list, res.data.data])
      //   toast.success('New Add...!', {
      //     autoClose: 2000,
      //   })
      //   console.log(res)
      // } 
      // catch (ex) 
      // {
      //   console.log(ex)
      // }
      setUser_Name('');
      setPassword('');
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
                      <Link to="/base/Video">
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
