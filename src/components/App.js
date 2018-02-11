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
    const { isLoading, resultData } = this.state
    return (
      <div className="app container-fluid">
        <div className="row">
          <div className="col-12 app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Welcome to React</h1>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          <div className="col-10 col-md-6 input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.onClick}>
                Button
              </button>
            </div>
          </div>
        </div>
        <ResultTable isLoading={isLoading} data={resultData} />
      </div>
    )
  }
}

export default App
