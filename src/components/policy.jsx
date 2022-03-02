import React, { Component } from 'react'
import Politics from '../images/politics.JPG'

export default class Policy extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="policy">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-6">
                    <div className="about-desc">
                    <span className="heading-meta">Public Policy Work</span><hr></hr>
                    <h2 className="colorlib-heading">Internet Society Early Career Fellow  </h2>
                    <span className="heading-meta">Internet Society | February - June 2022 </span>
                    <p>Selected as 1 of 15 global fellows to complete a policy project on open access, fairness, governance, and regulation of internet actors.</p>

                    <h2 className="colorlib-heading">Data and Policy Summer Scholar  </h2>
                    <span className="heading-meta">University of Chicago Harris School | Summer 2020 </span>
                    <p>Completing coursework and a final project focused on using data analysis for public policy</p>

                    <span className="heading-meta"></span>
                    <h2 className="colorlib-heading">Legal Tech Essentials Series </h2>
                    <span className="heading-meta">Bucerius Law School  | Summer 2020 </span>
                    <p>Probed leaders about innovation for privacy, efficiency, and inclusive access to legal systems during online lecture series </p>

                    <h2 className="colorlib-heading"> MIT Science Policy Initiative</h2>
                    <span className="heading-meta"> Congressional Visit Days | Spring 2019 </span>
                    <p>Led 6 meetings to promote science funding in congressional offices in Washington D.C. </p>
                    <p>Co-authored <a href="https://news.mit.edu/2017/mit-students-and-postdocs-advocate-for-science-engineering-funding-on-capitol-hill-0511">article</a> about the importance of science advocacy through visit days</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <img src={Politics} alt="DC visit"></img>
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
