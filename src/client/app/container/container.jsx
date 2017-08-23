import React from 'react';
import StartComponent from './../start/start.jsx';
import PriceComponent from './../price/price.jsx';
import GalleryComponent from './../gallery/gallery.jsx';
import Cover from './../img/cover.jpg';

require('./../scss/main.scss');
require('./container.scss');
var FontAwesome = require('react-fontawesome');

class ContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      start: true,
      price: false,
      gallery: false
    }
  }

  render() {
    return (
      <div className="content">
        <header className="headerContainer">
          <img className="headerImg" src={Cover} alt="Bilden kan inte visas"/>
          <h1>Salong Maloue</h1>
        </header>
        <nav>
          <ul>
            <li id="start" className="active" onClick={(event) => this.changeTab(event)}>Start</li>
            <li id="price" onClick={(event) => this.changeTab(event)}>Priser</li>
            <li id="gallery" onClick={(event) => this.changeTab(event)}>Galleri</li>
            <li><a href="https://www.bokadirekt.se/places/salong-maloue-15405" target="_blank">Boka</a></li>
          </ul>
        </nav>

        <div className="bodyTextContainer">
          {
            this.state.start
            ? <StartComponent/>
            : null
          }
          {
            this.state.price
            ? <PriceComponent/>
            : null
          }
          {
            this.state.gallery
            ? <GalleryComponent/>
            : null
          }
        </div>

        <footer>
          <div className="footerLeft">
            <a href="https://goo.gl/maps/jqi5PRpCVJE2" target="_blank">
              Ulvsbygatan 27<br/>
              654 64 KARLSTAD<br/>
              Norrstrand<br/>
            </a>
          </div>
          <div className="footerCenter">
            <a href="mailto:celfvelin@gmail.com"><FontAwesome className="footerIcon" name="envelope-o"/>celfvelin@gmail.com</a><br/>
            <FontAwesome className="footerIcon" name="phone"/>054-15 17 30
          </div>
          <div className="footerRight">
            <a href="https://www.instagram.com/Salongmaloue/" target="_blank"><FontAwesome className="footerIcon" name="instagram"/>Caroline</a><br/>
            <a href="https://www.instagram.com/emmasnaglarikarlstad/" target="_blank"><FontAwesome className="footerIcon" name="instagram"/>Emma-Lotta</a><br/>
            <a href="https://www.instagram.com/Salongmaloue/" target="_blank"><FontAwesome className="footerIcon" name="instagram"/>Frida</a>
          </div>
        </footer>
      </div>
    );
  }
  changeTab(event){
    const clickedTab = event.target.id;
    let allActive = document.getElementsByClassName("active");
    for (var i = 0; i < allActive.length; i++) {
      allActive[i].classList.remove("active");
    }
    document.getElementById(clickedTab).classList.add("active");

    switch(clickedTab){
      case "start":
        this.setState({start: !this.state.start});
        this.setState({gallery: false});
        this.setState({price: false});
        break;
      case "gallery":
        this.setState({gallery: !this.state.gallery});
        this.setState({start: false});
        this.setState({price: false});
        break;
      case "price":
        this.setState({price: !this.state.price});
        this.setState({gallery: false});
        this.setState({start: false});
        break;
    } 
  }
}

export default ContainerComponent;