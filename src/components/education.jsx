import React, { Component } from 'react'
import GradPic from '../images/graduation.jpg'

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="education">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="about-desc">
                <span className="heading-meta"><strong>Education</strong></span><hr></hr>
                <div className="col-md-6">
                    <h2 className="colorlib-heading">Massachusetts Institute of Technology</h2> <span className="heading-meta">Cambridge, MA</span>
                    <p className ="heading-section"><strong>M.Eng. in Computer Systems, June 2019</strong></p>
                    <p>GPA: 4.8/5.0</p>

                    <p className ="heading-section"><strong>B.S. in Computer Science with Minor in African Diaspora Studies, June 2018</strong></p>
                    <p>GPA: 4.6/5.0</p>
                   
                    <h2 className="colorlib-heading">University of Cambridge, St. Catharine's College</h2>  <span className="heading-meta">Cambridge, England</span>
                    <p className ="heading-section"><strong>Cambridge-MIT Exchange, 2016-2017</strong></p>
                    <p>Exam Score: 2.1</p>

                    <h2 className="colorlib-heading">School for the Talented and Gifted</h2> <span className="heading-meta">Dallas, TX</span>
                    <p className ="heading-section"><strong>High School, May 2014</strong></p>
                    <p>GPA: 3.98/4.0, National AP Scholar, National Merit Scholar</p>
                
                </div>
                </div>
                <div className="col-md-3">
                    <img src={GradPic} alt="grad picture" ></img>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
   
    )
  }
}
