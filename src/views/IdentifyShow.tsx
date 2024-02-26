import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ViewWarp = styled.div`
    display : flex;
    //justify-content: center;
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
    grid-template-columns : auto auto auto;
    margin : 10px;
    grid-gap : 10px;
`;

const MinorBox = styled.div`
    display : flex;
    justify-content: center;
    align-items : center;
    width : auto;
`;

const MinorSubdata = styled.div`
    display : grid;
    grid-template-rows : auto auto ;
    grid-gap : 5px;
    justify-content: center;
    align-items : center;
`;

const MinorBoxExtra = styled.div`
    display : flex;
    justify-content: start;
    align-items : center;
`;

const SubButton = styled.button`
    display : flex;
    justify-content : center;
    align-items : center;
    font : 20px;
    width : 100px;
`;

const OutputData = styled.div`
    display : flex;
    background-color : white;
    border-bottom: solid 2px black;
    align-items : center;
    justify-content : center;
    width : 150px;
`;

const ResultData = styled.div`
    display : flex;
    margin-top: 20px;
`;

const InfoName = styled.div`
    display : grid;
    grid-template-columns :2fr 2fr 1fr ;
    height : 25px;
    width: 100%;
    background-color : #FFDAB9;
    border-radius : 50px;
    justify-content: center;
    align-items : center;
    font-size : 12px;
    padding : 10px;
    grid-gap : 5px;
`;

const FoodQuality = styled.div`
    display : flex;
    width:100px;
    justify-content: space-between;
    font-size : 24px;
`;

const Grid_minor_top = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
`;

const IdentityShow = () => {
    const location = useLocation();
    const InfoData2 = location.state && location.state.InfoData2;

    const MER = (140 * ((InfoData2.ValueData.weight) ** 0.75)).toFixed(3);
    const RERx = (70 * ((InfoData2.ValueData.weight) ** 0.75));
    const RER = (70 * ((InfoData2.ValueData.weight) ** 0.75)).toFixed(3);
    const DER = (RERx * (1.4)).toFixed(3);
    const DERx = (RERx * (1.4));
    const FoodQU = (DERx / (InfoData2.ValueData.FoodME)).toFixed(3);

    console.log('InfoData2', InfoData2)


    return (
        <ViewWarp>
            <InfoName>
                <div style={{ margin: 2 }}>
                    <Grid_minor_top>
                        <div style={{display:'flex',justifyContent:'end'}}>Dog name :</div>
                        <div>{InfoData2.TextData.Dogname}</div>
                    </Grid_minor_top>
                </div>
                <div style={{ margin: 2 }}>
                    <Grid_minor_top>
                        <div style={{display:'flex',justifyContent:'end'}}>Owner name :</div>
                        <div >{InfoData2.TextData.Owner}</div>
                    </Grid_minor_top>
                </div>
                <div style={{ margin: 2 }}>
                    <Grid_minor_top>
                        <div style={{display:'flex',justifyContent:'end'}}>HN :</div>
                        <div >{InfoData2.TextData.HN}</div>
                    </Grid_minor_top>
                </div>
            </InfoName>
            <FormContainer>
                <FormMinorContainer>
                    <MinorBox>
                        <MinorSubdata>
                            <div style={{ fontSize: '24px' }}>MER</div>
                            <div style={{ fontSize: '12px' }}>(Maintanace Energy Requirement)</div>
                        </MinorSubdata>
                    </MinorBox>
                    <MinorBox>
                        <OutputData>
                            {MER}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        Kcal/Day
                    </MinorBox>
                </FormMinorContainer>
                <FormMinorContainer>
                    <MinorBox>
                        <MinorSubdata>
                            <div style={{ fontSize: '24px' }}>RER</div>
                            <div style={{ fontSize: '12px' }}>(Resting Energy Requirement)</div>
                        </MinorSubdata>
                    </MinorBox>
                    <MinorBox>
                        <OutputData>
                            {RER}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        Kcal/Day
                    </MinorBox>
                </FormMinorContainer>
                <FormMinorContainer>
                    <MinorBox>
                        <MinorSubdata>
                            <div style={{ fontSize: '24px' }}>DER</div>
                            <div style={{ fontSize: '12px' }}>(Daily Energy Requirement)</div>
                        </MinorSubdata>
                    </MinorBox>
                    <MinorBox>
                        <OutputData>
                            {DER}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        Kcal/Day
                    </MinorBox>
                </FormMinorContainer>
            </FormContainer>
            <ResultData>
                <FormMinorContainer>
                    <MinorBox>
                        {/* <div style={{fontSize: '24px',display:"flex",justifyContent:"center",width:100,justifyItems:'space-between'}}> */}
                        <FoodQuality>
                            <div>Food</div> <div>Quality</div>
                        </FoodQuality>
                    </MinorBox>
                    <MinorBox>
                        <OutputData style={{ backgroundColor: '#FFFACD' }}>
                            {FoodQU}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        g./Day
                    </MinorBox>
                </FormMinorContainer>
            </ResultData>
        </ViewWarp>
    );
};

export default IdentityShow;