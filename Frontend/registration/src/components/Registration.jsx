import React, { useState } from 'react';
import "../components/Registration.css";
import { useNavigate } from 'react-router-dom';
import Message from './Message';

const Registration = () => {
    const [userData , setUserData] = useState({name:"" , age:"" , gender:"" , mobile:"" , govtIdType:"" ,
    govtId:"" , guardianDetails:"", guardianName:"" , email:"" , emergencyNumber:"" , address:"" ,
    state:"" , city:"" , country:"" , pincode:"" , occupation:"" , religion:"" , maritalStatus:"" ,
    bloodGroup:"" , nationality:""})

    const [error , setError] = useState({name:"" , age:"" , gender:""})

    const [seeDetails , setSeeDetails] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (event) =>{
        event.preventDefault()

        const fetchData = await fetch("http://localhost:8000/user" , {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        })
        const result = await fetchData.json()
        if(result.status == "Failed"){
            alert("Check your details.")
        }else{
            setSeeDetails(true)
        }
    }

    const handleError = (type) =>{
        switch(type){
            case "name":
                if(userData.name.length === 0){
                    setError({...error , name:"Please fill your name."})
                }else {
                    setError({...error , name:""})
                }
                break

            case "age":
                if(userData.age.length === 0){
                    setError({...error , age:"Please enter your age"})
                }else{
                    setError({...error , age:""})
                }
                break;

            case "sex":
                if(!userData.gender){
                    setError({...error , gender:"Please select your gender."})
                }else{
                    setError({...error , gender:""})
                }
                break

            default:
                return
        }


        setTimeout(() =>{
            setError({name:"" , age:"" , gender:""})
        },5000)
    }

    const handleCancel = () =>{
        setUserData({name:"" , age:"" , gender:"" , mobile:"" , govtIdType:"" ,
        govtId:"" , guardianDetails:"", guardianName:"" , email:"" , emergencyNumber:"" , address:"" ,
        state:"" , city:"" , country:"" , pincode:"" , occupation:"" , religion:"" , maritalStatus:"" ,
        bloodGroup:"" , nationality:""})
    }
    return (
        <div className='container'>
            <div className='content'>
                <h1>Registration Form</h1>
                <form >
                    <h2>Personal Details</h2>
                    <div className='personal-details'>
                        <section className='name-field'>
                            <label htmlFor="name">Name<span className='red'>*</span>:</label>
                            <input type="text" id='name' placeholder='Enter Name' 
                            onChange={(e) =>{setUserData({...userData , name:e.target.value})}}
                            onBlur={() =>{handleError("name")}} />
                            {error.name?<div className='gender'>{error.name}</div>:null}
                        </section>

                        <section className='age-field'>
                            <label htmlFor="age">Age<span className='red'>*</span>:</label>
                            <input type="number" id='age' placeholder='Enter Age'
                             onChange={(e) =>{setUserData({...userData , age:e.target.value})}} 
                             onBlur={() =>{handleError("age")}} />
                             {error.age?<div className='gender'>{error.age}</div>:null}
                        </section>

                        <section className='gender-field'>
                            <label htmlFor="sex">Sex<span className='red'>*</span></label>
                            <select name="" id="sex" 
                             onChange={(e) =>{setUserData({...userData , gender:e.target.value})}}
                             onBlur={() =>{handleError("sex")}}
                             >
                                <option value="">Enter sex</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {error.gender?<div className='gender'>{error.gender}</div>:null}
                        </section>
                        <section className='mobile-field'>
                            <label htmlFor="mobile">Mobile:</label>
                            <input type="number" id='mobile' placeholder='Enter Mobile number'
                             onChange={(e) =>{setUserData({...userData , mobile:e.target.value})}} />
                        </section>

                        <section className='govtId-field'>
                            <label htmlFor="govt-id">Govt Issued ID:</label>
                            <select name="" id="" 
                             onChange={(e) =>{setUserData({...userData , govtIdType:e.target.value})}}
                            >
                                <option value="">ID type</option>
                                <option value="adhar">Adhar Card</option>
                                <option value="pan">Pan Card</option>
                            </select>
                            <input type="text" id='govt-id' placeholder='Enter Govt id' 
                            minLength={userData.govtIdType == "adhar" ? 12 : 10} 
                            maxLength={userData.govtIdType == "adhar" ? 12 : 10}
                            onChange={(e) =>{setUserData({...userData , govtId:e.target.value})}} />
                        </section>
                    </div>

                    <h2>Contact Details</h2>
                    <div className='contact-details'>
                        <section className='guardian-field'>
                            <label htmlFor="g-name">Guardian Details:</label>
                            <select name="" id="g-name" 
                            onChange={(e) =>{setUserData({...userData ,guardianDetails :e.target.value})}} >
                                <option value="">Enter Label</option>
                                <option value="father">Father</option>
                                <option value="mother">Mother</option>
                                <option value="brother">Brother</option>
                                <option value="sister">Sister</option>
                                <option value="spouse">Spouse</option>
                            </select>
                            <input type="text" id='g-name' placeholder='Enter Guardian Name' 
                            onChange={(e) =>{setUserData({...userData ,guardianName :e.target.value})}} />
                        </section>

                        <section className='email-field'>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" id='email' placeholder='Enter Email' 
                            onChange={(e) =>{setUserData({...userData ,email :e.target.value})}} />
                        </section>

                        <section className='emergency-contact'>
                            <label htmlFor="emergency">Emergency Contact Number:</label>
                            <input type="number" id='emergency' placeholder='Enter Emergency Number' 
                             onChange={(e) =>{setUserData({...userData ,emergencyNumber :e.target.value})}} />
                        </section>
                    </div>

                    <h2>Address Details</h2>
                    <div className='address-details'>

                        <section className='address-field'>
                            <label htmlFor="address">Address:</label>
                            <input type="text" id='address' placeholder='Enter Address' 
                            onChange={(e) =>{setUserData({...userData ,address :e.target.value})}} />
                        </section>

                        <section className='state-field'>
                            <label htmlFor="state">State:</label>
                            <input type="text" id='state' placeholder='Enter State' 
                            onChange={(e) =>{setUserData({...userData ,state :e.target.value})}} />
                        </section>

                        <section className='city-field'>
                            <label htmlFor="city">City:</label>
                            <input type="text" id='city' placeholder='Enter City' 
                            onChange={(e) =>{setUserData({...userData ,city :e.target.value})}} />
                        </section>

                        <section className='country-field'>
                            <label htmlFor="country">Country:</label>
                            <input type="text" id='country' placeholder='Enter Country' 
                            onChange={(e) =>{setUserData({...userData ,country :e.target.value})}} />
                        </section>

                        <section className='pincode-field'>
                            <label htmlFor="picode">Pincode:</label>
                            <input type="number" id='pincode' placeholder='Enter pincode' 
                            onChange={(e) =>{setUserData({...userData ,pincode :e.target.value})}} />
                        </section>
                    </div>


                    <h2>Other Details</h2>
                    <div className='other-details'>
                        <section className='occupation-field'>
                            <label htmlFor="occupation">Occupation:</label>
                            <input type="text" id='occupation' placeholder='Enter Occupation' 
                            onChange={(e) =>{setUserData({...userData ,occupation :e.target.value})}} />
                        </section>

                        <section className='religion-field'>
                            <label htmlFor="religion">Religion:</label>
                            <select name="" id="religion" 
                            onChange={(e) =>{setUserData({...userData ,religion :e.target.value})}} >
                                <option value="">select</option>
                                <option value="hindu">Hindu</option>
                                <option value="muslim">Muslim</option>
                                <option value="christian">Christian</option>
                                <option value="sikh">Sikh</option>
                            </select>
                        </section>

                        <section className='Marital-field'>
                            <label htmlFor="marital">Marital Status</label>
                            <select name="" id="marital" 
                            onChange={(e) =>{setUserData({...userData ,maritalStatus :e.target.value})}} >
                                <option value="">select</option>
                                <option value="married">Married</option>
                                <option value="single">Single</option>
                            </select>
                        </section>

                        <section className='blood-flied'>
                            <label htmlFor="blood">Blood Group</label>
                            <select name="" id="blood" 
                            onChange={(e) =>{setUserData({...userData ,bloodGroup :e.target.value})}} >
                                <option value=""></option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </section>

                        <section className='nationality-field'>
                            <label htmlFor="nationality">Nationality:</label>
                            <input type="text" id='nationality' placeholder='Enter Nationality'  
                            onChange={(e) =>{setUserData({...userData ,nationality :e.target.value})}} />
                        </section>
                    </div>

                    <div className='btns'>
                        <span><button className='cancel-btn' onClick={handleCancel}>Cancel</button></span>
                        <span><button className='submit-btn'onClick={handleSubmit}>Submit</button></span>
                    </div>
                </form>
            </div>
            <div className='message'>
                 {seeDetails && <Message setSeeDetails={setSeeDetails} />}
            </div>
        </div>
    )
}

export default Registration