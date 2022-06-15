import React from "react";
import {Card} from "antd";
import './Gallery.css';
const Gallery =()=>{
    return(
        <>
        <h1 strong>This is Gallery</h1>
        <Card position="vertical">
            <Card.Grid className="flex">
                <img style={{width:'40rem',margin:'30px'}}src="https://travelchronicles.net/wp-content/uploads/2019/01/074A1755.jpg"></img>
                <img style={{width:'40rem',margin:'30px'}}src="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg"></img>
                <img style={{width:'40rem',margin:'30px'}}src="https://wordpress.pgcruises.com/wp-content/uploads/2021/10/larissa-rolley_tikis_waterfall_0.jpg"></img>
                <img style={{width:'40rem',margin:'30px'}}src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs="></img>
                <img style={{width:'40rem',margin:'30px'}}src='https://www.africanmeccasafaris.com/wp-content/uploads/nyungweforestlodgehousesmall7.jpg'></img>
                <img style={{width:'40rem',margin:'30px'}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7vWYqtjMays0fclgHBYsUsTiHfCjsrhwg&usqp=CAU'></img>
            </Card.Grid>
        </Card>
        </>
    )
}
export default Gallery;