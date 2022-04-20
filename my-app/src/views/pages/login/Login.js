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
import React, { useEffect, useState ,useContext} from 'react'

import Appcontext from 'src/Context'

// import { useNavigate ,Link} from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom'

import { env } from '../../../environment'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  // const navigate = useNavigate();

  const [User_Name, setUser_Name] = useState('')
  const [Password, setPassword] = useState('')

 
  localStorage.removeItem('user-info')
  console.log(localStorage.getItem('user-info'))

  const submit = async (e) => {
    e.preventDefault()

    console.log('User_Name,Password', User_Name, Password)

    

    await axios.post(env.apiURL+'Mlogin', { User_Name, Password })
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem('userId', res.data.data._id)
          localStorage.setItem('userName', res.data.data.First_Name)
          navigate('/base/Video',{replace:true})

        } else {
          alert('Not valid passwod')
        }
    })
    setUser_Name('')
    setPassword('')
  }

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/base/Vuideo')
      // History.push('/base/Home');
    }
  }, [])

    const data = useContext(Appcontext)
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login - {data}</h1>
                    <br />
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={User_Name}
                        onChange={(e) => {
                          setUser_Name(e.target.value)
                        }}
                      />
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
                        onChange={(e) => {
                          setPassword(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Link to="/home">
                          <CButton onClick={submit} className="px-4" style={{ backgroundImage: 'linear-gradient(360deg,#16222A,#3A6073)' }}>
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
