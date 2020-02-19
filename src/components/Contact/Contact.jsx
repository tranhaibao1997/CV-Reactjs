import React from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInUp,tada} from 'react-animations'

export default function Contact() {
    const SlowFadeUp1= styled.div`animation: 2.5s ${keyframes`${fadeInUp}`} ease  `;
  const SlowFadeUp2= styled.div`animation: 3s ${keyframes`${fadeInUp}`} ease `;
  const SlowFadeUp3= styled.div`animation: 3.3s ${keyframes`${fadeInUp}`} ease `;
    return (
        <>
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
                            <p className="contact-part-info">
                                tranhaibao1997@gmail.com
                            </p>
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
                            <p className="contact-part-info">
                                +84 932 632 166
                            </p>
                        </div>
                        </SlowFadeUp3>
                    </li>
                </ul>
            </section>
        </>
    )
}