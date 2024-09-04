import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import GroceryStore from './GroceryStore';
import GraphicDesign from './GraphicDesign';
import Internship from './Internship';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about#contactMe" element={<About />} />
          <Route path="/GroceryStore" element={<GroceryStore />} />
          <Route path="/GraphicDesign" element={<GraphicDesign />} />
          <Route path="/Internship" element={<Internship />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;