import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Policy from './components/policy'
import Writing from './components/writing'
import Technical from './components/technical'
import Awards from './components/awards'
import Education from './components/education'
import Teaching from './components/teaching'
import Speeches from './components/speeches'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
          <Introduction></Introduction>
          <Technical></Technical>
          <Policy></Policy>
          <Awards></Awards>
          <Speeches></Speeches>
          <Education></Education>
          <Teaching></Teaching>
          <Writing></Writing>
        </div>
      	</div>
      </div>
    );
  }
}

export default App;
