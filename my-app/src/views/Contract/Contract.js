import React from 'react'
import { CCol, CForm, CCard,CCardTitle, CCardBody,CFormLabel, CFormTextarea, CFormInput, CRow,CButton} from '@coreui/react';




function Contract() {
  return (
    <div>
    <CCard className="mb-4">
      <CCardBody>
      <CCardTitle><b>Add Contract</b></CCardTitle>
      <hr/>
      <CForm>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Title Form</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" readOnly placeholder='Master Content Streaming Agreement'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Content ( Movie ) Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Application URL</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" readOnly placeholder='https://client-hhg.netlify.app/'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Content Provider Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Content Provider Name'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Content Provider Phone</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Content Provider Phone' />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6> Platform Email</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" readOnly placeholder='hhgsoftechteam10@gmail.com'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Platform Phone</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" readOnly placeholder='+91 73500****'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
        <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Period (In Months)</h6></CFormLabel>
            <CCol sm={4} >
            <CFormInput type="number" placeholder='Period (In Months)' />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Content Provider Ratio</h6></CFormLabel>
            <CCol sm={4} >
            <CFormInput type="tel" defaultValue="70"  maxLength="2" />
            </CCol>
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Paltform Ratio</h6></CFormLabel>
            <CCol sm={4} >
            <CFormInput type="number" readOnly defaultValue="30" />
            </CCol>
      </CRow> 
      <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Viewer Ship Fee in ($)</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="number" defaultValue="1" />
            <p>( The user for one time viewership of content. )</p>
            </CCol>
       </CRow>
       <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Payment Gateway Charges(in %)</h6></CFormLabel>
            <CCol sm={4} >
            <CFormInput type="number" defaultValue="6" />
            </CCol>
        </CRow>
        <hr />
    
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Company Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Enter Company Name'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6> Address</h6></CFormLabel>
            <CCol sm={10} >
            <CFormTextarea type="textarea" placeholder='Enter Address' />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>CIN</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Enter CIN'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Director Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Enter Director Name'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>DIN</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" placeholder='Enter DIN'/>
            </CCol>
        </CRow>

        <hr/>
            <CCardTitle><h6>Contract With Client</h6></CCardTitle>
        <hr/>

        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6>Company Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormInput type="text" readOnly placeholder='HHG Softech Private Limited'/>
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6> Address</h6></CFormLabel>
            <CCol sm={10} >
            <CFormTextarea type="textarea" readOnly placeholder='Surat Gujarat' />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label"><h6> Director Name</h6></CFormLabel>
            <CCol sm={10} >
            <CFormTextarea type="textarea" readOnly placeholder='HHG' />
            </CCol>
        </CRow>

        <hr/>

        <CButton type="submit" style={{ backgroundImage: 'linear-gradient(360deg,#16222A,#3A6073)' , marginLeft:"1150px"}}>Submit</CButton>
      </CForm>

      </CCardBody>
    </CCard>
    </div>
  )
}

export default Contract
