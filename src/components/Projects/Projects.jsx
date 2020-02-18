import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {fadeInLeft} from 'react-animations'

export default function Projects() {
    const FadeLeft= styled.div`animation: 2s ${keyframes`${fadeInLeft}`} `;
    return (
        <FadeLeft>
        <section className="projects">
            <div className="projects-content">
                <h3>Recent Portfolio</h3>
                <Tabs>
                    <TabList>
                        <Tab>Shopping Page</Tab>
                        <Tab>Project 2 (on Going)</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 style={{ color:'#0bceaf'}}>build an e-commercial system which uses ReactJs (React version 16.8)</h2>
                        <h4>Link: <a href="https://bao-reactjs.netlify.com/">Go To My Shop</a></h4>
                        <div className="img-container">
                        <img src="https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/86802393_1121532884891709_4238640977461379072_o.jpg?_nc_cat=104&_nc_ohc=DE1svxE8L10AX-RsXkr&_nc_ht=scontent.fsgn5-7.fna&oh=be8fc1a74eda3ab20045e06aaf470b01&oe=5EFF3559"></img>
                        </div>
                        
                    </TabPanel>
                    <TabPanel>
                        <h2>On Going...</h2>
                    </TabPanel>
                </Tabs>
            </div>

        </section>
        </FadeLeft>

    )
}