import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilFindInPage, cilLanguage, cilMovie, cilNoteAdd, cilVideo } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

var sid = localStorage.getItem('sid')
let nav = []
if (sid === '1') {
  nav = [
    {
      component: CNavItem,
      name: 'Admin user',
      to: '/base/Home',
      icon: <CIcon icon={cilMovie} customClassName="nav-icon" />,
    },
    {
      component: CNavItem,
      name: 'Contract',
      to: '/base/Contract',
      icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
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
    {
      component: CNavItem,
      name: 'Contract',
      to: '/base/Contract',
      icon: <CIcon icon={cilFindInPage} customClassName="nav-icon" />,
    },
  ]
}

export default nav