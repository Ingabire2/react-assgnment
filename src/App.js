import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from './routes';

const App = () =>{
      return (
      <Router>
            <Routes></Routes>
      </Router>
      );
};
 export default App;
// import Card from "./card";
// //import ReactDOM from "react-dom";
// const App = () => {
    
//      return ( <div className="hello"> 
//            <Card  photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQubkXpvfRutJY_PHgTbuHo4fckTtEN7dHTyQ&usqp=CAU" title="Nyungwe Park" paragraph="lorem ipsum svhlorem ipsum svh"/>
//            <Card   photo="https://www.heritagetoursorissa.com/images/tourpackages/family-tour-odisha.jpg" title="Gishwati Park"paragraph="lorem ipsum svhlorem ipsum svh"/>
//            <Card title="Kivu Park"paragraph="lorem ipsum svhlorem ipsum svh"  photo="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/022/017/medium/a7bcd5b7bd9b55ba10d104dc554bc72f/mm-tour-news-2017-06-forum-italy-agrigento-tour-members.jpg"/>
//      </div>)
//  };

 //ReactDOM.render(<Card/>,document.querySelector("#root"));
 