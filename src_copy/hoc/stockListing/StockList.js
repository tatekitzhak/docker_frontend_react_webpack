import React, {Component} from 'react';

/**
 * https://www.codingame.com/playgrounds/8595/reactjs-higher-order-components-tutorial
 * @param {*} WrappedComponent 
 * @param {*} data 
 */
export default function withStockList(WrappedComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        render(){
            return (
                <div>
                    <WrappedComponent data={this.state.data} {...this.props} />
                </div>

            );
        }
    } 
}