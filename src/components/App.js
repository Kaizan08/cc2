import React, { Component } from 'react';
import _ from 'lodash'
import '../styles/App.css';
import Form from './Form';
import UrlView from './UrlView';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      setUrl: "",
      data: []
    };
  }

    getInput = event => {
      let url = event.target.value;
      this.setState({setUrl: url});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      var data = []
      let finishedUrl = this.state.setUrl
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + finishedUrl).then(response => response.text()).then(text => {
      let html = document.createElement('html');
      html.innerHTML = text;
      let links = html.querySelectorAll('a');
      for(var i=0; i<links.length; i++){
      //only get links that are not localhost OR mail links
        if (links[i]['href'].startsWith('http') && !links[i]['href'].startsWith('http://localhost'))
          {
            data.push(links[i]['href'])
          }
      }
      //only get unique urls
      data = _.uniq(data)
      data.sort()
      this.setState({data: data})
      }
    )
    }


  render() {
    return (
      <div className="App">
        <Form setUrl={this.state.setUrl} getInput={this.getInput} handleSubmit={this.handleSubmit} />
        <UrlView links={this.state.data}/>
      </div>
    );
  }
}

export default App;
