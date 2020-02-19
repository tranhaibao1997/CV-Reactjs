import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled,{keyframes} from 'styled-components'
import {bounce} from 'react-animations'
import {zoomInDown,flash} from 'react-animations'

export default function Projects() {
    const FadeLeft= styled.div`animation: 2s ${keyframes`${zoomInDown}`} `;
    const Shake = styled.div`animation: 1.5s ${keyframes`${flash}`} ; animation-iteration-count:3`;
    return (
        <FadeLeft>
        <section className="projects">
            <div className="projects-content">
                <h3>Recent Portfolio</h3>
                <Tabs>
                    <TabList>
                        <Tab>Shopping Page</Tab>
                        <Tab><Shake>Project 2 (on Going)</Shake></Tab>
                    </TabList>

                    <TabPanel>
                        <h2><a style={{ color:'#0bceaf', textDecoration:'none'}} href="https://bao-reactjs.netlify.com/">build an e-commercial system which uses ReactJs (React version 16.8)</a></h2>
                      
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