import React, { Component } from 'react'
import GradPic from '../images/graduation.jpg'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="speeches">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="about-desc">
                <span className="heading-meta"><strong>Talks and Panels</strong></span><hr></hr>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <center>
                    <span className="heading-meta">2022</span>
                    <h2 className="colorlib-talks"> Star Hacks - Tech Intersections Panel</h2> 
                    <p>Spoke about my experience at the intersection of computer science and policy on panel for women pursuing careers blending technology and another field </p>
                    <br></br>

                    <span className="heading-meta">2020</span>
                    <h2 className="colorlib-talks">US Embassy in Spain </h2> 
                    <p>Gave a series of talks to educate Spanish high schooler students about 5G networks</p>
                    <br></br>

                    <span className="heading-meta">2019</span>
                    <h2 className="colorlib-talks">Student Panel for MIT Office of Minority Education</h2> 
                    <p>Responded to student group tensions after the use of a racial slur</p>
                   
                    <h2 className="colorlib-talks">Student Representative for EECS Department Visiting Committee </h2> 
                    <p>Advocated for improving the process to select academic advisors and communication between faculty and students </p>
                    <br></br>
                    <span className="heading-meta">2018</span>
                    <h2 className="colorlib-talks">Microsoft Software Engineering Intern Panel </h2> 
                    <p>Invited to speak about my experience as a female technical intern</p>
                    <br></br>
                    <span className="heading-meta">2016</span>
                    <h2 className="colorlib-talks">MIT Corporation Meeting</h2> 
                    <p>Co-presented the Black Students' Union recommendations for diversity and inclusion in response to national racialized events</p>
                    </center>
                </div>
                </div>
                <div className="col-md-2"></div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
   
    )
  }
}
