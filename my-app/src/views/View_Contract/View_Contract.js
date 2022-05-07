import React, { useState } from 'react'

import {
  CCard,
  CCardBody,
  CTableDataCell,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'
function View_Contract() {


const [list, setList] = useState([])
// const [list, setList] = useState([])


  return (
    <div>
        <br /><br />
      <CCol xs={12} id="table2">
        <CCard className="mb-4">
          <CCardBody>
            <CTable style={{ textAlign: 'center' }} hover>
              <CTableHead>
                <CTableRow style={{ backgroundImage: 'linear-gradient(to right,#16222A,#3A6073)' }}>
                  <CTableHeaderCell style={{ color: 'white' }}>ID</CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Username </CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Email Id </CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Mobile</CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Total Videos</CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Total </CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Status</CTableHeaderCell>
                  <CTableHeaderCell style={{ color: 'white' }}>Action & Contract Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>

              {list.map((item, i) => {
                    return (
                      <>
                        <CTableRow key={i} style={{ backgroundImage: 'linear-gradient(to right,#16222A,#3A6073)' }}>
                          <CTableDataCell style={{ paddingTop: '30px', color: '#FFF' }}> {i + 1} </CTableDataCell>
                          <CTableDataCell style={{ paddingTop: '30px', color: '#FFF' }}> {item.title} </CTableDataCell>
                         
                        </CTableRow>
                      </>
                    )
                  })}


              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  )
}

export default View_Contract
