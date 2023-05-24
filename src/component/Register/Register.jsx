import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";

export default function Register() {
  
  const formik = useFormik({
    initialValues : {
      email:"",
      name:"",
      password:"",
      cPassword:""
    },onSubmit: dataSubmit,
  })
  
  let [validationError,setValidationError] = useState([])
  let [emailError,setEmailError] = useState('')

  async function dataSubmit(values) {
    let {data} = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',values).catch(
      (err) => {
        setEmailError(`* ${err.response.data.messgae}`);
      }
    )

    if (data.message == 'success'){
      console.log('Welcome');
    }else{
      setValidationError(data.err[0])
    }
  }

  return (
    <div className="container">
      <div className="w-75 m-auto my-5">
        <h2 className="my-5">Register</h2>
      <div>
        {validationError.map((err,index)=>{
          return <div className='alert alert-danger' key={index}>{err.message}</div>
        })}
        <div className="text-danger">
        {emailError}
        </div>
      </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              User Name
            </span>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Username"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Your Password
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Comform Password
            </span>
            <input
              type="password"
              name="cPassword"
              className="form-control"
              placeholder="Enter Your Comform Password"
              value={formik.values.cPassword}
              onChange={formik.handleChange}
            />
          </div>
          <button className="btn btn-info" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
