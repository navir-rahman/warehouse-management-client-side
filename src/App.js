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


function App() {
  return (
    <div>
        <Header></Header>
      <div className='container'>
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allitems" element={< Allitems />} />
          <Route path="/singleItem/:id" element={< SingleItem></SingleItem>} />
          <Route path="/addItem" element={<AddItem></AddItem>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </div>
        <Footer></Footer>
    </div>
  );
}

export default App;