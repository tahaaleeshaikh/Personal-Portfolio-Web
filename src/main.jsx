import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './component/home/home.jsx'
import About from './component/about/about.jsx'
import Contact from './component/contact/contact.jsx'
import User from './component/user/user.jsx'
import Github,{githubInfoLoader} from './component/github/github.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"/",
      element:<Home/>
    },{
      path:"/about",
      element:<About/>
    },{
      path:"/contact",
      element:<Contact/>
    },{
      path:"user/:userid",
      element:<User/>
    },{
      loader:githubInfoLoader,
       path:"github",
      element:<Github/>
    }]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
