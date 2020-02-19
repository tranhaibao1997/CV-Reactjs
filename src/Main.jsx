import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import History from './components/History/History.jsx'
import Projects from './components/Projects/Projects.jsx'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from './components/Loading/Loading.jsx'

const HomePage = React.lazy(() => import('./components/Home/Home'))
const AboutPage = React.lazy(() => import('./components/About/About'))
const ExperiencePage = React.lazy(() => import('./components/History/History'))
const ProjectPage = React.lazy(() => import('./components/Projects/Projects'))
const ContactPage = React.lazy(() => import('./components/Contact/Contact'))
function Main() {
    useEffect(()=>{
        setLoading(true)
    },[])
    const [loading,setLoading]=useState(false);
    if(loading===false)
    {
        return <Loading></Loading>
    }
  
    
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            
            <React.Suspense fallback={<Loading/>}>
            <Switch>
            <Route path="/" exact><HomePage/></Route>
            <Route path="/About" component={AboutPage}/>
            <Route path="/Experience" component={ExperiencePage}/>
            <Route path="/Portfolio" component={ProjectPage}/>
            <Route path="/Contact" component={ContactPage}/>
      
            </Switch>
            </React.Suspense>
           
        </BrowserRouter>
      



    )
}
export default Main