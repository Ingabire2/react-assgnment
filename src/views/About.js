import React from "react";
import { Typography,Card } from "antd";

const { Title } = Typography;
const AboutUs = () => {
  return (
    <>
  
      <div style={{ float: "right",marginTop: "50px" }}>
        <Title strong> About Us </Title>
        <p placement="right"style={{ marginTop: "40px",fontSize:'16px',lineHeight:'1.5' }} >
        Gisenyi
The gateway to that great speck of blue that is Lake Kivu,<br/> sitting amidst the verdant hills and mountains of the Albertine<br/> Rift Valley, Gisenyi is a place where the African <br/>jungles cascade down grassy hills in sporadic bouts of palm trees<br/> and exotic cassiyas.

They fall to meet the muddied waters of the lake, where flitting insects and <br/>boatman flies cause ripples on the surface.<br/>

Although shared with larger Goma across<br/> the border with DRC to the west, the banks<br/> of the lake are the real draw.

They are<br/> peppered with bamboo built shacks and eco lodges – perfect for those eager to immerse<br/> themselves and escape in the Rwandan wilderness.
        </p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/45UT03fciPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div >
        <img style={{width:'60rem', margin:'20px', heigth:'60px'}}src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Gisenyi.jpg"
        alt="photo"></img>
      </div>
    </>
  );
};
export default AboutUs;
