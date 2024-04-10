import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route, Outlet } from "react-router-dom";

import Signin from "./components/SignIn";
import Signup from "./components/SignUp";
import Book from "./components/BookList/Book";
const App=()=>{
    console.log("app============>>>>>")
    // const shouldShowToolbar = window.location.pathname !== "/Signin" && window.location.pathname !== "/Signup";
    return(
     
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Signin/>}/>
     <Route path="/Signup" element={<Signup/>}/>
     <Route path="/Book" element={<Book/>}/>

     
     </Routes>
     </BrowserRouter>
    )
}
export default App