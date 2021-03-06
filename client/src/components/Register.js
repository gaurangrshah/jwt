import React, { Fragment, useState } from 'react';
import {toast} from 'react-toastify';

const Register = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async e => {
        e.preventDefault();

        try {
            const body = { name, email, password };
            const response = await fetch("http://localhost:5000/auth/register",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();
            
            console.log(parseRes);
            // if (parseRes.jwtToken) {
            //     localStorage.setItem("token", parseRes.token); 
            //     setAuth(true); 
            //     toast.success("Registration Successful"); 
            // } else {
            //     setAuth(false);
            //     toast.error(parseRes); 
            // }            
        } catch (error) {
            console.error(error.message);
        }
    };


    return (
        <Fragment>
        
            <h1 className="text-center my-5">Register</h1>
            <form onSubmit={ onSubmitForm }> 
            
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={ name }
                    className="form-control my-3"
                    onChange={ e => onChange(e) }

                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={ email }
                    className="form-control my-3"
                    onChange={ e => onChange(e) }
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={ password }
                    className="form-control my-3"
                    onChange={ e => onChange(e) }
                />
                <button className="btn btn-success btn-block">Submit</button>
            </form>
        </Fragment>
    )
}

export default Register;