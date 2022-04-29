import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {env} from '../../environment'

export default function Pdf() {
    const [list,setList] = useState('');

    function getdata() {
        axios
          .get(env.apiURL+`Contract_find_data`)
          .then(function (res) {
            console.log(res.data.data)
            setList(res.data.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    
      useEffect(() => {
        getdata()
      }, [])
  return (
    <>hi
    </>
  )
}
