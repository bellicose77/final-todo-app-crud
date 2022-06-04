import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Task from "./components/Task/Task";


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/task" element={<Task/>}/>
      </Routes>
     
      </BrowserRouter>
    
   
    </div>
  );
}

export default App;
