import React from "react";
import "./intro.css";
import bg from "../../assets/profile.jpg"
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png"
<img src="/profile.jpg" alt="Profile" />

function Intro() {
  const OpenResume = ()=>{
    const resumeURL =  process.env.PUBLIC_URL + '/Akash resume.pdf'
    window.open(resumeURL, '_blank')
  }
  return (
    <section id="intro">
      <div className="introContent">
        <div>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Akash</span><br/>Website Designer</span>
        <p className="introPara">I am a skilled Web Developer with experience in creating appealing Web Applications.</p>
        <Link ><button className="btn" onClick={OpenResume}><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
      </div>
      <div>
      <img src={bg} className="bg" alt="profile" />

      </div>
      </div>
      </section>
  );
}

export default Intro;
