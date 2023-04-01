import React from 'react'
import {TbBrandZoom} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import './meetingIcon.css'

const MeetingIcon = ({active}) => {
  return (
    <Link to='/meeting'>
    <div  className={active}>

<TbBrandZoom color='#fff' strokeWidth={2} size={30}/>


    </div>
    </Link>
  )
}

export default MeetingIcon