import { useNavigate } from "react-router-dom";
import { removeToken } from "../Token/Token";
import { useEffect } from "react";

export function Logout(){
    const navigate = useNavigate();

    useEffect(() => {
        removeToken();
        navigate('/');
    }, [navigate]);
    
    return null;
}