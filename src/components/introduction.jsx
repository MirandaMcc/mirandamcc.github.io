import React, { Component } from 'react'
import Grad from '../images/pattern4.jpeg'


export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero"  data-section="home" >
          <div className="flexslider" style={{height: 100 + "px"}}>
            <ul className="slides">
              <li style={ {backgroundImage:"url(" + Grad + ")"}} >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 slider-text">
                      <div className="slider-text-inner">
                        <div className="">
                          <h1>I'm a creative technologist...</h1>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={ {backgroundImage:"url(" + Grad + ")"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12  slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Who is passionate <br/> about tech policy...</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={ {backgroundImage:"url(" + Grad + ")"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12  slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>And invested in growing <br/>diversity in STEM.</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

/*
style={{backgroundImage: "url(" + Grad + ")"}}
*/