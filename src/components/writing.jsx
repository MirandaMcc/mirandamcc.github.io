import React, { Component } from 'react'
import Dome from '../images/dome.jpeg'
import MedLogo from '../images/mediumlogo.jpeg'

export default class Writing extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="writing">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Writing</span>

					</div>
				</div>
				<div className="row">
					<h2 className="colorlib-heading">Blogs and Op-Eds</h2>
					<br></br>
					<div className="col-md-2 col-sm-4  animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/miranda-in-the-middle" className="blog-img"><img src={MedLogo} className="img-responsive" alt="blog picture" /></a>
						<div className="desc">
							<span><small>2020 - Present </small> | <small> Blog </small></span>
							<h3><a href="https://medium.com/miranda-in-the-middle">"Miranda in the Middle" Blog on Medium</a></h3>
							<p>Blog posts about world events and my experiences in tech culture</p>
						</div>
					</div>
					</div>
					<div className="col-md-2 col-sm-4  animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://thetech.com/search/articles/Miranda+McClellan" className="blog-img"><img src={Dome} className="img-responsive" alt="MIT dome" /></a>
						<div className="desc">
							<span><small>2016 - 2018 </small> | <small> Op-Eds </small> </span>
							<h3><a href="https://thetech.com/search/articles/Miranda+McClellan">Articles in The Tech</a></h3>
							<p>Opinion articles about campus life in MIT's newspaper</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<h2 className="colorlib-heading">Creative Writing</h2>

					<div className="col-md-2 col-sm-4 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<div className="desc">
							<span><small> 2021 </small> | <small> Short Story </small></span>
							<h3><a href="https://www.dreamerswriting.com/miranda-mcclellan/">"Sweatpants"</a></h3>
							<p>A short story about a college student conflicted about their identity and social standing in conversation with her therapist</p>
						</div>
					</div>
					</div>

					<div className="col-md-2 col-sm-4 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<div className="desc">
							<span><small> 2020 </small> | <small> Hybrid </small></span>
							<h3><a href="http://www.penumbraonline.org/hybrid.html">"We Take Racism Very Seriously"</a></h3>
							<p>A satirical survey about surface-level diversity initiatives published in Penumbra Online Literary Magazine</p>
						</div>
					</div>
					</div>

					<div className="col-md-2 col-sm-4  animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<div className="desc">
							<span><small> 2018 </small> | <small> Poem </small></span>
							<h3><a href="http://runemag.mit.edu/lit/mutual_support">"Mutual Support"</a></h3>
							<p>A poem published in Rune Magazine Issue 39</p>
						</div>
					</div>
					</div>

					<div className="col-md-2 col-sm-4  animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<div className="desc">
							<span><small> 2013 </small> | <small> Poem </small></span>
							<h3><a href="http://www.teenink.com/poetry/all/article/535408/Welcome-Back-Darling">"Welcome Back Darling"</a></h3>
							<p>A poem selected for TeenInk Magazine's <a href="https://www.amazon.com/Leave-This-Song-Behind-Poetry/dp/0757318967"><u>Leave This Song Behind</u></a> print edition </p>
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
