import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Public = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate('/student-dashboard');
        }
    });
    return <>{children}</>;
};

export default Public;
