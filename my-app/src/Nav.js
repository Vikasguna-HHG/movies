import React, { useContext, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilLanguage,
  cilMovie,
  cilNoteAdd,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilVideo,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import AppContext from './Context'
import axios from 'axios'

var sid = localStorage.getItem('sid')

let nav = []; 


if (sid == '1') {
   nav = [
    {
      component: CNavItem,
      name: 'Admin user',
      to: '/base/Home',
      icon: <CIcon icon={cilMovie} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Categoires',
      to: '/base/categoires',
      icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Language',
      to: '/base/Language',
      icon: <CIcon icon={cilLanguage} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Video',
      to: '/base/Video',
      icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
  
    },
  ]
} else {
   nav = [
    
    {
      component: CNavItem,
      name: 'Video',
      to: '/base/Video',
      icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
  
    },
  ]
}

export default nav;
