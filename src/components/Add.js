import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone_no: "",
        age: ""
    });
    const { name, email, phone_no, age } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users", user);
        navigate('/');
    }
    return (
        <>
            <div className="container">
                <h1 className="text-center">Add A User</h1>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="mb-3">
                        <label for="exampleInputName1" className="form-label">Name</label>
                        <div className="form-floating mb-3">
                            <input type="name" class="form-control" id="floatingInput" aria-describedby="nameHelp"
                                placeholder="name" name="name" value={name} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Name</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email" name="email" value={email} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Email</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Phone No.</label>
                        <div className="form-floating mb-3">
                            <input type="tel" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="email" name="phone_no" value={phone_no} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Phone No.</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Age<span className="clue">(optional)</span></label>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" min="10" max="99" id="exampleInputNumber1"
                                aria-describedby="ageHelp" placeholder="age" name="age" value={age} onChange={e => onInputChange(e)} />
                            <label for="floatingInput" className="top">Enter Your Age</label>
                        </div>
                    </div>
                    <button type="submit" id="create" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Add;