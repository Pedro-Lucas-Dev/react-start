import React from 'react';
import MyButton from "./components/Button" 
import EmptyTable from "./components/EmptyTable"
import "./assets/styles/EmptyPage.css"
function App() {
  return (
  <div className="content"> 

    <MyButton/>
    <EmptyTable/>
  </div>
   
  );
}

export default App;
