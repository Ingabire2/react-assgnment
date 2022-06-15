import React from "react";
import logoFooter from "../assets/images/tour-logo.jpg";
import {FacebookOutlined ,TwitterOutlined,InstagramOutlined} from"@ant-design/icons";
import "./footer.css";
 const Footer =()=>{
    const date =new Date();
    let year = date.getFullYear();
    
     return(
         <div className="footer-container">
             <div className="logo-column">
                 
                  
                 <img src={logoFooter} alt="logo footer"className="logo-img"></img>
                 <div className="icons">
                 <FacebookOutlined />
                 <TwitterOutlined />
                 <InstagramOutlined />
                 </div>
                 <p>This is our footer</p>
                 <p className="copyright">copyright &copy;{year} by cycy,<span>Inc.All rights reserved</span>{""} </p>
             </div>
             
             <div className="contactus-column">
                <h3 className="footer-title"> Contact-Us</h3>
                <p>623 KACYIRU ST.,2nd floor, <span>KIGALI Rwanda</span></p>
                <p><a href="tel:+250-788-737-287">tel:+250-788-737-287</a>
                <a href="mailto:shecancode@example.com">shecancode@example.com</a>
                </p>
             </div>
             <div className="account-column">
             <h3 className="footer-title"> Account</h3>
             <p><a href="#">Create-Account</a></p>
             <p><a href="#">Sign-In</a></p> 
             </div>
             <div className="company-column">
             <h3 className="footer-title"> Company</h3>
             <p><a href="#">About SheCanCodet</a></p>
             <p><a href="#">Careers</a></p>
             <p><a href="#">Parterns</a></p> 
             </div>
             <div className="company-column">
             <h3 className="footer-title"> Resources</h3>
             <p><a href="#">SheCanCode directory</a></p>
             <p><a href="#">Help Center</a></p> 
             <p><a href="#">Privacy and Terms</a></p> 
             </div>
         </div>
     )
 }
 export default Footer;