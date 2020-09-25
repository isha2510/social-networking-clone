import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel=()=>{

    return(
        <div className="storyReel">
            <Story image="https://source.unsplash.com/random/200*300" profileSrc="https://picsum.photos/200/300" title="Isha Tripathi"/>
            <Story image="https://picsum.photos/200" profileSrc="https://source.unsplash.com/random/200*300" title="Sagar Kale"/>

        </div>
    )
}

export default StoryReel;