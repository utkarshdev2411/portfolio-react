import React from 'react'
import './floatingdiv.css'

const floatingdiv = ({image,text1,text2}) => {
  return (
    <div className='floatingdiv'>
             <img src={image  } alt='' />
             <span>{text1}<br/>{text2}</span>      
    </div>
  )
}
 
export default floatingdiv
