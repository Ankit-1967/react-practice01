import React, {useState} from 'react'
import Banner2 from './components/Banner2';
import Banner from "./components/Banner";
import Header from "./components/Header";
import Alert from './components/Alert'

// react router component import
import {createBrowserRouter, RouterProvider  } from "react-router-dom";

function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    message:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const modeName = ()=>{
  if (mode === "light"){
    setMode("dark");
    showAlert("You can enable Light Mode", "success");
  } 
  else{
    setMode("light")
    showAlert("You can enable Dark Mode", "danger");
  }
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<><Header mode={mode} toggleMode={modeName}/><Alert alert={alert}/><Banner mode={mode} ShowAlert = {showAlert} 
    /></>
  },
  {
    path:"/about",
    element:<><Header mode={mode} toggleMode={modeName}/><Alert alert={alert}/> <Banner2/></>
  },
  {
    path:"/404_page",
    element:<><Header mode={mode} toggleMode={modeName}/></>
  }
]);
  return (
     <div className="App">
      
      
          {/* <Banner mode={mode} ShowAlert = {showAlert} /> */}
    <RouterProvider router={router}/>
    </div>   
  );
}

export default App;

