import React, { useState } from 'react';
import './wizard.css'
import { CCol,CCardTitle,CFormTextarea, CFormSelect,CCardImage, CFormLabel, CFormInput, CRow,CCard,CCardBody,CFormCheck} from '@coreui/react'
import { env } from '../../../environment';
import { Container, Form,Row,Col } from 'react-bootstrap';
const axios = require('axios');

// const FirstComponent = () => {
//   return(<>hello</>)
// }

const FirstComponent= ()=> {
  const [title, settitle] = useState('')
  const [method, setmethod] = useState('')
  const [rdate, setrdate] = useState('')
  const [edate, setedate] = useState('')
  const [language1, setLanguage1] = useState([])
  const [language, setLanguage] = useState()
  const [status, setstatus] = useState('')
  const [banner, setBanner] = useState('')
  return (
  <>
 
      <Container>
        <h5 style={{fontSize:"11px"}}>Note: *filds required. Please fill and click next</h5>
        <Form>
          <Row>
            <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
                  <h6>Contract*</h6>
                </CFormLabel>
                <CFormSelect value={method} onChange={(e) => {setmethod(e.target.value)}} > 
                    <option  selected>
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
                <CFormInput type="text"  value={title} onChange={(e) => {settitle(e.target.value) }}   />
            </Col>   
          </Row>

          <Row style={{marginTop:"20px"}}>
            <Col xl="6">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Trailer Duration*(HH:MM:SS)</h6>
                </CFormLabel>
                <CFormInput type="text"  value={title} onChange={(e) => {settitle(e.target.value) }}   />
            </Col>   

            <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Main Video Duration*(HH:MM:SS)</h6>
                </CFormLabel>
                <CFormInput type="text"  value={title} onChange={(e) => {settitle(e.target.value) }}/>
               
            </Col>
          </Row>

          <Row style={{marginTop:"20px"}}>
            
            <Col xl="6" >
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Description*</h6>
                </CFormLabel>
                <CFormTextarea style={{height:"120px"}}  type="textarea"  value={title} onChange={(e) => {settitle(e.target.value) }}/>
            </Col>   

            <Col>
            <Row>
              <Col xl="12">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Censorship Rating*</h6>
                </CFormLabel>
                <CFormSelect value={method} onChange={(e) => {setmethod(e.target.value)}} > 
                    <option  selected >
                        Select Age
                    </option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </CFormSelect>
              </Col>
              <Col>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-6 col-form-label" >
                  <h6>Trailer Duration*(HH:MM:SS)</h6>
                </CFormLabel>
                <CFormInput type="text"  value={title} onChange={(e) => {settitle(e.target.value) }}   />
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
                  <CFormCheck type="radio"  name="banner" value="Yes" label="Yes" onChange={(e) => {setBanner(e.target.value)}}  />                  
                  </Col>
                
                  <Col xl="2">
                  <CFormCheck type="radio"  name="banner" value="No" label="No" onChange={(e) => {setBanner(e.target.value)}}  />
                  
                  </Col>
                  <Col xl="12">
                  <CFormCheck type="radio"  name="banner" value="No" label="Select All Countries" onChange={(e) => {setBanner(e.target.value)}}  />
                  </Col>

                  <Col xl="6 ">
                  <CFormInput type="text"  value={title} onChange={(e) => {settitle(e.target.value) }}   />
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
                <CFormInput type="text"   value={title} onChange={(e) => {settitle(e.target.value) }}   />
            </Col>
          </Row>
      

        </Form>
      </Container>
      </>
)}



const secondComponent = () => {
  return <div>
     
     <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 6 }}>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Hindi</CCardTitle>
              <CCardTitle>હિન્દી</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Gujarati</CCardTitle>
              <CCardTitle>ગુજરાતી</CCardTitle>
              
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Bengali</CCardTitle>
              <CCardTitle>বাংলা</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>kannada</CCardTitle>
              <CCardTitle>ಕನ್ನಡ</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Malayalam</CCardTitle>
              <CCardTitle>മലയാളം</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Marathi</CCardTitle>
              <CCardTitle>मराठी</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Tamil</CCardTitle>
              <CCardTitle>தமிழ்</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>


        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
            <CCardBody>
              <CCardTitle>Telugu</CCardTitle>
              <CCardTitle>తెలుగు</CCardTitle>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  </div>
}
const thirdComponent = () => {
  return <div>
  <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
      <CCardBody>
        <CCardTitle>Drama</CCardTitle>
      </CCardBody>
    </CCard>
  </CCol>

  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
      <CCardBody>
        <CCardTitle>Movies</CCardTitle>
      </CCardBody>
    </CCard>
  </CCol>

  <CCol xs>
    <CCard>
      <CCardImage orientation="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5eQ5Opr0NqjS3ue3GJSUJkFNauKAkv5rBw&usqp=CAU" />
      <CCardBody>
        <CCardTitle>Web Series</CCardTitle>
      </CCardBody>
    </CCard>
  </CCol>
</CRow>
</div>
}
const FinalComponent = async () => {

  const [imageval, setImageval] = useState('')
  const [banner_video, setbanner_video] = useState('')
  const [Trailer_video, setTrailer_video] = useState('')

  const saveFile = (e) => {
    console.log(e)
    setImageval(e.target.files[0])
    // setbanner_img(e.target.files[0])
  }
  const saveFile1 = (e) => {
    console.log(e.target)
    setbanner_video(e.target.files[0])
  }

  const saveFile2 = (e) => {
    console.log(e.target)
    setTrailer_video(e.target.files[0])
  }

  const formData = new FormData()

  formData.append('banner_video', banner_video)
  formData.append('Trailer_video', Trailer_video)
  formData.append('imageval', imageval)
  


  // try {
  await axios
    .post(env.apiURL + 'viInsertBanner', formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        userId: localStorage.getItem('userId'),
      },
    })
    .then((r) => {
      console.log(formData)
    })

return <div>  

<CCard style={{width:"100%"}}>
      <CCardBody>
        <div>
            <p>Video Upload Type</p>
            <CFormCheck type="radio"  name="status" value="Active" label="Streaming Upload"   />
        </div><hr/>
        

        <CRow >
          <div style={{display:"flex"}}>
            <div className='video'>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>Select-Video</h6>
                </CFormLabel>
                <CCol sm={3}>
                  <input type="file" onChange={saveFile1}   accept=".mp4 , video"/>
                  <p>( Please enter .mp4 )</p>
                </CCol>
            </div>
            <div className='video'>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>Trailer-video</h6>
                </CFormLabel>
                <CCol sm={3}>
                  <input type="file" onChange={saveFile2}  accept=".mp4 , video" />
                  <p>( Please enter .mp4 )</p>
                </CCol>
            </div>
          </div>
          </CRow>


          <CRow >
          <div style={{display:"flex"}}>
            <div className='video'>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>SubTitle</h6>
                </CFormLabel>
                <CCol sm={5}>
                  <input type="file"   accept=".mp4 , video"/>
                  <p>( The video subtitle must be a file of type:srt. )</p>
                </CCol>
            </div>
            <div className='video'>
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>SubTitle</h6>
                </CFormLabel>
                <CCol sm={5}>
                  <input type="file"  accept=".mp4 , video" />
                  <p>( The video subtitle must be a file of type:srt. )</p>

                </CCol>
            </div>
          </div>
          </CRow>  

          <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>Mobile-Image</h6>
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="file" onChange={saveFile}     accept=".jpg, .jpeg, .png"/>
                </CCol>
          </CRow>  



          <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>Default-Image</h6>
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="file"    accept=".jpg, .jpeg, .png"/>
                </CCol>
          </CRow>  
      
          <CRow className="mb-3">
                <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                  <h6>Upcoming movie poster</h6>
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="file"    accept=".jpg, .jpeg, .png"/>
                </CCol>
          </CRow>
      </CCardBody>
    </CCard>






  </div>
}

function App() {

  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Video detail', isDone: true, component: FirstComponent },
    { key: 'secondStep', label: 'Category', isDone: false, component: secondComponent },
    { key: 'thirdStep', label: 'Sub Category', isDone: false, component: thirdComponent },
    { key: 'finalStep', label: 'Upload video/image ', isDone: false, component: FinalComponent },
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
