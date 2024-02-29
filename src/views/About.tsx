import React from "react";
import styled from "styled-components";

const Viewport = styled.div`
    display : flex;
    height : 100vh;
    //justify-content: center;
    align-items : center;
    flex-direction : column;
    margin : 10px;
    font-size : 18px;
`;

const About = () => {

    const DownloadPDF = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1z4Nlc7-9bZ_zcGLDHi_Q1_kjepq8on3g';
    };

    return (
        <>
            <Viewport>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%', margin: '1em 0em 2em 0em', backgroundColor: '#F7F6CF', padding: '10px 20px 10px 20px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}>
                        Dog weight record planner
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <button onClick={DownloadPDF} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'none', backgroundColor: '#FFCC33', border: 'none', fontSize: '16px', padding: '10px 20px 10px 20px', borderRadius: '15px' }}>Download</button>
                    </div>
                </div>
                <div style={{ backgroundColor: '#FFF8B9', padding: '10px 20px 10px 20px', borderRadius: '15px' }}>
                    <div style={{ display: 'flex', fontSize: '28px', margin: '0px 0px 7px 0px', fontWeight: '600',justifyContent:'center' }}>Project Objective</div>
                    <div style={{ fontFamily: 'FCMinimal', fontSize: '19px', textIndent: '50px', padding: '0px 8px 0px 8px' }}>โปรเจคนี้จัดทำขึ้นเพื่อใช้คำนวณ Dog food calories เบื้องต้นสำหรับการวางแผนโภชนาการอาหารสุนัขที่ต้องการควบคุมน้ำหนักลดโอกาสเสี่ยงการเป็นต้นเหตุเกิดโรคตามมา เช่น โรคหัวใจและหลอดเลือด กระดูกและข้อ นิ่วในระบบทางเดินปัสสาวะ โรคเบาหวาน เป็นต้น เพื่อให้สุนัขได้มีน้ำหนักในเกณฑ์ Dog ideal weight ของแต่ละสายพันธ์ุ โดยพิจารณาจากค่า BCS ของแต่ละสายพันธุ์ โดยสูตรการคำนวณอ้างอิงจากเนื้อหาวิชาโภชนาการและโภชนาการบำบัดทางการพยาบาลสัตว์ 01603336 คณะเทคนิคการสัตวแพทย์ สาขาการพยาบาลสัตว์ มหาวิทยาลัยเกษตรศาสตร์ บางเขน สามารถใช้งานได้ทุกกลุ่มทุกวัย สัตวแพทย์ พยาบาลสัตว์ หรือเจ้าของสัตว์เลี้ยง
                        หมายเหตุ ; จัดทำขึ้นเพื่อประกอบการเรียนวิชาสหกิจศึกษาโดยไม่มีจุดประสงค์เชิงพานิชย์</div>
                </div>
            </Viewport>
        </>
    );
}

export default About;