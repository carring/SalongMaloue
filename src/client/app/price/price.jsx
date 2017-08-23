import React from 'react';

require('./../scss/main.scss');
require('./price.scss');

class PriceComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <article className="bodyText">
          <table>
            <tbody>
            <tr>
              <td className="bold">Damklippning</td>
              <td colSpan="3">370kr</td>
            </tr>
            <tr>
              <td className="bold">Herrklippning</td>
              <td colSpan="3">310kr</td>
            </tr>
            <tr>
              <td className="bold">Barn 0-5 år</td>
              <td colSpan="3">170kr</td>
            </tr>
            <tr>
              <td className="bold">Barn 5-10 år</td>
              <td colSpan="3">230kr</td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td>&nbsp;</td>
              <td className="bold">Kort</td>
              <td className="bold">Mellan</td>
              <td className="bold">Långt</td>
            </tr>
            <tr>
              <td>Färgning</td>
              <td>580kr</td>
              <td>750kr</td>
              <td>900kr</td>
            </tr>
            <tr>
              <td>Slingor i hätta</td>
              <td>580kr</td>
              <td>750kr</td>
              <td>900kr</td>
            </tr>
            <tr>
              <td>Färg och klipp</td>
              <td>790kr</td>
              <td>950kr</td>
              <td>1150kr</td>
            </tr>
            <tr>
              <td>Slingor i hätta och klipp</td>
              <td>790kr</td>
              <td>950kr</td>
              <td>1150kr</td>
            </tr>
            <tr>
              <td>Färg och slingor</td>
              <td>790kr</td>
              <td>950kr</td>
              <td>1150kr</td>
            </tr>
            <tr>
              <td>Färg, slingor och klipp</td>
              <td>890kr</td>
              <td>1150kr</td>
              <td>1250kr</td>
            </tr>
            <tr>
              <td>Folieslingor</td>
              <td>750kr</td>
              <td>890kr</td>
              <td>1150kr</td>
            </tr>
            <tr>
              <td>Folieslingor och klipp</td>
              <td>890kr</td>
              <td>1090kr</td>
              <td>1350kr</td>
            </tr>
            <tr><td>&nbsp;</td></tr>
            <tr>
              <td className="bold">Klippning och Läggning</td>
              <td colSpan="3">450kr</td>
            </tr>
            <tr>
              <td className="bold">Klippning och Olaplex</td>
              <td colSpan="3">Från 870kr</td>
            </tr>
            <tr>
              <td className="bold">Tvätt och Fön</td>
              <td colSpan="3">290kr</td>
            </tr>
            <tr>
              <td className="bold">Permanent inkl klipp</td>
              <td colSpan="3">Från 810kr</td>
            </tr>
            <tr>
              <td className="bold">Olaplex behandling</td>
              <td colSpan="3">Från 650kr</td>
            </tr>
            <tr>
              <td className="bold">Ögonbryn eller Ögonfransar</td>
              <td colSpan="3">230kr</td>
            </tr>
            </tbody>
          </table>
        </article>
    );
  }

}

export default PriceComponent;