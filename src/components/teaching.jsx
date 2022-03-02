import React, { Component } from 'react'
import GradPic from '../images/graduation.jpg'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="teaching">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="about-desc">
                <span className="heading-meta"><strong>Teaching</strong></span><hr></hr>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <center>
                    <h2 className="colorlib-heading">Microsoft TEALS</h2> 
                    <p className ="heading-section"><strong> Volunteer Teacher</strong></p>
                    <span className="heading-meta">August 2021 - June 2022</span>
                    <p>Co-taught cybersecurity fundamentals class at Melissa High School</p>

                    <h2 className="colorlib-heading">CyberWeek.org</h2> 
                    <p className ="heading-section"><strong>Curriculum Writing Team Lead </strong></p>
                    <span className="heading-meta">May 2020 - August 2020</span>
                    <p>Developed K-12 curriculum to teach topics in cybersecurity, authentication, and online safety</p>
                    <p>Adapted curriculum to online learning for the COVID-19 pandemic</p>
                    <p>Taught a Zoom session called "Healthy Habits for Living, Working, and Playing Online" to about 40 students in 6-12th grades</p>

                    <h2 className="colorlib-heading">The Educational Justice Institute @ MIT </h2> 
                    <p className ="heading-section"><strong> Creative Writing Teaching Assistant </strong></p>
                    <span className="heading-meta">February - May 2018</span>
                    <p>Assisted teaching writing style and technique at a maxiumum security prison outside of Boston</p>

                    <h2 className="colorlib-heading">MIT Department of Electrical Engineering and Computer Science (EECS)</h2> 
                    <p className ="heading-section"><strong> 6.s080 Introduction to Python | Lab Assistant </strong></p>
                    <span className="heading-meta">January 2018</span>
                    <p></p>
                   
                    <p className ="heading-section"><strong>6.005 Software Construction | Lab Assistant </strong></p>
                    <span className="heading-meta">February - May 2016</span>
                    <p>Responded to students' questions during office hours and online through Piazza</p>
                    <p>Playtested homework assignments and helped students learn to debug coding issues</p>
                
                    <h2 className="colorlib-heading">MIT Global Teaching Laboratories in Mexico</h2> 
                    <p className ="heading-section"><strong>Computer Science Mentor </strong></p>
                    <span className="heading-meta">January 2016</span>
                    <p>Taught high school seniors to code Android applications using MIT App Inventor </p>
                    <p>Mentored four groups of girls participating in the Technovation app building challenge to create apps that positively impact their community. One team placed in Mexican national competition.</p>
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
