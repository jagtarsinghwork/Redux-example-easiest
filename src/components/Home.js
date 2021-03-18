import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import home from './../actions/home.action'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: "",
            password: ""
        }
        this.handleSubmitData = this.handleSubmitData.bind(this);
        this.handleChangedata = this.handleChangedata.bind(this);
    }
    handleSubmitData(e) {
        // console.log("props --", this.props);
        // console.log(e.target.value)
        // console.log("this.state", this.state);
        this.props.home(this.state);
        <Redirect from="/" to="menu" />
        e.preventDefault()
    }
    handleChangedata(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        console.log("Home render", this.props);
        return (
            <div>
                <p>Home</p>
                <form onSubmit={this.handleSubmitData}>
                    <input onChange={this.handleChangedata} type="text" name='name' value={this.state.name} placeholder="please enter your name" />
                    <input onChange={this.handleChangedata} type="email" name='email' value={this.state.email} placeholder="please enter your email" />
                    <input onChange={this.handleChangedata} type="password" name='password' value={this.state.password} placeholder="please enter your password" />
                    <input onChange={this.handleSubmitData} type="submit" name='password' value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ userData: state.userData });

export default connect(mapStateToProps, { home })(Home)