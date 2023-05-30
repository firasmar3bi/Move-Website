import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'

export default function Register() {
  
  let [validationError,setValidationError] = useState([])
  let [emailError,setEmailError] = useState('')
  let Navigate = useNavigate();

  const schema = yup.object({
    email : yup.string().required().email(),
    name: yup.string().required().min(3,'min character 3').max(20 , 'max character 20'),
    password: yup.string().required(),
    cPassword: yup.string().required().oneOf([yup.ref('password')])
  })

  const formik = useFormik({
    initialValues : {
      email:"",
      name:"",
      password:"",
      cPassword:""
    },validationSchema:schema,
    onSubmit: dataSubmit,
  })
  

  async function dataSubmit(values) {
    let {data} = await axios.post('https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup',values).catch(
      (err) => {
        setEmailError(`* ${err.response.data.messgae}`);
      }
    )

    if (data.message == 'success'){
      console.log('Welcome');
      setValidationError([]);
      setEmailError('');
      Navigate('/Login');
    }else{
      setValidationError(data.err[0])
    }
  }

  return (
    <div className="container vh-100">
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
              className={`form-control ${ formik.errors.name && formik.touched.name ?"is-invalid":''}`}
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
              className={`form-control ${ formik.errors.email && formik.touched.email ?'is-invalid':''}`}
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
              className={`form-control ${ formik.errors.password && formik.touched.password ?'is-invalid':''}`}
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
              className={`form-control ${ formik.errors.cPassword && formik.touched.cPassword ?'is-invalid':''}`}
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
