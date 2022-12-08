import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

export default function TravelDetail() {

    const {travelid} = useParams();

    const [travelData,travelDataChange] = useState({});


    useEffect(()=>{
        fetch("http://localhost:9091/api/travel/travelsList/"+travelid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            travelDataChange(resp);
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])
  return (
    <div>

        <div className='container'>
<div className='card-row' style={{"textAlign":"left"}}>
    <div className='card-title'>
<h2>Travel CRETE</h2>
    </div>
    <div className='card-body'>

    </div>

    {travelData&&<div>
        
        <h2>The Travel Name is: <b>{travelData.travelsName}</b> ({travelData.id})</h2>
        <h3>Seats Availabel is: {travelData.seatsAvailable}</h3>
        <Link className="btn btn-danger" to="/">Back to Listing</Link>
        </div>}

</div>
        </div>
    </div>
  )
}
