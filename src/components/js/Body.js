import React from 'react'
import Card from '../js/Card'
import Biocard from './Biocard'
import Image from '../images/image.png'
import '../css/Body.css'

function Body(props){
  // const name='image.png'
  return(
    <div className='body'>
      <Card className='body__card' name={`${Image}`} alt="image"/>
      <Biocard className='biocard'/>    
    </div>
)}

export default Body

// rfce