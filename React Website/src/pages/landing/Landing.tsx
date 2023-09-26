import './style/style.css';
import SlidePanel from '../../components/SlidePanel.tsx';
import profilePic from '../../images/Profile Pic.png';
import React from 'react';

function LoadPage() {
  return (
    <div className='landing'>
      <img src={profilePic} className="profilePic" alt="logo" />

      <h1>Matthew Xuereb</h1>
      <h2>"I don't Hello World, I Code the World"</h2>

      <SlidePanel />
    </div>
  );
}

export default LoadPage;
