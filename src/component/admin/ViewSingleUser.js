import React from "react";

const SingleUser =({data})=>{
    return(
        <>
       
        <div 
        style={{
        textAlign:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        minHeight:'80vh',
        background:'chocolate'}}>
   <img src={data.profilePicture}  style={{borderRadius:"50%",width:"100%"}}/>
   <h1>{data.name}</h1>
   <p italic>{data.about}</p>
   <div style={{dislay:'flex',margin:'10px 3px',fontWeight:'800',padding:'10px'}}>
   <h4  style={{fontWeight:'bold'}}>Email:{data.email}<span><h4 style={{fontWeight:'bold'}}>Phone:{data.phone}</h4></span></h4> &nbsp;&nbsp; 
   <h4 style={{fontWeight:'bold'}}>Age:{data.age}years<span>&nbsp;&nbsp;<h4 style={{fontWeight:'bold'}}>Home:{data.home}</h4></span></h4> 
   
   </div>
        </div>
        </>
    )

}
export default SingleUser;