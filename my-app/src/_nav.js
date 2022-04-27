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
import { data } from 'jquery'

// function _nav() {
//   const [_,__,sid] = useContext(AppContext)

  const id = '1'
  if (id == "1") {
   var  _nav = [
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
        // name: 'SubCategoires',
        // to: '/base/subcategoires',
        // icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
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
     _nav = [
      {
        component: CNavItem,
        name: 'Video',
        to: '/base/Video',
        icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
      },
    ]
  }
// }
export default _nav

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Admin user',
//     to: '/base/Home',
//     icon: <CIcon icon={cilMovie} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Categoires',
//     to: '/base/categoires',
//     icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
//   },

//   {
//     component: CNavItem,
//     // name: 'SubCategoires',
//     // to: '/base/subcategoires',
//     // icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Language',
//     to: '/base/Language',
//     icon: <CIcon icon={cilLanguage} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavItem,
//     name: 'Video',
//     to: '/base/Video',
//     icon: <CIcon icon={cilVideo} customClassName="nav-icon" />,
//
//   },
// ]
// export default _nav;
