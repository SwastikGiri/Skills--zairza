import { Router,Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css"
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="" element={<Home/>} />
        </Route>
        <Route path="register" element={<Register/>} />
        <Route path="signin" element={<SignIn/>} />
      </Routes>
  );
}

export default App;
