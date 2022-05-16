
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './Pages/AddBook/AddBook';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import ManageItems from './Pages/ManageItems/ManageItems';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>  
        <Route path='/inventory/:inventoryId' element={
           <RequireAuth>
             <ServiceDetail></ServiceDetail>
           </RequireAuth>}></Route>
        <Route path='/addbook' element={
           <RequireAuth>
             <AddBook></AddBook>
           </RequireAuth>}></Route>
        <Route path='/managebooks' element={
           <RequireAuth>
             <ManageBooks></ManageBooks>
           </RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
