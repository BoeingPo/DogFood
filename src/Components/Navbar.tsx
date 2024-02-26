import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ICONNav = styled.div`
    display : flex;
    flex-direction : row;
    height : 45px;
    width : auto;
    background-color : #FFE4BC;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

const NavbarButton = styled.button`
    display : flex;
    background : clear;
    width : 200px ;
    height : 100% ;
    align-items: center;
    justify-content: center;
    background-color : #D2691E ;
    margin : auto;
    border-radius: 50px;
    border : none;
    font-size : 12px;
    font-weight: 400;
    color : white;
    
`;

const Navbar = () => {
    const navigate = useNavigate();

    return(
        <>
        <ICONNav>
            <NavbarButton
                onClick={() => navigate('/')}
            >HOME</NavbarButton>
            <NavbarButton
                onClick={() => navigate('/Calculate')}
            >CALCULATE</NavbarButton>
            <NavbarButton
                onClick={() => navigate('/About')}
            >ABOUT</NavbarButton>
        </ICONNav>
        </>
    );
};

export default Navbar