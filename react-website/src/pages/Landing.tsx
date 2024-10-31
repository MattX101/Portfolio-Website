import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import TxtSubHeader from '../components/elements/text/TxtSubHeader.tsx';
import SlidePanel from '../components/SlidePanel.tsx';
import Image from '../components/elements/Image.tsx';
import profilePic from '../images/Profile Pic.png';
import React from 'react';

function LoadPage() {
  return (
    <div className='pgLanding'>
      <Image path={profilePic} className='imgProfileRound'/>

      <TxtHeader>Matthew Xuereb</TxtHeader>
      <TxtSubHeader>"I don't Hello World, I Code the World"</TxtSubHeader>

      <SlidePanel />
    </div>
  );
}

export default LoadPage;
