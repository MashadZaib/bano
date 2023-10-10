import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Private = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/student-login");
        }
    });

    return <>{children}</>;
};

export default Private;
