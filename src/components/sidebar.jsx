import React, { Component } from 'react'
import Headshot from '../images/headshot.jpg'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="nooverflow">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <img className="author-img" src={Headshot} alt="Profile photo"/>
              <h1 id="colorlib-logo"><a href="#" data-nav-section="introduction">Miranda</a></h1>
              <h1 id="colorlib-logo"><a href="#" data-nav-section="introduction">McClellan</a></h1>
    
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home"></a></li>
                  <li><a href="#" data-nav-section="speeches">Talks</a></li>
                  <li><a href="#" data-nav-section="education">Education</a></li>
                  <li><a href="#" data-nav-section="technical">Technical</a></li>
                  <li><a href="#" data-nav-section="awards">Awards</a></li>
                  <li><a href="#about" data-nav-section="policy">Public Policy</a></li>
                  <li><a href="#" data-nav-section="teaching">Teaching</a></li>
                  <li><a href="#" data-nav-section="writing">Writing</a></li>
                </ul>
              </div>
            </nav>
            <div>
            <div className="panel-heading"> Native English | Proficient Spanish | Mandarin HSK II </div>
            </div>
            <span className="colorlib-footer">
                <hr style={{width:50}}></hr>
                <div className="panel-heading">Let's Connect!</div>
                <div>
                <a href="miranda-mcc@outlook.com"><i className="icon-mail"></i></a> 
                <a href="https://www.linkedin.com/in/mirandamcc/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                <a href="https://github.com/MirandaMcc" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
                <a href="https://medium.com/miranda-in-the-middle" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a>
                </div>
          </span>
          </aside>
        </div>
      </div>
    )
  }
}

/*
<br></br>
<center>
  <a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View CV</a>
</center>
*/
