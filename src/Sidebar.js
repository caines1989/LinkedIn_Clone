import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img 
                src='https://media-exp1.licdn.com/dms/image/C4D16AQGtO0zX9jxcMA/profile-displaybackgroundimage-shrink_350_1400/0/1606245205311?e=1633564800&v=beta&t=XN81y85n0vLFUCC0rpz1gUNQd_fL8LzkbMGlU6k0e2o' 
                alt=''/>
                <Avatar className='sidebar__avatar' />
                <h2>Simon Blatchford</h2>
                <h4>simon.nerdit@gmail.com</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,483</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar