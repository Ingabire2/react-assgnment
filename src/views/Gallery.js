import React from "react";
import {Card} from "antd";
import './Gallery.css';
const Gallery =()=>{
    return(
        <>
        <h1 strong className="gallery">Our Exciting Tours</h1>
        <Card position="vertical">
            <Card.Grid className="flex">
                <img style={{width:'40rem',margin:'10px'}}src="https://travelchronicles.net/wp-content/uploads/2019/01/074A1755.jpg" alt="photo"></img>
                <img style={{width:'40rem',margin:'10px'}}src="https://thumbs.dreamstime.com/b/happy-travel-woman-vacation-concept-funny-traveler-enjoy-her-trip-ready-to-adventure-happy-travel-woman-vacation-concept-118679424.jpg"alt="photo"></img>
                <img style={{width:'40rem',margin:'10px'}}src="https://wordpress.pgcruises.com/wp-content/uploads/2021/10/larissa-rolley_tikis_waterfall_0.jpg"alt="photo"></img>
                <img style={{width:'40rem',margin:'10px'}}src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs="alt="photo"></img>
                <img style={{width:'40rem',margin:'10px'}}src='https://www.africanmeccasafaris.com/wp-content/uploads/nyungweforestlodgehousesmall7.jpg'alt="photo"></img>
                <img style={{width:'40rem',margin:'10px'}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7vWYqtjMays0fclgHBYsUsTiHfCjsrhwg&usqp=CAU'alt="photo"></img>
            </Card.Grid>
        </Card>
        </>
    )
}
export default Gallery;