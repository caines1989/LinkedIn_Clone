import { Avatar } from '@material-ui/core';
import ThumbsUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import React from 'react';
import './Post.css';
import InputOption from './InputOption';

function posts({ name, description, message, photoURL }) {
    return (
        <div className='post'>
            <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
             </div>
            </div>
           
            <div className='post__body'>
                <p>{message}</p>            
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbsUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
}

export default posts;
