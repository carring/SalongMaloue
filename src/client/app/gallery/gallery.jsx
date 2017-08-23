import React from 'react';
import Instafeed from 'instafeed.js';

require('./../scss/main.scss');
require('./gallery.scss');

class GalleryComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="instaContainer">
        <iframe src="http://lightwidget.com/widgets/a9f19961eebe546e92b2532a948f7026.html" scrolling="no" allowTransparency="true" onLoad={this.resizeIframe.bind(this)}></iframe>
      </div>
    );
  }

  componentDidMount() {

  }

  resizeIframe(e){

    const container = document.getElementById('instaContainer');
    console.log(e.target.get);
    container.style.height = e.target.contentWindow.document.body.height + 'px';
  }
}

export default GalleryComponent;