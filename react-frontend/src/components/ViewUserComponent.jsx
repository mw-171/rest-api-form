import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
        .catch((error) => {
            console.error('Error fetching user details:', error);
            // Handle the error, e.g., display an error message or redirect
          });
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Client Id: </label>
                            <div> { this.state.user.clientId || 'N/A'}</div>
                        </div>
                        <div className = "row">
                            <label> User Given Name: </label>
                            <div> { this.state.user.givenName || 'N/A'}</div>
                        </div>
                        <div className = "row">
                            <label> User Family Name: </label>
                            <div> { this.state.user.familyName || 'N/A'}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent