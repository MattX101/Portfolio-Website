import React from 'react';
import { useNavigate } from "react-router-dom";
import TxtHeader from '../components/elements/text/TxtHeader.tsx';
import TxtSubHeader from '../components/elements/text/TxtSubHeader.tsx';
import ProfilePic from '../components/elements/images/ProfilePic.tsx';
import BtnSlidingToggle from '../components/elements/buttons/textLink/BtnSlidingToggle.tsx';

function LoadPage() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <ProfilePic />

      <div className='my-4' />

      <TxtHeader>Matthew Xuereb</TxtHeader>
      <TxtSubHeader>"I don't Hello World, I Code the World"</TxtSubHeader>

      <BtnSlidingToggle
        text='Continue'
        onClick={() => navigate('/home')} />
    </div>
  );
}

export default LoadPage;
