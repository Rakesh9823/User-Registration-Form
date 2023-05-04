import React from 'react'
import '../components/Message.css'
import { useNavigate } from 'react-router-dom'
const Message = ({setSeeDetails}) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/details")
        setSeeDetails(false)
    }
  return (
    <div className='message-container'>
        <div className='message-content'>
            <img src={require("../components/th.jpeg")} alt="tick" height="100px" width="100px" />
            <h2>Registerd Successfully!</h2>
            <button className='see-details' onClick={handleClick}>See Details</button>
        </div>
    </div>
  )
}

export default Message