import './Landing.css';
import profilePic from '../../images/Profile Pic.png';

function LoadPage() {
  return (
    <body>
      <img src={profilePic} className="profilePic" alt="logo" />

      <h1>Matthew Xuereb</h1>
      <h2>"I don't Hello World, I Program the World"</h2>
    </body>
  );
}

export default LoadPage;
