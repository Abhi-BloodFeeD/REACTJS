import React from 'react'
import Card from '../js/Card'
import '../css/Head.css'
import Lion from '../images/lion.jpg'
import Lion2 from '../images/lion2.jpg'

function Head() {
  const _name1=Lion
  const _name2=Lion2
  return (
    <div className='head'>
      <div className='head_element'>
        <Card  name={`${_name1}`}/>
      </div>
      <div className='head_element'>
        <Card  name={`${_name2}`}/>
      </div>
    </div>
    
  )
}

export default Head
