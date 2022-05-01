import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddItem from './Page/AddItem/AddItem';
import Allitems from './Page/AllItems/Allitems';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home/Home';
import SingleItem from './Page/singleItem/SingleItem';

 
function App() {
  return (
    <div className='container'>
      <Header></Header>
     {/* routes */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allitems" element={< Allitems/>} />
        <Route path="/singleItem/:id" element={< SingleItem></SingleItem>} />
        <Route path="/addItem" element={<AddItem></AddItem>} />
      </Routes>

    </div>
  );
}
 
export default App;