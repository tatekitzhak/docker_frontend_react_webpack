import React from 'react';


const Wrapper = (WrappedComponent) => {
    class Wrapper extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
        CountIncrement = () => {
        this.state.count++;
        this.setState({count: this.state.count});
    }
        render () {
            return (
                <WrappedComponent
                    count={this.state.count}
                    CountIncrement={this.CountIncrement}

                >
                    {console.log("Wrapper:",this.props)}
                </WrappedComponent>
            )
        }
    }
    return Wrapper;
}


export default Wrapper;