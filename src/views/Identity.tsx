import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ViewWarp = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    flex-direction : column;
    padding : 20px;
`;

const FormContainer = styled.div`
    display : grid;
    grid-template-rows : 20vh 20vh 20vh;    
    margin : 20px;
`

const FormMinorContainer = styled.div`
    display : grid;
    grid-template-rows : auto 50px;
    margin : 10px;
`;

const SubButton = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    font : 30px;
    width : 100px;
    height : 30px;
    border-radius : 50px;
    background-color : #FFCC33;
    font-weight: 900;
`;

const InputBox = styled.input`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 24px;
    border-radius : 12px;
`;

const MinorBox = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    width : 150px;
    font-size : 30px;
`;


const Identity = () => {
    const navigate = useNavigate();
    const [DogName,setDogName] = useState('');
    const [OwnerName,setOwnerName] = useState('');
    const [HN,setHN] = useState(''); 
    const [InfoData,setInfoData] = useState({
        Dogname : '',
        Owner : '',
        HN : ''
    });
    const [Disablebutton,isDisablebutton] = useState(true);

    const DogNamehandleInputChange = (value:any) => {

        setDogName(value);
        
    }

    const OwnerNamehandleInputChange = (value:any) => {

        setOwnerName(value);
        
    }

    const HNhandleInputChange = (value:any) => {

        setHN(value);
        
    }

    useEffect(()=>{
        console.log('This is Dogname :',DogName)

        InfoData.Dogname = DogName;

    },[DogName])

    useEffect(()=>{
        console.log('This is OwnerName :',OwnerName)
        InfoData.Owner = OwnerName;

    },[OwnerName])

    useEffect(()=>{
        console.log('This is HN :',HN)
        InfoData.HN = HN;

    },[HN])

    useEffect(()=>{
        
        if(InfoData.Dogname != '' && InfoData.Owner != '' && InfoData.HN != ''){
            isDisablebutton(false)
        }
        else{
            isDisablebutton(true)
        }

    },[InfoData.Dogname,InfoData.Owner,InfoData.HN])

    const SumbitData = () => {
        console.log('This data will be transfer to next page',InfoData);
        navigate('/Calculate2',{ state: { InfoData } });
    }

    return(
        <ViewWarp>
        <FormContainer>
            <FormMinorContainer>
                <MinorBox>
                    Dog name
                </MinorBox>
                <div>
                    <InputBox
                    type="text"
                    onChange={(e) => DogNamehandleInputChange(e.target.value)}
                    ></InputBox>
                </div>
            </FormMinorContainer>
            <FormMinorContainer>
                <MinorBox>
                    Owner name
                </MinorBox>
                <div>
                    <InputBox
                    type="text"
                    onChange={(e) => OwnerNamehandleInputChange(e.target.value)}
                    ></InputBox>
                </div>
            </FormMinorContainer>
            <FormMinorContainer>
                <MinorBox>
                    Dog HN.
                </MinorBox>
                <div>
                <InputBox
                    type="text"
                    onChange={(e) => HNhandleInputChange(e.target.value)}
                    ></InputBox>
                </div>
            </FormMinorContainer>
        </FormContainer>
        <SubButton
            onClick={SumbitData}
            disabled={Disablebutton}
        >Next</SubButton>
        </ViewWarp>
    );
};

export default Identity