import React, { Component } from 'react';
import fire from '../config/Firebase'

class Logout extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);

    }
    
    logout() {
        fire.auth().signOut();
    }

    render() {
        return(
            <div className="logout">
                <button onClick={this.logout} className="btn btn-logout">Logout</button>
            </div>
        )
    }
}
export default Logout;