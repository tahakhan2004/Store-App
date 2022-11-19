import { collection, setDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../Firebase';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc } from "firebase/firestore"; 
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { Box, Grid, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import KeyIcon from '@mui/icons-material/Key';


export default function LogIn() {
  const [email,setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [name, setname] = useState("")

   const navigate = useNavigate()
   const dbCollection = collection(db, "DataCollection");
   const user = localStorage.getItem("uid")

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


 return (
     <>
     <div className='signer container m-auto mt-3'>
     <Typography variant="h4" component="" className='text-center fonto'>
           Login
     </Typography> 
     <Grid container className='p-lg-5 mt-lg-5 p-md-0 justify-content-center align-items-center'>
       <Grid item lg={6} className="order-last">
     <div className="">
   {/* <img src="" alt="" /> */}
   <img src="./loginn.png" className="img-thumbnail  imges" alt="..." width={500} ></img>
    </div>
    </Grid>

    <Grid item lg={6} className="">
   <Box sx={{ '& > :not(style)': { m: 1 }  }} className="pt-md-5">
     <Form className=''  onSubmit={loginhandler}>
     <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
       <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
       <TextField id="" label="Enter your Email" className="w-75" variant="standard" type={email} value={email}  onChange={(e)=>{
           setemail(e.target.value)
       }}/>
     </Box>

     <Box sx={{ display: 'flex', alignItems: 'flex-end' , mt: 2  }} >
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
<Link className='linko' to={"/signup"}>Register Asap!</Link>

     </Form>
   </Box>
   </Grid>
   </Grid>
   </div>
   </>
 );
}


