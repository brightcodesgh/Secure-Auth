import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from  './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import Protected from './components/AuthLayout.jsx';
import { store } from './store/store.js'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>

            <Route element={<Protected/>}>
              <Route index element={<Home/>}/>        
              <Route path="profile" element={<Profile/>}/> 
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
