import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  // 현재 브라우저의 주소를 쓸 수도 있고, 주소의 변화를 감지할 수도 있다.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
