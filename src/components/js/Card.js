import React from 'react'
import '../css/Card.css'
// impo
function Card(props){

  // const base_url = '../src/components/images/';
  const image_name = props.name;
  console.log(`${image_name}`)
  return(
    <div className="card">
      <img className='image' src={`${image_name}`} />
      <div className='image_detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, molestiae? Ex eligendi esse cumque ipsa?
    
      </div>
    </div>

)}

export default Card;