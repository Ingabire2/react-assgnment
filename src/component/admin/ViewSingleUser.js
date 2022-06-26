import React from "react";

const SingleUser =({data})=>{
    return(
        <>
       
    
        <div 
        style={{
            position:"relative",
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        minHeight:'80vh',
        background:'gray'}}>
    <p style={{position:"absolute",top:0,right:0,padding:"10px",background:"green",fontSize:"16px"}}>Edit</p>
   <img src={data.profilePicture}  style={{borderRadius:"50%",width:"80%"}}/>
   <h1>{data.name}</h1>
   <h1>INFORMATION</h1>
   <p italic>{data.about}</p>
   <div style={{dislay:'flex',fontWeight:'800',padding:'20px',textAlign:"start"}}>
   <h4  style={{fontWeight:'bold'}}>Email:{data.email} &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Age:{data.age}years</span></h4> 
   <h4 style={{fontWeight:'bold'}}>Phone:{data.phone} &nbsp;&nbsp;<span style={{fontWeight:'bold'}}>Home:{data.home}</span></h4> 
   
   </div>
        </div>
        </>
    )

}
export default SingleUser;