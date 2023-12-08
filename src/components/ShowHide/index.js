import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  isLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="main-container">
        <div className="card">
          <h1 className="heading">Show/Hide</h1>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p>Joe</p>}
            <button type="button" className="button" onClick={this.isLastName}>
              Show/Hide Lastname
            </button>
            {isLastName && <p>Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
