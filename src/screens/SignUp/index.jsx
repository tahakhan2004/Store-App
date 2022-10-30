import { collection, setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../Firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc } from "firebase/firestore"; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [email,setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const dbCollection = collection(db, "DataCollection");
    const user = localStorage.getItem("uid")

    useEffect(()=>{
        if(user){
            navigate("/storeapp")
      }
    }, [])
      
  function SignupHandler(e){
     e.preventDefault()
     const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
     .then(async (res) =>{
        console.log(res);
        const obj = {
             email,
            uid : res.user.uid,
        }
        await setDoc(doc(dbCollection, res.user.uid), obj) 
        navigate("/")
     })
     .catch((err)=>{
        console.log(err);
     })   
     
  }  
  function sino(){
    navigate("/")
  }
  return (
  <>
      <Form className='container mt-5' onSubmit={SignupHandler}>
      <h1>SignUp</h1>
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
      <Button variant="primary" type="submit" className='me-3'>
        Submit
      </Button>
      <Button variant="success" type="submit" onClick={sino}>
        If Account Exist
      </Button>
    </Form>
  </>
  )
}

export default SignUp   