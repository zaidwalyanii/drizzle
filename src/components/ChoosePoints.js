import React from 'react'

function ChoosePoints({ title, description, url }) {
  return (
    <div className='why-choose-us-points'>
      <div>
        <div className='why-coose-us-img'>
          <img src={url} />
        </div>
      </div>
      <div className='why-choose-us-content'>
        <h5 className='mb-10'>{title}</h5>
        <p className='primary-para'>{description}</p>
      </div>
    </div>
  )
}

export default ChoosePoints