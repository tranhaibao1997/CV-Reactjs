import React,{useEffect} from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import History from './components/History/History.jsx'
import Projects from './components/Projects/Projects.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from './components/Loading/Loading.jsx'


function Main() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <React.Suspense fallback={<Loading/>}>
            <Switch>
            <Route path="/" exact><Home></Home></Route>
            <Route path="/About" component={About}/>
            <Route path="/Experience" component={History}/>
            <Route path="/Portfolio" component={Projects}/>
      
            </Switch>
            </React.Suspense>
           
        </BrowserRouter>
      



    )
}
export default Main