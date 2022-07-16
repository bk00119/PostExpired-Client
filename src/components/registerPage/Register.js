import jwt_decode from "jwt-decode";
import { useEffect , useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { useParams , useNavigate } from "react-router-dom";

import { createUser } from "../../actions/users";

export default function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { g_id } = useParams();

    const registerUser = () => {
        console.log("registerUser");
    }
    
    return (
        <button onClick={registerUser}>register</button>
    )
}