import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInUp,tada,fadeInDownBig} from 'react-animations'

export default function Contact() {
    const FadeLeft= styled.div`animation: 2s ${keyframes`${fadeInDownBig}`} `;
    const SlowFadeUp1= styled.div`animation: 2.5s ${keyframes`${fadeInUp}`} ease  `;
  const SlowFadeUp2= styled.div`animation: 3s ${keyframes`${fadeInUp}`} ease `;
  const SlowFadeUp3= styled.div`animation: 3.3s ${keyframes`${fadeInUp}`} ease `;
    return (
        <>
        <FadeLeft>
            <section className="contact">
                <h3 style={{textAlign:'center',fontSize:'30px'}}>Contact Me</h3>
                <ul className="contact-list">
                    <li>
                        <SlowFadeUp1>

                     
                        <div className="contact-part">
                            <div className="contact-part-icon">
                                <i class="fas fa-location-arrow"></i>
                            </div>
                            <p className="contact-part-title">
                                Address
                        </p>
                            <p className="contact-part-info">
                                Trịnh Đình Trọng Street, Phú Trung Ward, Tân Phú District, Ho Chi Minh City
                            </p>
                        </div>
                        </SlowFadeUp1>
                    </li>
                    <li>
                        <SlowFadeUp2>

                        
                        <div className="contact-part">
                            <div className="contact-part-icon">
                            <i class="fas fa-envelope"></i>
                            </div>
                            <p className="contact-part-title">
                                Email
                        </p>
                            <a style={{color:'black',textDecoration:'none'}} className="contact-part-info" href="mailto:tranhaibao1997@gmail.com">
                                tranhaibao1997@gmail.com
                            </a>
                        </div>
                        </SlowFadeUp2>
                    </li>
                    <li>
                        <SlowFadeUp3>

                      
                        <div className="contact-part">
                            <div className="contact-part-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <p className="contact-part-title">
                                Phone
                        </p>
                        <a style={{color:'black',textDecoration:'none'}} className="contact-part-info" href="tel:0913620322">
                                +84 913 620 322
                            </a>
                        </div>
                        </SlowFadeUp3>
                    </li>
                </ul>
                
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4616337330926!2d106.63898441533422!3d10.775911862148549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea3f54477ab%3A0xec28093fe3d91362!2zVHLhu4tuaCDEkMOsbmggVHLhu41uZywgUGjDuiBUcnVuZywgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1582096609894!5m2!1sen!2s" width={'100%'} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />

            </section>
            </FadeLeft>
        </>
    )
}