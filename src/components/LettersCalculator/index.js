import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChange = o => {
    this.setState({count: o.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="contianer">
        <div className="card">
          <div className="text-contianer">
            <h1> Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="typimg"
                onChange={this.onChang}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of.letters : o
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
