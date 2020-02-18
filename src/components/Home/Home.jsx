import React, { useState } from 'react'
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInLeft,tada} from 'react-animations'





export default function Home()
{

  

  const FadeLeft= styled.div`animation: 2s ${keyframes`${fadeInLeft}`} ease`;
  const SlowFadeLeft1= styled.div`animation: 2.5s ${keyframes`${fadeInLeft}`} ease  `;
  const SlowFadeLeft2= styled.div`animation: 3s ${keyframes`${fadeInLeft}`} ease `;
  const SlowFadeLeft3= styled.div`animation: 3.3s ${keyframes`${fadeInLeft}`} ease `;
  const SlowFadeLeft4= styled.div`animation: 3.6s ${keyframes`${fadeInLeft}`} ease `;
  const SlowFadeLeft5= styled.div`animation: 4s ${keyframes`${fadeInLeft}`} ease `;
  const SlowFadeLeft6= styled.div`animation: 4.3s ${keyframes`${fadeInLeft}`} ease `;
  const Shake = styled.div`animation: 2s ${keyframes`${tada}`}; animation-iteration-count:3`;
  
    return(
      <FadeLeft>
        <section className="introduce">
        <div className="introduce-content">
          <div className="profile-picture">
            <SlowFadeLeft1>
            <div className="picture-wrapper">
              <img src="/profile.jpg" />
            </div>
            </SlowFadeLeft1>
          </div>
          <div className="introduce-profile">
            <SlowFadeLeft2>
              <Shake>
              <div id="hello">
              <p>Hello I'm</p>
            </div>
              </Shake>
          
            </SlowFadeLeft2>
            <SlowFadeLeft3>
            <h3 id="name">Trần Hải Bảo</h3>
            </SlowFadeLeft3>
           
            
            <SlowFadeLeft4>
            <h5 id="title">Front-End Developer</h5>
            </SlowFadeLeft4>
           <SlowFadeLeft5>
           <p><i className="fa fa-envelope" aria-hidden="true" /> tranhaibao1997@gmail.com</p>
            <p><i className="fa fa-phone" aria-hidden="true" /> +84 932 632 166</p>
            <p><i className="fa fa-home" aria-hidden="true" /> Trịnh Đình Trọng Street, Tân Phú District, HCM City</p>
           </SlowFadeLeft5>
        <SlowFadeLeft6>
        <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011050242359">
                  <i className="fab fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a>
                  <i className="fab fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="https://github.com/tranhaibao1997">
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
              </li>
            </ul>
        </SlowFadeLeft6>
        
          </div>
        </div>
      </section>
      </FadeLeft>
    )
}