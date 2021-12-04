// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React！！！
//         </a>
//       </header>
//     </div>
//   );
// }

import React, {Component} from "react"
import axios from "axios";

export default class App extends Component {
    getStudentData = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }

    getStudentData1 = () => {
        axios.get('http://localhost:3000/api2/students').then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取</button>
                <button onClick={this.getStudentData1}>点我获取 from springboot server</button>
            </div>
        )
    }
}

