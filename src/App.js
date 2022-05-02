import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Page/AddItem/AddItem';
import Allitems from './Page/AllItems/Allitems';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home/Home';
import SingleItem from './Page/singleItem/SingleItem';
import './App.css'
import Login from './Page/Login/Login';
import RequirAuth from './Page/Requirauth/RequirAuth';
import SignIn from './Page/Signin/SignIn';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/allitems" element={
            <RequirAuth>
              < Allitems />
            </RequirAuth>

          } />
          <Route path="/singleItem/:id" element={
            <RequirAuth>
              < SingleItem></SingleItem>
            </RequirAuth>
          } />


          <Route path="/addItem" element={
            <RequirAuth>
              <AddItem></AddItem>
            </RequirAuth>

          } />

          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignIn></SignIn>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;