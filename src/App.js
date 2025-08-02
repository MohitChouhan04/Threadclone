import { BrowserRouter,Routes , Route } from "react-router-dom"; 
import Loading from "./components/Common/Loading";
import Header from "./components/Common/Header";
import Search from "./pages/protected/Search";
import Home from "./pages/protected/Home";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/protected/ProtectedLayout";
import Profilelayout from "./pages/protected/profile/Profilelayout";
import Thread from "./pages/protected/profile/Thread";
import Replies from './pages/protected/profile/Replies'
import Repost from "./pages/protected/profile/Repost";
import Singlepost from "./pages/protected/Singlepost";
function App() {
  const data = true;

  return (
    <>
    <Box minHeight={'100vh'}>



    {/* <Register/> */}
    <BrowserRouter>
    
   
    <Routes>
      { data ?(
      <Route exact path="/" element={<ProtectedLayout/>}>
      <Route exact path="" element={<Home/>}/>
      <Route exact path="post/:id" element={<Singlepost/>}/>
      <Route exact path="search" element={<Search/>}/>
      <Route exact path="profile" element={<Profilelayout/>}>
      <Route exact path="threads/:id" element={<Thread/>}/>
      <Route exact path="replies/:id" element={<Replies/>}/>
      <Route exact path="reposts/:id" element={<Repost/>}/>
      </Route>
      </Route> ):(
      <Route exact path="/" element={<Register/>}/>
      )
     }
     <Route exact path="*" element={<Error/>}/>
      
 
    
    </Routes>
    </BrowserRouter>
    </Box>

   
  

    </>
  );
}

export default App;
