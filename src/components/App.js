import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import './styles/App.css'
import api from '../services/api'
import ResultTable from './ResultTable'

class App extends Component {
  state = {}

  onClick = async e => {
    console.log('button clicked')
    try {
      this.setState(state => ({
        ...state,
        searchTriggered: true,
        isLoading: true,
        resultData: []
      }))
      const result = await api.getCall()
      console.log(result)

      this.setState(state => ({
        ...state,
        resultData: result.data
      }))
    } catch (e) {}

    this.setState(state => ({
      ...state,
      isLoading: false
    }))
  }

  render() {
    const { searchTriggered, isLoading, resultData } = this.state
    return (
      <div className="App container-fluid animated fadeIn">
        <div className="row">
          <div className="col-12 App-header">
            <img
              src={logo}
              className="App-logo animated fadeInDown"
              alt="logo"
            />
            <h1 className="App-title animated fadeInLeft">Welcome to React</h1>
          </div>
        </div>
        <div className="row justify-content-center App-search-controls-container animated fadeInRight">
          <div className="col-10 col-md-6 input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Device Identifier..."
              aria-label="Enter Device Identifier"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.onClick}>
                Search
              </button>
            </div>
          </div>
        </div>
        <ResultTable
          isLoading={isLoading}
          data={resultData}
          searchTriggered={searchTriggered}
        />
      </div>
    )
  }
}

export default App
