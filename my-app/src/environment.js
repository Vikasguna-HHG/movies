//Node live url
export const env = {
    apiURL: 'https://client-hhg.herokuapp.com/'    
};
// import React,{ useEffect, useState } from 'react'
//     import { BrowserRouter,Switch, Route, Link} from 'react-router-dom';
//     import Router from './utls/Router'
//     import AppContext from "./utls/AppContext";
//     import Header from "./components/Header";
//     import SwalFire from "./utls/Swal";
//     import Auth from "./utls/guard/Auth";
//     import Home from "./components/Home/Home";

//     function App(){

//         const [userId,setUserId] = useState(null)
//         const [userName,setUserName] = useState('')
//         const [userStatus,setUserStatus] = useState(false)

//         useEffect(() => {

//             handleLoginState()

//         }, []);

//         function handleLogout(){

//             localStorage.removeItem('userId')
//             localStorage.removeItem('active_profile_id')
//             localStorage.removeItem('userName')
//             localStorage.removeItem('accessToken')

//             SwalFire("success","You Have Logout Successfully",1500);

//             setUserId('')
//             setUserName('')
//             setUserStatus(false)
//         }

//         function handleLoginState(){

//             let name = localStorage.getItem('userName');
//             let user = localStorage.getItem('userId');

//             if(user){
//                 setUserId(user)
//                 setUserName(name)
//                 setUserStatus(true)
//             }else{
//                 setUserId('')
//             }
//         }

//         if(userId == null) return (<></>)

//         return (
//             <AppContext.Provider value={{userId:userId,login: userStatus, userName: userName,handleLoginState:handleLoginState,handleLogout:handleLogout}}>
//                 <BrowserRouter>
//                     <Header/>
//                     <Switch>
//                         {
//                             Router.map((item,k) => {
//                                 if(item.guard == 'auth'){
//                                     return <Auth key={k} component={item.component} path={item.path} exact={item.exact} />
//                                 }else{
//                                     return <Route key={k} component={item.component} path={item.path} exact={item.exact} />
//                                 }
//                             })
//                         }

//                         <Route path="*"><Home /></Route>

//                     </Switch> 
//                 </BrowserRouter>
//             </AppContext.Provider>
//         )
//     }

//     export default App;