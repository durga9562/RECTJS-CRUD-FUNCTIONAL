import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function CreateTravel() {

    const[id,idChange]=useState("");
    const[travelsName,TravelNameChange]=useState("");
    const[seatsAvailable,seatsAvailableChange]=useState("");
    const[active,activechange]=useState(true);
    const[validation,valChange]=useState(false);

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        const travelData={travelsName,seatsAvailable};

        fetch("http://localhost:9091/api/travel/travelsList",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(travelData)
        }).then((res)=>{
            alert("Saved Successfully")
            navigate("/");
        }).catch((err)=>{
            console.log(err.message)
        })
    }


  return (
    <div>
<div className='row'>
<div className='offset-lg-3 col-lg-6'>
<form className='container' onSubmit={handlesubmit}>
<div className='card' style={{"textAlign":"left"}}>
<div className='card-title'>
<h2>Travel Create</h2>
</div>
<div className='card-body'>
    <div className='row'>
<div className='col-lg-12'>
    <div className='form-group'>
        <label>Id</label>
        <input value={id} disabled="disabled" className='form-control'></input>

    </div>

</div>
<div className='col-lg-12'>
    <div className='form-group'>
        <label>TravelName</label>
        <input value={travelsName} onMouseDown={e=>valChange(true)} onChange={e=>TravelNameChange(e.target.value)} className='form-control'></input>
{travelsName.length==0 && validation && <span className='text-danger'>Enter the name</span>}
    </div>

</div>
<div className='col-lg-12'>
    <div className='form-group'>
        <label>SeatsAvailabel</label>
        <input value={seatsAvailable} onChange={e=>seatsAvailableChange(e.target.value)} className='form-control'></input>

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
