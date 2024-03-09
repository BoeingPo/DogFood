import React, { useState } from "react";
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
    grid-template-rows : 14vh 14vh 14vh;    
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

const OutputResultData =styled.div`
    display : flex;
    background-color : #FBEDBE;
    border-bottom: solid 2px black;
    align-items : center;
    justify-content : center;
    width : 80px;
    padding : 10px 0px 10px 0px;
    font-size : 24px;
    border-radius : 10px 10px 0px 0px;
`;

const ResultData = styled.div`
    display : flex;
    flex-direction : column;
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
    flex-direction : row;
    width:100px;
    justify-content: space-between;
    font-size : 21.5px;
    font-weight : 580;
`;

const Grid_minor_top = styled.div`
    display : grid;
    grid-template-columns : 1fr 1fr;
`;

const IdentityShow = () => {
    const location = useLocation();
    const InfoData2 = location.state && location.state.InfoData2;

    //const MER = (140 * ((InfoData2.ValueData.weight) ** 0.75)).toFixed(3);
    const RERx = (70 * ((InfoData2.ValueData.weight) ** 0.75));
    const MER = (RERx*InfoData2.ValueData.factor).toFixed(3);
    const RER = (70 * ((InfoData2.ValueData.weight) ** 0.75)).toFixed(3);
    const DER = (RERx * (1.4)).toFixed(3);
    const DERx = (RERx * (1.4));
    const FoodQU = (DERx / (InfoData2.ValueData.FoodME)).toFixed(3);
    const TagetWeight = InfoData2.ValueData.weight*(100/(100+(InfoData2.ValueData.BCS-5)*10));
    const Bodyfatx = InfoData2.ValueData.BCS*4.7263;
    const IdealWeight = (InfoData2.ValueData.weight*((1-(0.01*Bodyfatx))/0.8)).toFixed(3);

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
                        <OutputData style={{fontSize:'19px'}}>
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
                        <OutputData style={{fontSize:'19px'}}>
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
                        <OutputData style={{fontSize:'19px'}}>
                            {DER}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        Kcal/Day
                    </MinorBox>
                </FormMinorContainer>
                <FormMinorContainer>
                    <MinorBox>
                        <MinorSubdata>
                            <div style={{ fontSize: '24px' }}>Ideal Weight</div>
                        </MinorSubdata>
                    </MinorBox>
                    <MinorBox>
                        <OutputData style={{fontSize:'19px'}}>
                            {IdealWeight}
                        </OutputData>
                    </MinorBox>
                    <MinorBox style={{width:'47.825px'}}>
                        kg.
                    </MinorBox>
                </FormMinorContainer>
            </FormContainer>
            <ResultData>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:'1.5em',padding : '32px',backgroundColor:'#F7F6CF',borderRadius:'20px'}}>
                    <MinorBox>
                        <FoodQuality>
                            Food Quantity
                        </FoodQuality>
                    </MinorBox>
                    <MinorBox>
                        <OutputResultData>
                            {FoodQU}
                        </OutputResultData>
                    </MinorBox>
                    <MinorBox style={{fontSize:'21.5px'}}>
                        g./Day
                    </MinorBox>
                    <MinorBox>
                        <FoodQuality>
                            Target Weight
                        </FoodQuality>
                    </MinorBox>
                    <MinorBox>
                        <OutputResultData>
                            {TagetWeight.toFixed(3)}
                        </OutputResultData>
                    </MinorBox>
                    <MinorBox style={{fontSize:'21.5px'}}>
                        kg.
                    </MinorBox>

                </div>
                {/* <FormMinorContainer>
                    <MinorBox>
                        <FoodQuality>
                            Food Quantity
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
                <FormMinorContainer>
                    <MinorBox>
            
                        <FoodQuality>
                            Target weight
                        </FoodQuality>
                    </MinorBox>
                    <MinorBox>
                        <OutputData style={{ backgroundColor: '#FFFACD' }}>
                            {FoodQU}
                        </OutputData>
                    </MinorBox>
                    <MinorBox>
                        kg
                    </MinorBox>
                </FormMinorContainer> */}
            </ResultData>
        </ViewWarp>
    );
};

export default IdentityShow;