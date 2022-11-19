import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import AutoCountrySelect from './MUI/AutoComp'
import ButonCmp from './MUI/ButonCmp'
import InputFir from './MUI/Input'
import NavBarr from './MUI/Nvabar'

const Home = () => {
  const [firstname , setfirstname] = useState("")
  const [lastname , setlastname] = useState("")
  const [country , setcountry] = useState("")
  

  function foo(){
    console.log("fullname: " , firstname , lastname , country);
    setfirstname("")
    setlastname("")
  }
  const option1 = [
    { code: 'AD', label: 'Andorra', phone: '376' },
    {
      code: 'AE',
      label: 'United Arab Emirates',
      phone: '971',
    },
    { code: 'AF', label: 'Afghanistan', phone: '93' },
    {
      code: 'AG',
      label: 'Antigua and Barbuda',
      phone: '1-268',
    },
    { code: 'AI', label: 'Anguilla', phone: '1-264' },
    { code: 'AL', label: 'Albania', phone: '355' },
    { code: 'AM', label: 'Armenia', phone: '374' },
    { code: 'AO', label: 'Angola', phone: '244' },
    { code: 'AQ', label: 'Antarctica', phone: '672' },
    { code: 'AR', label: 'Argentina', phone: '54' },
    { code: 'AS', label: 'American Samoa', phone: '1-684' },
    { code: 'AT', label: 'Austria', phone: '43' },
  ];

  return (
    <>
    <NavBarr />
    <InputFir label={"First Name"} value={firstname} onChange={(e)=>{
      setfirstname(e.target.value)
    }} />
    <InputFir label={"Last Name"} value={lastname} onChange={(e)=>{
      setlastname(e.target.value)
    }}/>
    <AutoCountrySelect label={"Choose your Country"} options={option1} onChange={(value)=>{
      setcountry(value)
    }}/>
    <ButonCmp className={"homebtn"} text={"Home"} onClick={foo} style={{bgcolor:"black" , width:"25%" , padding:"5px"}} />

     {/* <Typography variant='h3' mt={3} className="typo"> 
       taha    
    </Typography>  */}
 
   {/* <Typography variant='h3' sx={{
    color:"aqua",
    mt: 5,
   }}> 
       taha    
    </Typography> */}
    </>
  )
}

export default Home
