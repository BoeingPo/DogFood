import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import styled from "styled-components";

const Viewport = styled.div`
    display : flex;
    height : 100vh;
    //justify-content: center;
    align-items : center;
    flex-direction : column;
    margin : 10px;
`;

const SubButton = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 22px;
    width : 100px;
    height : 60px;
    border-radius : 50px;
    background-color : #FFCC33;
    font-weight: 400;
    margin-top: 10%;
    color : black;
`;

const AppMain = () => {
    const navigate = useNavigate();


    return(
        <Viewport>
            <h1 style={{ marginTop: 100 , textAlign: "center", fontSize : 30 }}>Calculating the energy of dog food for good health Nutrient Program</h1>
            <SubButton
            onClick={()=>{navigate('/Calculate')}}
        >Start</SubButton>
        </Viewport>
    );
};

export default AppMain;