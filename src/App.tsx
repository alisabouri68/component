import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Comm from './routs/Comm';
import Desk from './routs/Desk';
import Cast from './routs/Cast';
import Hot from './routs/Hot';
import Home from './routs/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/comm" element={<Comm />} />
          <Route path="/desk" element={<Desk />} />
          <Route path="/cast" element={<Cast />} />
          <Route path="/hot" element={<Hot />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
};

export default App;
