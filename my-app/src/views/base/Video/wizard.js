import React, { useState } from 'react';
import './wizard.css'
import {
  CCardImage,
  CCardTitle,
  CCardText,
  CCard,
  CCardBody, 
  CFormCheck,
  CCol,
  CTable,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CInputGroup,
  CInputGroupText,
  CModalBody,
  CModalTitle,
  CModalHeader,
  CModalFooter,
  CModal,
  CRow,
} from '@coreui/react'
import { Container, Form, Row, Col } from 'react-bootstrap';

const FirstComponent = () => {
  const [Title, setTitle] = useState('')
  const [Rating, setRating] = useState('')
  const [Age, setAge] = useState('')
  const [Discription, setDiscription] = useState('')
  const [Contract, setContract] = useState([])
  const [Trailer_time, setTrailer_time] = useState()
  const [Video_time, setVideo_time] = useState('')
  const [Country, setCountry] = useState('')
  const [Banner, setBanner] = useState('')
  const [Cast, setCast] = useState('')
  return (
  <>
 
      <Container style={{marginTop:"480px"}}>
        <h5 style={{fontSize:"11px"}}>Note: *filds required. Please fill and click next</h5>
        <Form>
          <Row>
            <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
                  <h6>Contract*</h6>
                </CFormLabel>
                <CFormSelect value={Contract} onChange={(e) => {setContract(e.target.value)}} > 
                    <option>
                       Select Contract
                    </option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </CFormSelect>
            </Col>
            <Col xl="6">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
                  <h6>Title*</h6>
                </CFormLabel>
                <CFormInput type="text"  value={Title} onChange={(e) => {setTitle(e.target.value) }}   />
            </Col>   
          </Row>

          <Row style={{marginTop:"20px"}}>
            <Col xl="6">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Trailer Duration*(HH:MM:SS)</h6>
                </CFormLabel>
                <CFormInput type="text"  value={Trailer_time} onChange={(e) => {setTrailer_time(e.target.value) }}   />
            </Col>   

            <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Main Video Duration*(HH:MM:SS)</h6>
                </CFormLabel>
                <CFormInput type="text"  value={Video_time} onChange={(e) => {setVideo_time(e.target.value) }}/>
               
            </Col>
          </Row>

          <Row style={{marginTop:"20px"}}>
            
            <Col xl="6" >
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Description*</h6>
                </CFormLabel>
                <CFormTextarea style={{height:"120px"}}  type="textarea"  value={Discription} onChange={(e) => {setDiscription(e.target.value) }}/>
            </Col>   

            <Col>
            <Row>
              <Col xl="12">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Censorship Rating*</h6>
                </CFormLabel>
                <CFormSelect value={Age} onChange={(e) => {setAge(e.target.value)}} > 
                    <option >
                        Select Age
                    </option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </CFormSelect>
              </Col>
              <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>IMDB Rating(Out Of 10)*</h6>
                </CFormLabel>
                <CFormInput type="text"  value={Rating} onChange={(e) => {setRating(e.target.value) }}   />
            </Col>
            </Row>
            </Col>
          </Row>

          <Row style={{marginTop:"20px"}}>
          <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Select Countries*</h6>
                </CFormLabel>
               
                <Row  style={{paddingTop:"5px"}}>
                  <Col xl="2" >
                  <CFormCheck type="radio"  name="banner" value="Yes" label="Yes" onChange={(e) => {setCountry(e.target.value)}}  />                  
                  </Col>
                
                  <Col xl="2">
                  <CFormCheck type="radio"  name="banner" value="No" label="No" onChange={(e) => {setCountry(e.target.value)}}  />
                  
                  </Col>
                  <Col xl="12">
                  <CFormCheck type="radio"  name="banner" value="All" label="Select All Countries" onChange={(e) => {setCountry(e.target.value)}}  />
                  </Col>

                  <Col xl="6 ">
                  <CFormInput type="text"  value={Country} onChange={(e) => {setCountry(e.target.value) }}   />
                  </Col>
                  
                </Row>           
            </Col>

            <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Publish Type*</h6>
                </CFormLabel>
               
                <Row  style={{paddingTop:"5px"}}>
                  <Col xl="2" >
                  <CFormCheck type="radio"  name="banner" value="Yes" label="Yes" onChange={(e) => {setBanner(e.target.value)}}  />                  
                  </Col>
                
                  <Col xl="2">
                  <CFormCheck type="radio"  name="banner" value="No" label="No" onChange={(e) => {setBanner(e.target.value)}}  />
                  </Col>

                  
                </Row> 
            </Col>
            
          </Row>

          <Row style={{marginTop:"20px"}}>
          <Col xl="12">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Cast & Crews</h6>
                </CFormLabel>
                <CFormInput type="text"   value={Cast} onChange={(e) => {setCast(e.target.value) }}   />
            </Col>
          </Row>
      

        </Form>
      </Container>
      </>
)}
                 
const secondComponent = () => {
  
  return <div>Second Component</div>
}
const thirdComponent = () => {
  return <div>Third Component</div>
}
const finalComponent = () => {
  return <div>Final Component</div>
}

function App () {
  // const [id, setId] = useState(0)
  
  const [status, setstatus] = useState('')
  const [banner, setBanner] = useState('')
  
  // const [category, setcategory] = useState('')
  // const [category1, setcategory1] = useState([])
  // const [subcategory1, setsubcategory1] = useState([])
  // const [subcategory, setsubcategory] = useState('')
  // const [imageval, setImageval] = useState('')
  // const [banner_video, setbanner_video] = useState('')
  // const [Trailer_video, setTrailer_video] = useState('')
  // const [list, setList] = useState([])

  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'My First Step', isDone: true, component:  FirstComponent  },
    { key: 'secondStep', label: 'My Second Step', isDone: false, component:  secondComponent },
    { key: 'thirdStep', label: 'My Third Step', isDone: false, component: thirdComponent },
    { key: 'finalStep', label: 'My Final Step', isDone: false, component: finalComponent },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);
 

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  return (
    <div className="App">
      {/* <h4>Step wizard in React - <a href="https://www.cluemediator.com" title="Clue Mediator" target="blank" rel="nofollow">Clue Mediator</a></h4> */}
      <div className="box">
        <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                <div>Step {i + 1}<br /><span>{step.label}</span></div>
              </li>
            })}
          </ul>
        </div>
        <div className="step-component">
          {activeStep.component()}
        </div>
        <div className="btn-component">
          <input type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key} />
          <input type="button" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}

export default App;
