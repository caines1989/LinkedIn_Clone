import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArcticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
            <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'></div>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn New</h2>
                <InfoIcon />
            </div>
            {newsArcticle ('Simon is kicking butt with React', 'Javascript in general too')}
            {newsArcticle ('first ever React project made by Simon Blatchford', 'LinkedIn is the first one')}
            {newsArcticle ('Covid will not stop us', 'We keep going forward and moving forward')}
            {newsArcticle ('We must keep learning no matter the cost', 'make time....')}
            {newsArcticle ('Javascript all the way....', 'JS first, React frontend, Node backend')}
        </div>
    )
}

export default Widgets
