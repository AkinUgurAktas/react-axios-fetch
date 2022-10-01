import './App.css'
import axios from "axios";
import React from "react";


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// YOU CAN CHANGE THIS REQUEST URL FOR DIFFERENT RESULTS
export default function App() {

 
function print()
{
  
  alert("YOU'RE CLICKED THIS AWESOME BUTTON ! ")

}


  const [post, setPost] = React.useState(0);


  
  React.useEffect(() => {
   
   // SENDING AXIOS GET REQUEST TO DECLARED URL 
      axios.get(baseURL).then((response) => {
        setPost(response.data);
   // ASSIGN VALUE TO post
      })
      
    

}, [])


  


  if (!post) return null;

  const divStyle = {
    "backgroundColor": '#413F42',
    "color": 'white',
    "width":"400px",
    "height":"600px",
    "border":"2px solid black",
    'borderRadius':"10px",
    "fontSize":"12px",
    "alignItems":"center"
    


  };
  
  const btnStyle = {
    
    "backgroundColor":"#131313",
    "color": '#e1ffff',
    "width":"80px",
    "height":"30px",
    "border":"1px solid red",
    'borderRadius':"5px",
    "fontSize":"12px",
    "margin":"auto"
    
    
    


  };
  const txtStyle = {
    "backgroundColor": '#413F42',
    "color": '#e1ffff',
    "width":"300px",
    "height":"100px",
    "border":"2px solid black",
    "fontSize":"10px",
    "margin":"auto"
    


  };

  return (
    <div className="App">
      
  <header className="App-header">
    
 
    <div style={divStyle}>
    <br></br>

    
      CREATED BY AKIN UGUR AKTAS IN SEPTEMBER 2022
      <br></br>
      <br></br>
      <button id='btn1' style={btnStyle} onClick={print} >CLICK ME</button>
      <br></br>
      <br></br>
      <h1 style={txtStyle}>{"USER: "}{post.userId}{" : "+"POST: "}{post.id}</h1>
      <br></br>

      
      <div style={txtStyle}>
      TITLE
      <br></br>
      <br></br>
        {post.title}</div>
      <br></br>
      
      <div style={txtStyle}>
        BODY
      <br></br>
      <br></br>
      {post.body}</div>
    </div>

  </header>
  

      
    </div>
  );
  }