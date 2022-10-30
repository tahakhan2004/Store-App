import { collection, setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../Firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc } from "firebase/firestore"; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 


const LogIn = () => {
  const [email,setemail] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()
  const user = localStorage.getItem("uid")

  const dbCollection = collection(db, "DataCollection");

  useEffect(()=>{
    if(user){
        navigate("/storeapp")
  }
}, [])


 function loginhandler(e){
  e.preventDefault()
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
  .then((res) =>{
     console.log(res);
     localStorage.setItem("uid" , res.user.uid) 
    //  console.log(localStorage.setItem("uid" , res.user.uid));
     navigate("/storeapp")
  })
  .catch((err)=>{
     console.log(err);
  })   
} 

function signup(){
  navigate("/signup")
}
return (
    <>
 <Form className='container mt-5' onSubmit={loginhandler}>
  <h1>LogIn</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='fs-3'>Email address</Form.Label>
        <Form.Control value={email} type="email" onChange={(e)=>{
            setemail(e.target.value)
        }} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='fs-3'>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>{
            setpassword(e.target.value)
        }} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Button variant="success" type="submit" className='ms-3' onClick={signup}>
        Register Asap
      </Button>
    </Form>
    </>
    )
  }  

export default LogIn
