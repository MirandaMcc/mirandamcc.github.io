import React, { Component } from 'react'
import Intern from '../images/intern.JPG'
import Fulbright from '../images/fulbright.jpg'

export default class Technical extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="technical">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="about-desc">
                <span className="heading-meta">Technical Experience</span><hr></hr>
                <div className="col-md-3">
                  <img src={Intern} alt="internship" ></img>
                  <br></br>
                  <br></br>
                  <img src={Fulbright} alt="fellowship" ></img>
                </div>
                <div className="col-md-9">
                    
                    <h2 className="colorlib-heading">Microsoft</h2>
                    
                    <p className ="heading-section"><strong>Software Engineer | Azure Enterprise and Security</strong></p>
                    <span className="heading-meta">(Remote) Dallas, TX | September 2020 - Present</span>
                    <p>Analyzing telemetry data for Windows security hardware and services offerings.</p>
                    <p>Developing machine learning and statistical models to discover insights to improve reliability and performance.</p>
                    <p>Deploying end-to-end data pipelines</p>

                    <p className ="heading-section"><strong>Software Engineering Intern | Azure CDN</strong></p>
                    <span className="heading-meta">Cambridge, MA | June 2018 - August 2018</span>
                    <p> Increased reconnection speeds by enabling TLS Session Resumption and TCP Fast Open for servers behind load balancers in datacenters </p>
                    <p> Tools : C#, Powershell, and Azure Functions</p>

                    <p className ="heading-section"><strong>Software Engineering Intern | Office365 Connect & Protect</strong></p>
                    <span className="heading-meta">Redmond, WA | June 2017 - September 2017</span>
                    <p>Designed and built a portal for automation of publishing Office 365 cloud public endpoints for firewall configuration</p>
                    <p>Designed a database schema for the first centralized store for endpoint details </p>
                    <p> Tools : C#, ASP.Net framework, SQL</p>

                    <p className ="heading-section"><strong>Explorer Intern | Office365 Extensibility </strong></p>
                    <span className="heading-meta">Redmond, WA | May 2016 - August 2016</span>
                    <p>Increased developer productivity by Designing and developing an add-in for Outlook email client with Visual Studio Team Services functionalities, like creating bug reports</p>
                    <p> Tools : TypeScript, React, Redux</p>


                    <h2 className="colorlib-heading">Fulbright Spain</h2>
                    <p className ="heading-section"><strong>Pre-doctoral Researcher</strong></p>
                    <span className="heading-meta"> Barcelona, Spain | September 2019 - June 2020</span>
                    <p>Conducted research using applied machine learning for 5G networks at Universitat Politecnica de Catalunya in Spain, sponsored by prestigious fellowship </p>
                    <p><i>Miranda McClellan</i>, Cristina Cervelló-Pastor, Sebastià Sallent. (2020). <a href ="https://www.mdpi.com/2076-3417/10/14/4735">“Deep Learning at the Mobile Edge: Opportunities for 5G Networks”. </a> Applied Sciences. 10. 4735. 10.3390/app10144735.</p>
                    <p><i>Miranda McClellan</i>. “Efficient Computing in Mobile Edge Networks with Deep Learning”, Poster, Fulbright Spain Research Seminar. November 22-23rd, 2019. </p>

                    <h2 className="colorlib-heading">CSAIL @ MIT</h2>
                    <p className ="heading-section"><strong> Research Assistant | Internet Policy Research Initiative (IPRI) </strong></p>
                    <span className="heading-meta"> Cambridge, MA | August 2017 - June 2019</span>
                    <p>Built the first browser-based, peer-to-peer speed test for local area networks and performed statistical analysis on network test results to evaluate performanceunder Prof. David Clark</p>
                    <p>Tools : WebRTC, JavaScript, Postgres DB</p>
                    <p>Thesis: <i>Miranda McClellan</i>. <a href="http://dspace.mit.edu/handle/1721.1/123051">“WebRTC Based Network Performance Measurement.”</a> Master’s thesis, MIT, 2019. </p>
                    <br></br>
                    <p>Wrote mock legislation to address bias/discrimmination in the distribution of employment ads in social media in conjuction with Georgetown Law students</p>
                    <p>Anuhya Vajupey, <i>Miranda McClellan</i>, Nur Lalji. <a href="https://drive.google.com/file/d/18ucRYfYz0rz9duYLOdx6eEauhODvoV2J/view?usp=sharing">“Identifying Discrimination in Online Advertising”</a>, <a href="https://computersciencelaw.org/student-poster-session/">ACM Inaugural Symposium on Computer Science and Law</a>, New York, NY. October 28th, 2019.  </p>
                    <br></br>
                    <p>Analyzed the use of bike sharing for urban last-mile commuting. Paper used as model for subsequent semester of 6.439 (Statistics, Computation and Applications). </p>
                    <p>Meia Alsup, Charles Chimento, Jinghong Lyu, <i>Miranda McClellan</i>, Yue Wu. “The Role of Bluebikes in Boston Commute Patterns”</p>
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
