import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInLeft} from 'react-animations'

export default function History()
{

  const FadeLeft= styled.div`animation: 2s ${keyframes`${fadeInLeft}`} ease`;
  const SlowFadeLeft= styled.div`animation: 3s ${keyframes`${fadeInLeft}`} ease `;
    return(
      
      <section className="history">
        <FadeLeft>
      <div className="education">
        <div className="education-content">
          <h3>Education</h3>
          <div className="education-part">
            <div className="education-part-content">
              <h5>Software Developer from <span id="highlight">Huflit Univesity</span> </h5>
              <p id="highlight">2015-2019</p>
              <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      </FadeLeft>
      <SlowFadeLeft>
      <div className="experience">
        <div className="experience-content">
          <h3>Work Experience</h3>
          <div className="experience-part">
            <div className="experience-part-content">
              <h5>Fresher Front-End Developer from<span id="highlight"> MMSoft Company</span> </h5>
              <p id="highlight">3/2019 - 9/2019</p>
              <p className="description">Be trained about TypeScript, ReactJS, join company's projects and support front-end team. Develop an e-commerce website which uses ReactJs, REST API, Redux, CI/CD (Netlify), Firebase( Authenticate), ES6 , ES7 - 8</p>
            </div>
          </div>
          <div className="experience-part">
            <div className="experience-part-content">
              <h5>Front-End Developer from<span id="highlight"> MangoAds Company</span> </h5>
              <p id="highlight">10/2019 - 12/2019</p>
              <p className="description">Build templates for wordpress using php and laravel, support front-end team.</p>
            </div>
          </div>
        </div>
      </div>
          
      </SlowFadeLeft>
      
      
    </section>
   
    
    )
}