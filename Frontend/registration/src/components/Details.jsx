import React, { useEffect, useState } from 'react'
import "../components/Details.css"
const Details = () => {
    const [data , setData] = useState([])

    const res = async () =>{
        const fetchData = await fetch("http://localhost:8000/user",{
            method:"Get"
        })
        const dataList = await fetchData.json()
        setData(dataList.result)
    }

    useEffect(() =>{
        res()
    },[])
    console.log(data)
  return (
    <div className='details-container'>
        <h1>User Details</h1>
        <div className='details-content'>
            <table>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Age/Sex</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Govt ID</th>
                    <th>Guardian Details</th>
                    <th>Nationality</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele, index) =>{
                  return(
                    <tr key={index}>
                      <td>{ele.name}</td>
                      <td>{ele.age}/{ele.gender}</td>
                      <td>{ele.mobile}</td>
                      <td>{ele.address},{ele.pincode},{ele.city},{ele.state}</td>
                      <td>{ele.govtId}</td>
                      <td>{ele.guardianDetails}: {ele.guardianName} , {ele.email} , {ele.emergencyNumber}</td>
                      <td>{ele.nationality}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
        
    </div>
  )
}

export default Details