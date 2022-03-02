import React, { Component } from 'react'
import Award from '../images/award.jpg'

export default class Awards extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="awards">
        <div className="colorlib-narrow-content">
            <div className="row" style={{paddingBottom:40+"px"}}>
              <div className="col-md-2"></div>
              <div className="col-md-8">
                  <img src={Award} alt="DC visit" ></img>
              </div>
              <div className="col-md-2"></div>
            </div>
            <div className="row">
            <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
            <div className="col-md-12">
                <div className="col-md-6">
                <div className="about-desc">
                <span className="heading-meta">Awards</span><hr></hr>
                <p className ="heading-section"><strong>Women in Cyber Security Award (WiCyS), 2019</strong></p>
                <p> Sponsorship for annual cybersecurity conference </p>

                <p className ="heading-section"><strong>Karl Taylor Compton Prize, 2018 </strong></p>
                <p>Highest institute award given in recognition of citizenship and devotion MIT’s welfare  </p>
   
                <p className ="heading-section"><strong>Frederick G. Fassett Jr. Award, 2018 </strong></p>
                <p> Given to a member of an FSILG who displays spirit, dedication, and service</p>
                <p className ="heading-section"><strong>ThinkCyber Security Fellowship, 2018 </strong></p>
                <p>Cybersecurity bootcamp for students to work on live hacking challenges </p>
                <p className ="heading-section"><strong>Better Future Award, 2017 </strong></p>
                <p> Won for project using machine learning on forum posts to detect depression as part of final project for  computer science students at Cambridge </p>
                <p className ="heading-section"><strong>Box Engineering Diversity Award, 2016 </strong></p>
                <p> Given to women who show leadership, passion for tech, creativity, and drive</p>
                <p className ="heading-section"><strong>Google CodeU People’s Choice Award, 2016</strong></p>
                <p>Won for web crawling, aggregation, and data visualization of news sources web application in Java and JavaScript </p>
                <p className ="heading-section"><strong>National Center for Women & Information Technology (NCWIT) Dallas Area Winner, 2014 </strong></p>
                </div>
                </div>

                <div className="col-md-6">
                <div className="about-desc">
                <span className="heading-meta">Leadership</span><hr></hr>
               
                <p className ="heading-section"><strong>MIT Undergraduate Student Advisory Group in EECS Board Member, 2018-2019 </strong></p>
                <p> Worked with administrators and professors to identify and solve issues in student experience, culture, and curriculum</p>
                <p className ="heading-section"><strong>Addir Interfaith Fellow, 2018-2019 </strong></p>
                <p> Led interfaith discussions that encourage dialogue and openness</p>

                <p className ="heading-section"><strong>Vice President & Housing Chair of Women’s Independent Living Group (WILG), 2017-2018 </strong></p>
                <p> Organized monthly faculty dinners and arranged summer housing for 50 people worth over $80000</p>

                <p className ="heading-section"><strong>Undergraduate Association Support and Wellness Committee Member, 2015-2016</strong></p>
                <p> Improved health-related leave of absence policy and advocated for diverse therapist on campus</p>

                <p className ="heading-section"><strong>Attorney General of MIT Black Students’ Union, 2015-2016 </strong></p>
                <p> Collaborated with administration to create an inclusive campus and crafted 2015 BSU Recommendations for diversity and inclusion </p>

                <p className ="heading-section"><strong>Admissions Ambassador, Spring 2015</strong></p>
                <p> Spoke about college experience at Dallas-area high schools to encourage diverse students to apply to MIT </p>

                </div>
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
