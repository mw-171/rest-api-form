import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                users: []
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    } 
    
    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.id !== id)});
        });
    }
    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
               
    }

    addUser(){
        // Ensure that this.props.history is defined before trying to push
        console.log('addUser method called');
        if (this.props.history) {
            console.log('History prop exists:', this.props.history);
            this.props.history.push('/add-user/_add');
        } else {
            console.error('History prop is undefined');
        }
        // this.props.history.push('/add-user/_add');
        // console.log('I was triggered during addUser')
        //this.context.history.push('/add-user/_add');
        
    }

    render() {
        
        return (
            <div>
                 <h2 className="text-center" style={{marginTop: 40}}>Users List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" style={{height: '40px', width : '150px'}}onClick={this.addUser}> Add A User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> User Client Id</th>
                                    <th> User Given Name</th>
                                    <th> User Family Name</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> {user.clientId} </td>   
                                             <td> {user.givenName}</td>
                                             <td> {user.familyName}</td>
                                             <td>
                                                
                                                 <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent

