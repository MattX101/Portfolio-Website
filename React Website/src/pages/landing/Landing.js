import './Landing.css';
import '../../styles/SlidePanel.css';
import SlidePanel from '../../components/SlidePanel'
import profilePic from '../../images/Profile Pic.png';

function LoadPage() {
  return (
    <body>
      <img src={profilePic} className="profilePic" alt="logo" />

      <h1>Matthew Xuereb</h1>
      <h2>"I don't Hello World, I Program the World"</h2>
      
      <SlidePanel></SlidePanel>
    </body>
  );
}

export default LoadPage;
