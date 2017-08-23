import React from 'react';

class OtherComponent extends React.Component{
	render(){
		const now = new Date();
  		const topicList = ['ett', 'två', 'tre'];

		return(
			<div>
			    <p className="para">Current time: {now.toTimeString()}</p>
			    <ul>
			    	{topicList.map(topic => <li key={topic}>{topic}</li>)}
			    </ul>
		    </div>
		)
	}
}

export default OtherComponent;