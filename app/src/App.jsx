import './App.css';
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">

      </header>
    </div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />}>
       </Route>
     </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
