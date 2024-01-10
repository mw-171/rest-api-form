import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const CreateUserComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  //const [clientId, setClientId] = useState('');
  const [givenName, setGivenName] = useState('');
  const [familyName, setFamilyName] = useState('');

  const [selectedClientId, setSelectedClientId] = useState('');
  const [state, setState] = useState({
    id: id || '',
    clientId: '',
    givenName: '',
    familyName: ''
    });
    
    // const changeClientHandler = (event) => {
    //     setState((prevState) => ({ ...prevState, clientId: event.target.value }));
    // };
    const changeClientHandler = (event) => {
    const selectedOption = event.target.value;
    setSelectedClientId(selectedOption);
    setState((prevState) => ({ ...prevState, clientId: parseInt(selectedOption) }));
    };

  const cancel = () => {
    navigate('/users');
  };

  const getTitle = () => {
    return id === '_add' ? (
      <h3 className="text-center">Add User</h3>
    ) : (
      <h3 className="text-center">Update User</h3>
    );
  };

  useEffect(() => {
    if (id && id !== '_add') {
      UserService.getUserId(id)
        .then((res) => {
          const user = res.data;
         
          setSelectedClientId(user.selectedClientId);
          setGivenName(user.givenName);
          setFamilyName(user.familyName);
          setSelectedClientId(user.clientId.toString());
        })
        
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [id]);

  const saveOrUpdateUser = (e) => {
    e.preventDefault();
    console.log("selected id huh: ",selectedClientId);
    const user = { selectedClientId, givenName, familyName };

    if (id === '_add') {
        console.log("selected id added: ",user);
      UserService.createUser(user)
        .then(() => {
          navigate('/users');
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    } else {
      UserService.updateUser(user, id)
        .then(() => {
          navigate('/users');
        })
        .catch((error) => {
          console.error('Error updating user:', error);
        });
    }
  };

    

return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              {getTitle()}
              <form>
                {/* <div className="mb-3">
                  <label htmlFor="clientId" className="form-label">
                    Client Id:
                  </label>
                  <input
                    type="text"
                    id="clientId"
                    name="clientId"
                    className="form-control"
                    placeholder="Client ID"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  />
                </div> */}
                <div className="mb-3">
                    <div className="form-group">
                        <label> Client Id: </label>
                        <select
                            className="form-control"
                            name="clientId"
                            value={selectedClientId}
                            onChange={changeClientHandler}
                        >
                            <option value="">Select Client ID</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>               

                <div className="mb-3">
                  <label htmlFor="givenName" className="form-label">
                    Given Name:
                  </label>
                  <input
                    type="text"
                    id="givenName"
                    name="givenName"
                    className="form-control"
                    placeholder="Given Name"
                    value={givenName}
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="familyName" className="form-label">
                    Family Name:
                  </label>
                  <input
                    type="text"
                    id="familyName"
                    name="familyName"
                    className="form-control"
                    placeholder="Family Name"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                  />
                </div>
  
                <div className="text-center">
                  <button
                    type="button"
                    style={{margin:'10px', backgroundColor: "#63c78b", borderColor:'#63c78b'}}
                    className="btn btn-success btn-primary mr-md-5"
                    onClick={saveOrUpdateUser}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    style={{margin:'10px', backgroundColor: "#e84d61", borderColor:'#e84d61'}}
                    className="btn btn-danger btn-primary"
                    onClick={cancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
};

export default CreateUserComponent;



// import React, { Component } from 'react'
// import UserService from '../services/UserService';

// class CreateUserComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             // step 2
//             id: this.props.match.params.id,
//             clientId: '', //integer?
//             givenName: '',
//             familyName: ''
//         }
//         this.changeGivenNameHandler = this.changeGivenNameHandler.bind(this); //do we need to add client id handler????
//         this.changeFamilyNameHandler = this.changeFamilyNameHandler.bind(this);
//         this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
//     }

//     addUser() {
//         if (this.props.history) {
//             this.props.history.push('/add-user/_add');
//         } else {
//             console.error('History prop is undefined');
//         }
//     }

//     // step 3
//     componentDidMount(){

//         // step 4
//         if(this.state.id === '_add'){
//             return
//         }else{
//             UserService.getUserById(this.state.id).then( (res) =>{
//                 let user = res.data;
//                 this.setState({clientId : user.clientId,
//                     givenName: user.givenName,
//                     familyName: user.familyName                    
//                 });
//             });
//         }        
//     }
//     saveOrUpdateUser = (e) => {
//         e.preventDefault();
//         let user = {clientId: this.state.clientId, givenName: this.state.givenName, familyName: this.state.familyName };
//         console.log('user => ' + JSON.stringify(user));

//         // step 5
//         if(this.state.id === '_add'){
//             UserService.createUser(user).then(res =>{
//                 this.props.history.push('/users');
//             });
//         }else{
//             UserService.updateUser(user, this.state.id).then( res => {
//                 this.props.history.push('/users');
//             });
//         }
//     }
    
//     changeClientHandler= (event) => {
//         this.setState({clientId: event.target.value});
//     }

//     changeGivenNameHandler= (event) => {
//         this.setState({givenName: event.target.value});
//     }

//     changeFamilyNameHandler= (event) => {
//         this.setState({familyName: event.target.value});
//     }

//     cancel(){
//         this.props.history.push('/users');
//     }

//     getTitle(){
//         if(this.state.id === '_add'){
//             return <h3 className="text-center">Add User</h3>
//         }else{
//             return <h3 className="text-center">Update User</h3>
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <br></br>
//                    <div className = "container">
//                         <div className = "row">
//                             <div className = "card col-md-6 offset-md-3 offset-md-3">
//                                 {
//                                     this.getTitle()
//                                 }
//                                 <div className = "card-body">
//                                     <form>
//                                         <div className = "form-group">
//                                             <label> Client Id: </label>
//                                             <input placeholder="Email Address(Client Id)" name="clientId" className="form-control" 
//                                                 value={this.state.clientId} onChange={this.changeClientHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Given Name: </label>
//                                             <input placeholder="Given Name" name="givenName" className="form-control" 
//                                                 value={this.state.givenName} onChange={this.changeGivenNameHandler}/>
//                                         </div>
//                                         <div className = "form-group">
//                                             <label> Family Name: </label>
//                                             <input placeholder="Family Name" name="familyName" className="form-control" 
//                                                 value={this.state.familyName} onChange={this.changeFamilyNameHandler}/>
//                                         </div>                                        

//                                         <button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
//                                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>

//                    </div>
//             </div>
//         )
//     }
// }

// export default CreateUserComponent