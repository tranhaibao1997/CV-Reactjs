import React from 'react'
import {useEffect} from 'react'
import Loading from '../Loading/Loading'

export default function Home()
{
    return(
      
        <section className="introduce">
        <div className="introduce-content">
          <div className="profile-picture">
            <div className="picture-wrapper">
              <img src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/83849345_1108592226185775_2031408630657449984_n.jpg?_nc_cat=106&_nc_ohc=GHv6yFOCjL8AX8rxhdh&_nc_ht=scontent.fsgn5-6.fna&oh=403eda980762951878526d4edc52fd5e&oe=5EC48D20" />
            </div>
          </div>
          <div className="introduce-profile">
            <div id="hello">
              <p>Hello I'm</p>
            </div>
            <h3 id="name">Trần Hải Bảo</h3>
            <h5 id="title">Front-End Developer</h5>
            <p><i className="fa fa-envelope" aria-hidden="true" /> tranhaibao1997@gmail.com</p>
            <p><i className="fa fa-phone" aria-hidden="true" /> +84 932 632 166</p>
            <p><i className="fa fa-home" aria-hidden="true" /> Trịnh Đình Trọng Street, Tân Phú District, HCM City</p>
            <ul>
              <li>
                <a href="https://facebook.com/tranhaibao1997">
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
          </div>
        </div>
      </section>
    )
}