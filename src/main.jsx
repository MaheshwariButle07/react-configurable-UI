import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css'
import Home from './view/Home/Home.jsx';
import CardPages from './view/CardPages/CardPages.jsx';
import About from './view/About/About.jsx';
import AboutCardPage from './view/AboutCardPage/AboutCardPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/cardpage/:id",
    element:<CardPages />
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/aboutcardpage/:id",
    element:<AboutCardPage/>
  }
 ]);

 root.render(<RouterProvider router={router}/>);

