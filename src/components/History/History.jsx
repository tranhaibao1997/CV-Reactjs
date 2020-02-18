import React from 'react'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'
import { fadeInLeft } from 'react-animations'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";


export default function History() {

  const FadeLeft = styled.div`animation: 2s ${keyframes`${fadeInLeft}`} ease`;
  const SlowFadeLeft = styled.div`animation: 3s ${keyframes`${fadeInLeft}`} ease `;
  return (
    <section className="history">

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Finding ReactJS Front-End Jobs to improve skills </h3>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Resigned in <span id="highlight">MangoAds Company</span></h3>
    
       
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Start Working in <span id="highlight">MangoAds Company</span></h3>
          <h4 className="vertical-timeline-element-subtitle">Front-End Developer</h4>
          <p>
          Build templates for wordpress using php and laravel, support front-end team.
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sep 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Resigned in <span id="highlight">MMSOFT Company</span></h3>
    
       
        </VerticalTimelineElement>
     
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2019"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Graduated from <span id="highlight">Huflit University</span></h3>
         
      
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Mar 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Start Working in <span id="highlight">MMSoft Company</span></h3>
          <h4 className="vertical-timeline-element-subtitle">Front-End Fresher Developer</h4>
          <p>
          Be trained about TypeScript, ReactJS, join company's projects and support front-end team. Develop an e-commerce website which uses ReactJs, REST API, Redux, CI/CD (Netlify), Firebase( Authenticate), ES6 , ES7 - 8
    </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2015"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Start Studying in <span id="highlight">Huflit University</span></h3>
         
          <p>
          Information Technology
    </p>
        </VerticalTimelineElement>
        
        
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
    //   <section className="history">
    //     <FadeLeft>
    //   <div className="education">
    //     <div className="education-content">
    //       <h3>Education</h3>
    //       <div className="education-part">
    //         <div className="education-part-content">
    //           <h5>Software Developer from <span id="highlight">Huflit Univesity</span> </h5>
    //           <p id="highlight">2015-2019</p>
    //           <p className="description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </FadeLeft>
    //   <SlowFadeLeft>
    //   <div className="experience">
    //     <div className="experience-content">
    //       <h3>Work Experience</h3>
    //       <div className="experience-part">
    //         <div className="experience-part-content">
    //           <h5>Fresher Front-End Developer from<span id="highlight"> MMSoft Company</span> </h5>
    //           <p id="highlight">7/2019 - 9/2019</p>
    //           <p className="description">Be trained about TypeScript, ReactJS, join company's projects and support front-end team. Develop an e-commerce website which uses ReactJs, REST API, Redux, CI/CD (Netlify), Firebase( Authenticate), ES6 , ES7 - 8</p>
    //         </div>
    //       </div>
    //       <div className="experience-part">
    //         <div className="experience-part-content">
    //           <h5>Front-End Developer from<span id="highlight"> MangoAds Company</span> </h5>
    //           <p id="highlight">11/2019 - 2/2020</p>
    //           <p className="description">Build templates for wordpress using php and laravel, support front-end team.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   </SlowFadeLeft>





  )
}