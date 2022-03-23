import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  // componentDidMount() {
  //   axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  //   axios.defaults.headers.get['strict-origin-when-cross-origin'] = '*';
  //   axios.get(`http://localhost:5262/HttpOnly/SetHttpOnly`)
  //   //axios.get(`https://catfact.ninja/fact`)    
  //     .then(res => {
  //       console.debug(res.statusText)
  //       //const persons = res.data;
  //       //this.setState({ persons });
  //     })
  // }

  handleClick() {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['strict-origin-when-cross-origin'] = '*';
    axios.defaults.withCredentials = true;
    axios.get(`http://localhost:5262/HttpOnly/SetHttpOnly`)
    //axios.get(`https://catfact.ninja/fact`)    
      .then(res => {
        console.debug(res.statusText)
        //const persons = res.data;
        //this.setState({ persons });
      })
  }  

  handleClick2() {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.get['strict-origin-when-cross-origin'] = '*';
    axios.defaults.withCredentials = true;
    axios.get(`http://localhost:5262/HttpOnly/GetHttpOnly`)
    //axios.get(`https://catfact.ninja/fact`)    
      .then(res => {
        console.debug(res.statusText)
        //const persons = res.data;
        //this.setState({ persons });
      })
  }    

  render() {
    return (
      <div>
          <p>Teste tiago</p>
          <button onClick={this.handleClick}>
          </button>          

          <p>Teste tiago</p>
          <button onClick={this.handleClick2}>
          </button>             


      </div>
    );
  }
}

export default App;