import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TravelEdit() {

    const {travelid} = useParams();


    useEffect(()=>{
        fetch("http://localhost:9091/api/travel/travelsList/"+travelid).then((res)=>{
            return res.json();
        }).then((resp)=>{
            idchange(resp.id);
            travelsNameChange(resp.travelsName);
            seatsAvailableChange(resp.seatsAvailable);
            activechange(resp.isactive);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])


    const [id,idchange]=useState("");
    const [travelsName,travelsNameChange]=useState("");
    const [seatsAvailable,seatsAvailableChange]=useState("");
    const [active,activechange]=useState(true);
    const [validation,valChange]=useState(false);
     
    const navigate=useNavigate();

     const handlesubmit=(e)=>{
        e.preventDefault();
        const travelData = {id,travelsName,seatsAvailable,active};

        fetch("http://localhost:9091/api/travel/travelsList/"+travelid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(travelData)
        }).then((res)=>{
            alert("saved Succesfully")
            navigate("/");
        }).catch((err)=>{
            console.log(err.message);
        })
     }


  return (
    <div>
<div className='row'>
<div className='offset-lg-3 col-lg-6'>
    <form className="container" onSubmit={handlesubmit}>
        <div className='card' style={{"textAlign":"left"}}>
            <div className='card-title'>
<h2>Travel Edit</h2>
            </div>
            <div className='card-body'>
<div className='row'>
<div className='col-lg-12'>
    <div className='form-group'>
<label>Id</label>
<input value={id} disabled="disabled" className='form-control'/>
    </div>

</div>

<div className='col-lg-12'>
    <div className='form-group'>
        <label>Travel Name</label>
        <input  required value={travelsName} onMouseDown={e=>valChange(true)} onChange={e=>travelsNameChange(e.target.value)} className="form-control"/>

    </div>

</div>

<div className='col-lg-12'>
    <div className='form=group'>
<label>Seats</label>
<input value={seatsAvailable} onChange={e=>seatsAvailableChange(e.target.value)} className="form-control"/>
    </div>

</div>
<div className="col-lg-12">
                                    <div className="form-check">
                                    <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                        <label  className="form-check-label">Is Active</label>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

</div>
            </div>

        </div>

    </form>

</div>
</div>

    </div>
  )
}
