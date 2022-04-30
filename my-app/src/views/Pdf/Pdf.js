import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {env} from '../../environment'
import { CCard, CCardBody, CButton,CCardTitle} from '@coreui/react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
export default function Pdf() {
    const [list,setList] = useState([]);
    const [Contract_pdf,setContract_pdf] = useState("");

    function getdata() {
        axios
          .get(env.apiURL+`Contract_find_data`)
          .then(function (res) {
            // console.log(res.data.data)
            setList(res.data.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    


  //Submit data
  const Approval = async () => {

    const formData = new FormData()
    formData.append('Contract_pdf', Contract_pdf)

    try {
      const res = await axios.post(env.apiURL + 'Contract',formData,
        
        toast.success('data inserted', {
         autoClose: 2000,}
        
        )
        
      )
    } catch (ex) {
      console.log(ex)
    }

  }


  
  useEffect(() => { 
    getdata()
  }, [])

  return (
    <>
     <CCard className="mb-4">
        <CCardBody>
          <CCardTitle><h3>Contact Details</h3></CCardTitle><hr/>
          {
              list.map((item,i)=>{
                  return(
                      <iframe key={i} src={env.apiURL+`${item.Contract_pdf}`}  width="100%"  height="800px"></iframe>
                  )
              })
          }
           <hr/>
            <CButton  style={{backgroundImage: 'linear-gradient(360deg,#16222A,#3A6073)',marginLeft: '1000px',}}>
              Reject
            </CButton>
            <CButton  onClick={Approval}   style={{backgroundImage: 'linear-gradient(360deg,#16222A,#3A6073)',marginLeft: '1100px',marginTop:"-60px"}}>
              Approval
            </CButton>
    </CCardBody>
    </CCard>
    </>
  )
}
