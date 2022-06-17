import React from "react";
import 'antd/dist/antd.css';
import { AudioOutlined } from '@ant-design/icons';
import { Input,} from 'antd';
import { Carousel } from 'antd';
import Gorilla from "../assets/images/gorilla.jpg";
import Giraffe from "../assets/images/giraffe.jpg";
import Zebra from "../assets/images/zebra.jpg";
import Canopy from "../assets/images/canopy.jpg";
import "./home.css";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const Home =()=>{
    return (
    <>
  
    <div className="home-container">
    {/* <HomeLayout> */}
    {/* <Nav/> */}
    <div className="home-content">
        <h1 className="heading-title">RWANDA BOOKING TOUR</h1>
        <div className="carousel-img">
            <Carousel autoplay>
                <img src={Gorilla} alt="g"/>
                <img src={Giraffe} alt="gi"/>
                <img src={ Zebra} alt="ze"/>
                <img src={ Canopy} alt="cano"/>
            </Carousel> 
            <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
    <h3 className="topTour">TOp Tours</h3>
    
        </div>
        <hr className="align"></hr>
    </div>
    {/* </HomeLayout> */}
    </div>
    {/* <Footer></Footer> */}
    </>
    );
};
export default Home;