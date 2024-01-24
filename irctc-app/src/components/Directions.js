import React from 'react'
import {BrowserRouter,Link,Routes, Route, useNavigate} from 'react-router-dom';
import Profile from './Profile'
import Protected from './Protected';
export default function Directions() {
  return (
    <div>
      <BrowserRouter>
                <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/" element={<Protected/>}/>
                </Routes>
      </BrowserRouter>
    </div>
  )
}
