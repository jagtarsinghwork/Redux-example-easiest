import React, { Component } from 'react'
import { connect } from 'react-redux';
import home from './../actions/home.action'
export class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ""
        }
        this.handleData = this.handleData.bind(this);
    }
    // UNSAFE_componentWillUpdate(nextProps) {
    //     console.log("nextState", nextProps);
    // }
    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps)
        if (nextProps.userData) {
            this.setState({
                data: nextProps.userData && nextProps.userData
            })
        }
        console.log(nextProps);
    }


    handleData() {
        this.setState({
            data: this.props
        })
    }
    render() {
        console.log("this.state.data", this.state.data);
        // console.log("this.props of menu components", this.props);
        return (
            <div>
                <p>This is menu</p>
                <p>{this.props.state}</p>
                <button onClick={this.handleData} value="submit">submit</button>
            </div>
        )
    }
}


// const mapStateToProps = state => ({ state: state })
const mapStateToProps = state => ({ userData: state.userData });
export default connect(mapStateToProps, { home })(Menu)
