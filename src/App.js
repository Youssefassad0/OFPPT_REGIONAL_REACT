import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Composant from './EFM1/Composant';
import Composant2 from './EFM1/Composant2';
import ComposantEdit from './EFM1/ComposantEdit';
import EFM2 from './EFM2/App';
import Header from './EFM2/components/Header';
import Details from './EFM2/components/Details';

function App() {
  return (
<BrowserRouter>
<Header />
  
<Routes>
  <Route  path='/composant1' element={<Composant/>} />
  <Route  path='/composant2' element={<Composant2/>} />
  <Route  path='/composant2/:id' element={<ComposantEdit/>} />
  <Route path='/efm2' element={<EFM2/>} />
  <Route path='/details' element={<Details/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
