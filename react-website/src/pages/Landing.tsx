import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import TxtSubHeader from '../components/elements/text/TxtSubHeader.tsx';
import SlidePanel from '../components/SlidePanel.tsx';
import ProfilePic from '../components/elements/images/ProfilePic.tsx';
import React from 'react';

function LoadPage() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <ProfilePic />

      <div className='my-4' />
      
      <TxtHeader>Matthew Xuereb</TxtHeader>
      <TxtSubHeader>"I don't Hello World, I Code the World"</TxtSubHeader>

      <SlidePanel />
    </div>
  );
}

export default LoadPage;
