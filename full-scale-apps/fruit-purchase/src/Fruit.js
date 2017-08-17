import React, { Component } from 'react';

class Fruit extends Component {

    clicker() {
        let vActive = !this.state.active;
        this.setState({active: vActive});
        this.props.sumPrice(vActive ? this.props.price : -this.props.price);
    }

    constructor(props){
        super(props);

        this.state = {
            active: false
        };

        this.clicker = this.clicker.bind(this);
    }

    render(){
        return(
            <div className="fruit">
                <p className={this.state.active? 'active' : ''} onClick={this.clicker}>{this.props.name}: <b>{this.props.price} $</b></p>
            </div>
        );
    }
}

export default Fruit;
