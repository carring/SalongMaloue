import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import OtherComponent from './OtherComponent.jsx';
import Button from './counter-button/counter-button.jsx';
import ContainerComponent from './container/container.jsx';

class App extends React.Component {
  	render () {
	  	return(
		  	<div>
			    <ContainerComponent/>
		    </div>
	    )
	}
}

render(<App/>, document.getElementById('app'));

