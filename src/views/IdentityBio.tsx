import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BCSImage from '../Pictures/DogBCS.png'

const ViewWarp = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    flex-direction : column;
    padding : 20px;
`;

const FormContainer = styled.div`
    display : grid;
    grid-template-rows : 20vh;    
    margin : 20px;
    width : 300px;
`

const FormMinorContainer = styled.div`
    display : grid;
    grid-template-rows : auto 50px;
    margin : 10px;
    justify-items: center
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
    color : black;
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
    flex-direction : row;
    justify-content: center;
    align-items : center;
    width : 150px;
    font-size : 24px;
    padding : 5px;
    weight-size : 900;
`;

const CircleButton = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 30px;
    height : 20px;
    width : 20px;
    border-radius : 20px;
    background-color : #FFCC33;
    font-weight: 900;
`;

const GridPicture = styled.div`
    display : grid;
    grid-template-columns : 1fr 5fr;
`;

const IdentityBio = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const InfoData = location.state && location.state.InfoData;
    const [InfoData2, setInfoData2] = useState({
        TextData: InfoData,
        ValueData: {
            weight: 0,
            BCS: 0,
            FoodME: 0
        }
    });
    const [weight, setweight] = useState(0);
    const [BCS, setBCS] = useState(0);
    const [FoodME, setFoodME] = useState(0);
    const [Disablebutton, isDisablebutton] = useState(true);
    const [ShowBCS, isShowBCS] = useState(false);
    const [ShowMEDetail,isShowMEDetail] = useState(false);

    const weighthandleInputChange = (value: any) => {
        const intvalue = parseFloat(value);

        setInfoData2((prevInfoData2) => ({
            ...prevInfoData2,
            ValueData: {
                ...prevInfoData2.ValueData,
                weight: intvalue,
            },
        }));
    };

    const BCShandleInputChange = (value: any) => {
        // const intvalue = parseFloat(value);

        // InfoData2.ValueData.BCS = intvalue;

        // setweight(intvalue)

        const intvalue = parseFloat(value);

        setInfoData2((prevInfoData2) => ({
            ...prevInfoData2,
            ValueData: {
                ...prevInfoData2.ValueData,
                BCS: intvalue,
            },
        }));
    };

    const FoodMEthandleInputChange = (value: any) => {
        const intvalue = parseFloat(value);

        setInfoData2((prevInfoData2) => ({
            ...prevInfoData2,
            ValueData: {
                ...prevInfoData2.ValueData,
                FoodME: intvalue,
            },
        }));
    };

    const SubmitFunc = () => {
        console.log('Finished data', InfoData2)



        navigate('/Calculate3', { state: { InfoData2 } });
    }


    useEffect(() => {

        if ((InfoData2.ValueData.weight !== 0 && !Number.isNaN(InfoData2.ValueData.weight)) && (InfoData2.ValueData.BCS !== 0 && !Number.isNaN(InfoData2.ValueData.BCS)) && (InfoData2.ValueData.FoodME !== 0 && !Number.isNaN(InfoData2.ValueData.FoodME))) {
            console.log('Data work')
            isDisablebutton(false)
        }
        else {
            isDisablebutton(true)
            console.log('Data false')
        }

    }, [InfoData2.ValueData.weight, InfoData2.ValueData.BCS, InfoData2.ValueData.FoodME])

    console.log(InfoData2.ValueData.weight)

    return (
        <ViewWarp>
            <FormContainer>
                <FormMinorContainer>
                    <MinorBox>
                        Body weight (kg.)
                    </MinorBox>
                        <InputBox
                            type="number"
                            onChange={(e) => weighthandleInputChange(e.target.value)}
                        ></InputBox>
                </FormMinorContainer>
                <FormMinorContainer>
                    <MinorBox>
                        BCS (Standard score 1-9)
                    </MinorBox>
                    <div>
                        <InputBox
                            type="number"
                            onChange={(e) => BCShandleInputChange(e.target.value)}
                        ></InputBox>
                    </div>
                    <GridPicture>
                        <div>
                        <CircleButton
                            onClick={() => { isShowBCS(!ShowBCS) }}
                        ></CircleButton>
                        </div>
                         <div>คลิกเพื่อแสดงภาพการเปรียบเทียบ BCS</div>
                    </GridPicture>
                </FormMinorContainer>
                {ShowBCS && <div style={{ height: 270 }}>
                    <img src={BCSImage} alt="DogBCS" width="310" height="239" />
                </div>}
                <FormMinorContainer>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <MinorBox>
                        Food ME (kcal/g.)
                    </MinorBox>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}>ดูข้างบรรจุภัณฑ์</div>
                    </div>
                    <div>
                        <InputBox
                            type="number"
                            onChange={(e) => FoodMEthandleInputChange(e.target.value)}
                        ></InputBox>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <CircleButton style={{marginRight:'10px'}}
                            onClick={() => { isShowMEDetail(!ShowMEDetail) }}
                        ></CircleButton>
                        คลิกคำอธิบาย Food ME
                        </div>
                    {ShowMEDetail && <div style={{fontSize:'14px',padding:'10px 20px 10px 20px',marginTop:'10px',backgroundColor:'#F7F6CF',borderRadius:'10px'}}>
                        Food ME หรือ Food Metabolizable Energy คือพลังงานที่สัตว์นำไปใช้ได้ เช่น 350 kcal/100g หรือ 3.5 kcal/g.
                        </div>}
                </FormMinorContainer>
            </FormContainer>
            <SubButton
                onClick={SubmitFunc}
                disabled={Disablebutton}
            >Submit</SubButton>
        </ViewWarp>
    );
};

export default IdentityBio;