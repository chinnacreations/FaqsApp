import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-con">
      <div className="ques-con">
        <h1 className="desc">Faqs</h1>
        <ul className="list-con">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
