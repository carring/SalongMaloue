import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let newC = this.state.counter +1;
        this.setState({counter: newC}, function () {
            console.log(this.state.counter);
        });

    };

    render(){
        return(
            <button onClick={this.handleClick}>{this.state.counter}</button>
        );
    }
}

export default Button;