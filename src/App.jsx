import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { AppLayout } from "./components/app-layout";
import {Home} from './pages/home';



function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </>
  )
};


export default App;