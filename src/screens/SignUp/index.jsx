import { collection, setDoc } from 'firebase/firestore';
// import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../Firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc } from "firebase/firestore"; 
import { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid, Typography } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';


export default function SignUp() {
   const [email,setemail] = useState("")
   const [password, setpassword] = useState("")
   const [name, setname] = useState("")

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
        setemail("") 
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
      <div className='signer1 container m-auto mt-3 mb-2'>
      <Typography variant="h4" component="" className='text-center fonto'>
            SignUp
      </Typography> 
      <Grid container className='p-lg-5 mt-lg-5 p-md-0 justify-content-center '>
        <Grid item lg={6}>
      <div className=" ">
    {/* <img src="" alt="" /> */}
    <img src="./signuppp.png" className="img-thumbnail  imges" alt="..." width={500} ></img>
     </div>
     </Grid>

     <Grid item lg={6} className="">
    <Box sx={{ '& > :not(style)': { m: 1 } , pt: 5 }}>
      <Form className=''  onSubmit={SignupHandler}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', mb:3 }}>
        <DriveFileRenameOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="" label="Enter UserName" className="w-75" variant="standard" type={Text} value={name}  onChange={(e)=>{
            setname(e.target.value)
        }}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="" label="Enter your Email" className="w-75" variant="standard" type={email} value={email}  onChange={(e)=>{
            setemail(e.target.value)
        }}/>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end' , mt: 3  }} >
       <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter Password" className="w-75"  variant="standard" value={password} onChange={(e)=>{
            setpassword(e.target.value)
         }} type="password"/>
         </Box>
        
       {/* <Button variant="primary" type="submit" className='me-3'>
       Submit
      </Button> */}
<div className="wrap mt-4">
  
  <button type="submit" className="buttond">Submit</button>
</div>
<h6 className='ms-4 mt-2'>Or</h6>
<Link className='linko' to={"/"}>if already account exist</Link>

      </Form>
    </Box>
    </Grid>
    </Grid>
    </div>
    </>
  );
}