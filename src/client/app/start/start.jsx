import React from 'react';

require('./../scss/main.scss');
require('./start.scss');

class StartComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <article className="bodyText">
            <img className="startImg" src="./app/img/car.jpg" alt="Bilden kan inte visas"/>
            sdgöflknjdasbvgfjdzö.sgfj
            <p>
                På Norrstrand hittar ni en av Karlstads äldsta Frisörsalonger.<br/>
                Jag hjälper dig med det mesta inom hårvård. Klippning, färgning, slingor och permanent m.m <br/>
                Hittar du inte vad du söker eller har funderingar tveka inte att ringa <span>054-15 17 30</span> <br/>
            </p>
            <p>
                På salongen hittar ni även Emmas Naglar i Karlstad. Hon hjälper dig med både nagelförlängning och nagelförstärkning. <br/>
                Hittar ni ingen tid som passar er kontakta Emma via epost, <span>emmasnaglarkarlstad@outlook.com</span>
            </p>
            <p>
                Parkering finns kostnadsfritt utanför salongen.
            </p>
            <p>
                Alla priser av från-priser, om tiden blir längre än beräknat tillkommer 100kr/ 15 minuter. <br/>
                Om materialet ökar tillkommer 100kr extra per tub färg. Missad tid debiteras med 100%.
            </p>
        </article>
    );
  }

}

export default StartComponent;