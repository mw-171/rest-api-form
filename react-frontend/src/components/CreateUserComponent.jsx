import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            clientId: '', //integer?
            givenName: '',
            familyName: ''
        }
        this.changeGivenNameHandler = this.changeGivenNameHandler.bind(this); //do we need to add client id handler????
        this.changeFamilyNameHandler = this.changeFamilyNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    addUser() {
        if (this.props.history) {
            this.props.history.push('/add-user/_add');
        } else {
            console.error('History prop is undefined');
        }
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UserService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({clientId : user.clientId,
                    givenName: user.givenName,
                    familyName: user.familyName                    
                });
            });
        }        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {clientId: this.state.clientId, givenName: this.state.givenName, familyName: this.state.familyName };
        console.log('user => ' + JSON.stringify(user));

        // step 5
        if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/users');
            });
        }else{
            UserService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/users');
            });
        }
    }
    
    changeClientHandler= (event) => {
        this.setState({clientId: event.target.value});
    }

    changeGivenNameHandler= (event) => {
        this.setState({givenName: event.target.value});
    }

    changeFamilyNameHandler= (event) => {
        this.setState({familyName: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add User</h3>
        }else{
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Client Id: </label>
                                            <input placeholder="Email Address(Client Id)" name="clientId" className="form-control" 
                                                value={this.state.clientId} onChange={this.changeClientHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Given Name: </label>
                                            <input placeholder="Given Name" name="givenName" className="form-control" 
                                                value={this.state.givenName} onChange={this.changeGivenNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Family Name: </label>
                                            <input placeholder="Family Name" name="familyName" className="form-control" 
                                                value={this.state.familyName} onChange={this.changeFamilyNameHandler}/>
                                        </div>                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUserComponent