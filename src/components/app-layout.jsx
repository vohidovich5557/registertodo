import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';
import { request } from "../config/request";





export const AppLayout = () => {
    if(!Cookies.get("token-server")) return <Navigate to="/" replace />
    return (
        <>
       <Outlet /> 
        </>
    )
};