import React from 'react';
import './Dreamjob.component.css';
import Apply from './Apply.component';
import Menu from './Menu.component';

function Dreamjob() {
  return (
    <div className="dreamcontainer">
      
      <div className="left">
        <h1>Find Your Dream Job With Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ullam quas et. Eveniet similique facere amet aliquam rerum aperiam enim laborum, animi nobis soluta molestiae sed. Voluptatibus atque fugit nisi.</p>
        <Apply/>
      </div>
      <div className="right">
        <Menu />
      </div>
    </div>
  )
}

export default Dreamjob;
