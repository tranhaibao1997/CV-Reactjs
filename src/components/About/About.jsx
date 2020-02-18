import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInLeft} from 'react-animations'


export default function About()
{
  const Bounce= styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
  const FadeLeft= styled.div`animation: 2s ${keyframes`${fadeInLeft}`} `;
    return(
      <FadeLeft>
        <section className="about-me">
        <div className="about-me-content">
          <div className="about-me-picture">
            <div className="about-me-picture-wrapper">
              <img src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/ab-img.png" />
            </div>
          </div>
          <div className="about-me-profile">
            <h3>About Me</h3>
            <p>Hello, I’m Hai Bao, front-end web-developer based on HCM City. I have experience in web UX-UI building and customization. Also I am good at</p>
            <ul>
              <li>
                HTML5
              </li>
              <li>
                CSS3
              </li>
              <li>
                Bootstrap4
              </li>
              <li>
                SASS
              </li>
              <li>
                JavaScript
              </li>
              <li>
                React
              </li>
              <li>
                Redux
              </li>
              <li>RestAPI</li>
            </ul>
            <Bounce>  <button className="btn"><a id="CV-Download" href="https://drive.google.com/open?id=1vle9azcMv4i6RSH6Z84dBd59KCST8dq-"><i className="fa fa-download" style={{marginRight:'10px'}} aria-hidden="true" />Download CV</a> </button></Bounce> 
          </div>
        </div>
      </section>
      </FadeLeft>
    )
}