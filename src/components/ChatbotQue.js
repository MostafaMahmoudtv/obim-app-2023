// new file called DogPicture.jsx
import React from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'



const ChatbotQue = () => {
  return (
    <div className='options-container'>
<Link  className='' to="/حجز-المواعيد">
	<p className='  option-item '>

- حجز المواعيد
	</p>

</Link>
<Link  className=' ' to="/مواعيد-حضور-الدكاترة">
	<p className='  option-item'>

- مواعيد حضور الدكاترة
	</p>

</Link>
<Link  className=' ' to="/السجل-الطبي">
	<p className=' option-item'>

- السجل الطبي
	</p>

</Link>


    </div>
  )
}

export default ChatbotQue