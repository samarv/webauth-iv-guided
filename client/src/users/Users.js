import React from 'react';
import axios from 'axios';

import requireAuth from '../auth/requireAuth'

class Users extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    console.log("boo");
    axios
      .get("/users")
      .then(res => this.setState({users: res.data}))
      .then(console.log("here"))
      .catch(err => console.log("err in Users",err))

  }

  render(){
    return(
      <ul>
        {this.state.users.map(item => (
          <li key={item.id}>
            {item.username}
          </li>
        ) )}
      </ul>
    )
  }
}


export default requireAuth(Users);