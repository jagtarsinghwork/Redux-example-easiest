import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Menu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: ""
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("nextprops", nextProps);
        if (nextProps.userData) {
            this.setState({
                data: nextProps.state
            })
        }
    }

    render() {
        console.log("this.props of menu components", this.props)
        return (
            <div>
                <p>This is menu</p>
                <p>{this.props.state}</p>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    userData: state.userData
});

export default connect(mapStateToProps, null)(Menu)
