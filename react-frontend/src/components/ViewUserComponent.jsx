import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserService from '../services/UserService';

const ViewUserComponent = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (id) {
            UserService.getUserId(id)
                .then((res) => {
                    setUser(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching user details:', error);
                    // Handle the error, e.g., display an error message or redirect
                });
        }
    }, [id]);

    return (
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            <div className="card col-md-4 shadow">
              <h3 className="text-center mb-3 mt-4">View User Details</h3>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-12 text-center">User Client Id: {user.clientId || 'N/A'}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 text-center">User Given Name: {user.givenName || 'N/A'}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 text-center">User Family Name: {user.familyName || 'N/A'}</div>
                </div>                
              </div>
            </div>
          </div>
          <div> <br></br><br></br></div>
            <div className="text-center mb-5 mr-5">
                <Link to="/users" style={{backgroundColor: "#7599eb", borderColor:'#7599eb', color: 'white'}} className="btn btn-primary">
                    Return to Home
                </Link>
            </div>
        </div>
      );
      
};

export default ViewUserComponent;


// import React, { Component } from 'react'
// import UserService from '../services/UserService'

// class ViewUserComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             user: {}
//         }
//     }

//     componentDidMount(){
//         UserService.getUserById(this.state.id).then( res => {
//             this.setState({user: res.data});
//         })
//         .catch((error) => {
//             console.error('Error fetching user details:', error);
//             // Handle the error, e.g., display an error message or redirect
//           });
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View User Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> User Client Id: </label>
//                             <div> { this.state.user.clientId || 'N/A'}</div>
//                         </div>
//                         <div className = "row">
//                             <label> User Given Name: </label>
//                             <div> { this.state.user.givenName || 'N/A'}</div>
//                         </div>
//                         <div className = "row">
//                             <label> User Family Name: </label>
//                             <div> { this.state.user.familyName || 'N/A'}</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewUserComponent