import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  const [link, setLink] = useState("");
  const [Tab,setTab]=useState("")
  function ChangeLink(link) {
    setLink(link)
  }
  function openTab()
  {
    if(Tab==="")
    {
    setTab("mobile-nav-open")
    }
    else
    {
 setTab("");
    }
  }

  return (
    <>
      {/* Hidden Menu */}
      <div id="nav-bar-for-mobile" className={Tab}>
      <i style={{position:'absolute', right:'10px', top:'30px', fontSize:'30px'}} class="fas fa-window-close" id="nav-mobile-btn-close" onClick={openTab}></i>
        <ul>
          <li>
            <Link className={link === "home" ? "nav-link active" : "nav-link"} id="home" to="/" onClick={(a) => ChangeLink('home')}>Home</Link>
          </li>
          <li>
            <Link className={link === "about" ? "nav-link active" : "nav-link"} id="about" to="/About" onClick={(a) => ChangeLink('about')}>About</Link>
          </li>
          <li>
            <Link className={link === "exp" ? "nav-link active" : "nav-link"} id="experients" to="/Experience" onClick={(a) => ChangeLink('exp')}>Experience</Link>
          </li>
          <li>
            <Link className={link === "port" ? "nav-link active" : "nav-link"} id="portfollo" to="/PortFolio" onClick={(a) => ChangeLink('port')}>Portfolio</Link>
          </li>
          <li>
            <Link className={link === "contact" ? "nav-link active" : "nav-link"} id="Contact" to="/Contact" onClick={(a) => ChangeLink('contact')}>Contact</Link>
          </li>
        </ul>
      </div>
      {/* Hidden Menu */}
      <section className="nav-bar">

        <ul className="nav-bar-big-list">
          <li className="logo">
            <img src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/fedalon_logo.png" />
          </li>
          <li className="nav-bar-selection-wrapper">
            <ul className="nav-bar-selection">
              <li>
                <Link className={link === "home" ? "nav-link active" : "nav-link"} id="home" to="/" onClick={(a) => ChangeLink('home')}>Home</Link>
              </li>
              <li>
                <Link className={link === "about" ? "nav-link active" : "nav-link"} id="about" to="/About" onClick={(a) => ChangeLink('about')}>About</Link>
              </li>
              <li>
                <Link className={link === "exp" ? "nav-link active" : "nav-link"} id="experients" to="/Experience" onClick={(a) => ChangeLink('exp')}>Experience</Link>
              </li>
              <li>
                <Link className={link === "port" ? "nav-link active" : "nav-link"} id="portfollo" to="/PortFolio" onClick={(a) => ChangeLink('port')}>Portfolio</Link>
              </li>
              <li>
                <Link className={link === "contact" ? "nav-link active" : "nav-link"} id="Contact" to="/Contact" onClick={(a) => ChangeLink('contact')}>Contact</Link>
              </li>
            </ul>
          </li>
          <li className="nav-bar-btn" >
            <btn id="nav-bar-btn" onClick={openTab}>
            <i className="fas fa-bars"></i>
            </btn>
           
          </li>
        </ul>
      </section>

    </>
  )
}
export default Navbar