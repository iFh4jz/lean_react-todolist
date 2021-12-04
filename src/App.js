import React, {Component} from 'react';
import Search from "./componets/Search";
import List from "./componets/List";

class App extends Component {
    state = {users:[]}
    saveUsers = (users) => {
        this.setState({users})
    }
    render() {
        return (
            <div className="container">
                <Search saveUsers={this.saveUsers}/>
                <List users={this.state.users}/>
            </div>
        );
    }
}

export default App;