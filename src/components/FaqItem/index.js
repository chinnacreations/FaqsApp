import {Component} from 'react'

import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class Faqs extends Component {
  state = {
    isActive: false,
  }

  renderText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="line" />
          <p className="text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderImage = () => {
    const {isActive} = this.state
    const image = isActive ? minusIcon : plusIcon
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="btn" type="button" onClick={this.onToggleActive}>
        <img className="image" src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="lists">
        <div className="question">
          <h1 className="heading">{questionText}</h1>
          {this.renderImage()}
        </div>
        {this.renderText()}
      </li>
    )
  }
}

export default Faqs
