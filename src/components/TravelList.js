import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function TravelList() {
    const [traveldata, traveldatachange] = useState(null);
    const navigate=useNavigate();

    const LoadDetail = (id) => {
        navigate("/travel/detail/"+id);
    }
    const LoadEdit = (id) => {
        navigate("/travel/edit/"+id)
    }
    const Removefunction = (id) => {
        if (window.confirm('Do You wnat to remove?')) {
            fetch("http://localhost:9091/api/travel/travelsList/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed SuccesFully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:9091/api/travel/travelsList").then((res) => {
            return res.json();
        }).then((resp) => {
            traveldatachange(resp);
        }).catch((err) => {
            console.log(err.message)
        })
    },[])
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Travel Listing</h2>

                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                         <Link to="/travel/create" className='btn btn-success'>Add New(+)</Link> 
                    </div>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Seats</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {traveldata && traveldata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.travelsName}</td>
                                    <td>{item.seatsAvailable}</td>
                                    <td>
                                        <button><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a></button>
                                        <button><a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a></button>
                                        <button><a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a></button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}
