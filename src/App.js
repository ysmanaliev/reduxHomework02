import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteFound from "./pages/noteFound/NoteFound";

import PagePhotos from "./pages/pagePhoto/PagePhotos";
import InfoPhoto from './components/infoPhoto/InfoPhoto';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       
       <Route path="/" element={<PagePhotos/>}></Route>
       <Route path="info/:id" element={<InfoPhoto/>}></Route>
       <Route path="page1" element={<Page1/>}></Route>
       <Route path="page2" element={<Page2/>}></Route>
       <Route path="page3" element={<Page3/>}></Route>
       <Route path="page4" element={<Page4/>}></Route>

      <Route path='*' element={<NoteFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}