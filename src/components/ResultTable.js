import React, { Component } from 'react'

class ResultTable extends Component {
  renderHeader = () => (
    <thead className="thead">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Company</th>
        <th scope="col">Address</th>
        <th scope="col">Phone</th>
        <th scope="col">About</th>
        <th scope="col">Registered</th>
      </tr>
    </thead>
  )

  renderBody = (data = []) => (
    <tbody className="tbody">
      {data.map(row => (
        <tr key={row.id} className="text-left">
          <td>{row.id}</td>
          <td>{row.company}</td>
          <td>{row.address}</td>
          <td>{row.phone}</td>
          <td>{row.about}</td>
          <td>{row.registered}</td>
        </tr>
      ))}
    </tbody>
  )

  renderData = data => (
    <table className="table">
      {this.renderHeader()}
      {this.renderBody(data)}
    </table>
  )

  renderNoData = () => (
    <div className="row">
      <div className="col text-center">
        <i>No data</i>
      </div>
    </div>
  )

  renderComponent = data => {
    return data && data.length > 0 ? this.renderData(data) : this.renderNoData()
  }

  renderLoader = () => (
    <div className="row justify-content-center">
      <div className="col text center">
        <i className="fa fa-cog fa-spin fa-3x fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

  render() {
    const { isLoading, data } = this.props
    return isLoading ? this.renderLoader() : this.renderComponent(data)
  }
}

export default ResultTable
