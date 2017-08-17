import React, { Component } from 'react';
import Fruit from './Fruit';

class FruitSales extends Component {

    sumPrice(price){
        this.setState({total: this.state.total + price})
    }

    constructor(props){
        super(props);

        this.state = {
            total: 0
        };

        this.sumPrice = this.sumPrice.bind(this);
    }

    render() {
        console.log(this.props.items);
        const fruits = this.props.items.map((item, i)=>{

            return <Fruit name={item.name}
                          price={item.price}
                          key={i}
                          sumPrice={this.sumPrice}
                          active={item.active}
            />

        });
        return (
            <div>
                <h1>You can buy that fruits:</h1>
                <div className="fruits">
                    {fruits}
                    <p className="total">Total amount: <b>{this.state.total} $</b></p>
                </div>
            </div>
        );
    }
}

export default FruitSales;
