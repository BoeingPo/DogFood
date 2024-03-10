import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import styled from "styled-components";
import Corgi from './Pictures/corgi.jpg'
import corgipal from './Pictures/corgipal.jpg'

const Viewport = styled.div`
    display : flex;
    //justify-content: center;
    align-items : center;
    flex-direction : column;
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
    color : black;
`;

const AppMain = () => {
    const navigate = useNavigate();


    return (
        <Viewport>
            <div style={{position:'absolute'}}>
                <img src={corgipal} alt="corgipal" width='100%'/>
            </div>
            <h1 style={{position:'relative', marginTop: 60, textAlign: "center", fontSize: 36 }}>Calculating the energy of dog food for good health Nutrient Program</h1>
            <h1 style={{position:'relative', marginTop: -20, textAlign: "center", fontSize: 15 }}>โปรแกรมคำนวณพลังงานอาหารเพื่อดูแลสุขภาพสุนัข</h1>
            <SubButton style={{position:'relative',marginTop:'14.5em'}}
                onClick={() => { navigate('/Calculate') }}
            >Start</SubButton>
        </Viewport>
    );
};

export default AppMain;