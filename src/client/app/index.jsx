import React from 'react';
import {render} from 'react-dom';
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

