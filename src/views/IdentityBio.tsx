import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BCSImage from '../Pictures/DogBCS.png'

const ViewWarp = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    flex-direction : column;
    padding : 0px;
`;

const FormContainer = styled.div`
    display : grid;
    grid-template-rows : 20vh;    
    margin : 0px;
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

const DropdownStyle = styled.div`
    display : flex;
    padding : 10px;
    justify-content : center;
    align-items : center;
    background : white;
    cursor : pointer;
    &:hover {
        background : lightblue;
      }

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
            FoodME: 0,
            factor: 0
        }
    });
    const [weight, setweight] = useState(0);
    const [BCS, setBCS] = useState(0);
    const [FoodME, setFoodME] = useState(0);
    const [Disablebutton, isDisablebutton] = useState(true);
    const [ShowBCS, isShowBCS] = useState(false);
    const [ShowMEDetail, isShowMEDetail] = useState(false);

    const [ShowDropDownfactor, isShowDropDownfactor] = useState(false);
    const [TextFactor, setTextFactor] = useState('')

    const [ShowDropDownBCS, isShowDropDownBCS] = useState(false);
    const [TextBCS, setTextBCS] = useState('');

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

    const DropdownFunction = (value: any) => {
        isShowDropDownfactor(false);

        factorChangeHandle(value);

    }

    useEffect(() => {
        //console.log(InfoData2.ValueData.factor)

        const value = InfoData2.ValueData.factor.toString();

        console.log('Convert to string', value)



        if (value === '1.5') {
            setTextFactor('สุนัขทำหมันแล้ว')
        }
        else if (value === '1.7') {
            setTextFactor('สุนัขยังไม่ทำหมัน')
        }
        else if (value === '1.1') {
            setTextFactor('สุนัขมีการเดิน/วิ่งเล็กน้อย มีแนวโน้มจะอ้วนง่าย')
        }
        else if (value === '0.8') {
            setTextFactor('สุนัขไม่เดิน/วิ่ง อ้วนท้วม')
        }


    }, [InfoData2.ValueData.factor])

    useEffect(() => {
        console.log('This bcs',TextBCS)

        const value = InfoData2.ValueData.BCS.toString();

        console.log('Convert to string', value)



        if (value === '1') {
            setTextBCS('1')
        }
        else if (value === '2') {
            setTextBCS('2')
        }
        else if (value === '3') {
            setTextBCS('3')
        }
        else if (value === '4') {
            setTextBCS('4')
        }
        else if (value === '5') {
            setTextBCS('5')
        }
        else if (value === '6') {
            setTextBCS('6')
        }
        else if (value === '7') {
            setTextBCS('7')
        }
        else if (value === '8') {
            setTextBCS('8')
        }
        else if (value === '9') {
            setTextBCS('9')
        }

        }, [InfoData2.ValueData.BCS])

    const BCSDropDownHandle = (value: any) => {

        isShowDropDownBCS(false);

        BCShandleInputChange(value);

    }

    const factorChangeHandle = (value: any) => {
        const intvalue = parseFloat(value);

        setInfoData2((prevInfoData2) => ({
            ...prevInfoData2,
            ValueData: {
                ...prevInfoData2.ValueData,
                factor: intvalue,
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
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '24px', width: '150px', marginBottom: '-26px' }}>
                        Body Weight (kg.)
                    </div>
                    <InputBox
                        type="number"
                        onChange={(e) => weighthandleInputChange(e.target.value)}
                    ></InputBox>
                </FormMinorContainer>
                <FormMinorContainer>
                    <MinorBox>
                        BCS (Standard Score 1-9)
                    </MinorBox>
                    <div>
                        <InputBox
                            type="text"
                            onClick={() => isShowDropDownBCS(!ShowDropDownBCS)}
                            value={TextBCS}
                        ></InputBox>
                        {ShowDropDownBCS && <div style={{ display: 'grid', position: 'absolute', gridTemplateColumns: '169.6px' }}>
                            <DropdownStyle style={{ borderRadius: '10px 10px 0px 0px' }}
                                onClick={() => BCSDropDownHandle(1)}
                            >1</DropdownStyle>
                            <DropdownStyle
                                onClick={() => BCSDropDownHandle(2)}
                            >2</DropdownStyle>
                            <DropdownStyle
                                onClick={() => BCSDropDownHandle(3)}
                            >3</DropdownStyle>
                            <DropdownStyle style={{ borderRadius: '0px 0px 10px 10px' }}
                                onClick={() => BCSDropDownHandle(4)}
                            >4</DropdownStyle>
                            <DropdownStyle style={{ borderRadius: '10px 10px 0px 0px' }}
                                onClick={() => BCSDropDownHandle(5)}
                            >5</DropdownStyle>
                            <DropdownStyle
                                onClick={() => BCSDropDownHandle(6)}
                            >6</DropdownStyle>
                            <DropdownStyle
                                onClick={() => BCSDropDownHandle(7)}
                            >7</DropdownStyle>
                            <DropdownStyle style={{ borderRadius: '0px 0px 10px 10px' }}
                                onClick={() => BCSDropDownHandle(8)}
                            >8</DropdownStyle>
                            <DropdownStyle style={{ borderRadius: '0px 0px 10px 10px' }}
                                onClick={() => BCSDropDownHandle(9)}
                            >9</DropdownStyle>
                        </div>}
                    </div>
                    <GridPicture>
                        <div>
                            <CircleButton style={{ position: 'relative' }}
                                onClick={() => { isShowBCS(!ShowBCS) }}
                            ></CircleButton>
                        </div>
                        <div >คลิกเพื่อแสดงภาพการเปรียบเทียบ BCS</div>
                    </GridPicture>
                </FormMinorContainer>
                {ShowBCS && <div style={{ height: 270 }}>
                    <img src={BCSImage} alt="DogBCS" width="310" height="239" />
                </div>}
                <FormMinorContainer>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '24px', width: '150px' }}>
                        <div>
                            Assessment Factors
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3px', marginBottom: '10px', fontSize: '16px', width: '150px' }}>
                            ปัจจัยการใช้พลังงานของสุนัข
                        </div>
                    </div>
                    <div>
                        <InputBox
                            type="text"
                            onClick={() => isShowDropDownfactor(!ShowDropDownfactor)}
                            value={TextFactor}
                        //onChange={(e) => BCShandleInputChange(e.target.value)}
                        ></InputBox>
                        {ShowDropDownfactor && <div style={{ display: 'grid', position: 'absolute', gridTemplateColumns: '169.6px' }}>
                            <DropdownStyle style={{ borderRadius: '10px 10px 0px 0px' }}
                                onClick={() => DropdownFunction(1.5)}
                            >สุนัขทำหมันแล้ว</DropdownStyle>
                            <DropdownStyle
                                onClick={() => DropdownFunction(1.7)}
                            >สุนัขยังไม่ทำหมัน</DropdownStyle>
                            <DropdownStyle
                                onClick={() => DropdownFunction(1.1)}
                            >สุนัขมีการเดิน/วิ่งเล็กน้อย มีแนวโน้มจะอ้วนง่าย</DropdownStyle>
                            <DropdownStyle style={{ borderRadius: '0px 0px 10px 10px' }}
                                onClick={() => DropdownFunction(0.8)}
                            >สุนัขไม่เดิน/วิ่ง อ้วนท้วม </DropdownStyle>
                        </div>}
                    </div>
                </FormMinorContainer>
                <FormMinorContainer>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <MinorBox>
                            Food ME (kcal/g.)
                        </MinorBox>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>ดูข้างบรรจุภัณฑ์</div>
                    </div>
                    <div>
                        <InputBox
                            type="number"
                            onChange={(e) => FoodMEthandleInputChange(e.target.value)}
                        ></InputBox>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <CircleButton style={{ marginRight: '10px', position: 'relative' }}
                            onClick={() => { isShowMEDetail(!ShowMEDetail) }}
                        ></CircleButton>
                        คลิกคำอธิบาย Food ME
                    </div>
                    {ShowMEDetail && <div style={{ fontSize: '14px', padding: '10px 20px 10px 20px', marginTop: '10px', backgroundColor: '#F7F6CF', borderRadius: '10px' }}>
                        Food ME หรือ Food Metabolizable Energy คือพลังงานของอาหารที่สัตว์สามารถนำไปใช้ได้
                        เช่น ข้างบรรจุภัณฑ์ระบุว่า “ สำหรับอาหารเปียก ค่าพลังงานที่ใช้ได้ 350 kcal ต่ออาหารสัตว์ 100 g “ หรือแปลงค่าได้เป็น 3.5 kcal/g. แล้วนำ 3.5 กรอกใส่ในช่อง Food ME
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