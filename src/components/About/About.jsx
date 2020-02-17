import React from 'react'

export default function About()
{
    return(
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
            <button className="btn">Download CV <i className="fa fa-download" aria-hidden="true" /></button>
          </div>
        </div>
      </section>
    )
}