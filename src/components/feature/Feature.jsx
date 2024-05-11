import React from 'react'
import "./feature.css"

const Feature = ({ title, text}) => {
  return (
    <div>
     <div className='gpt3__features-container__feature'>
      <div className="gp3__features-container__feature-title">
        <div/>
        <h1>{title}</h1>
      </div>

      <div className='gpt3__features-conntainer__feature-text'>
        {text}
      </div>
    </div>
    </div>
  )
}

export default Feature
