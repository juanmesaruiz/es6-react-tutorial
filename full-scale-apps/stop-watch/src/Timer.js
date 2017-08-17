import React, { Component } from 'react';

class Timer extends Component {

    componentDidMount(){
        this.timer = setInterval(this.ticker, 1000);
    }

    ticker() {
        this.setState({clock: new Date() - this.props.start})
    }

    constructor(props){
        super(props);
        this.state = {
            clock: 0
        };
        this.ticker = this.ticker.bind(this);
    }

    render() {
        const clock = Math.round(this.state.clock / 1000);
        return (
            <div>
                <p>You have benn on this site since: </p>
                <br/>
                <span className="timerSpan">{clock}</span> <span>seconds</span>
            </div>
        );
    }
}

export default Timer;