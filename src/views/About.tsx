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
    return(
        <>
        <h1 style={{display:'flex',justifyContent:'center'}}>About</h1>
        <Viewport>
            <div style={{ fontFamily: 'FCMinimal',fontSize:'20px'}}>โปรเจคนี้จัดทำขึ้นเพื่อใช้คำนวณ Dog food calories เบื้องต้นสำหรับการวางแผนโภชนาการอาหารสุนัขที่ต้องการควบคุมน้ำหนักลดโอกาสเสี่ยงการเป็นต้นเหตุเกิดโรคตามมา เช่น โรคหัวใจและหลอดเลือด กระดูกและข้อ นิ่วในระบบทางเดินปัสสาวะ โรคเบาหวาน เป็นต้น เพื่อให้สุนัขได้มีน้ำหนักในเกณฑ์ Dog ideal weight ของแต่ละสายพันธ์ุ โดยพิจารณาจากค่า BCS ของแต่ละสายพันธุ์ โดยสูตรการคำนวณอ้างอิงจากเนื้อหาวิชาโภชนาการและโภชนาการบำบัดทางการพยาบาลสัตว์ 01603336 คณะเทคนิคการสัตวแพทย์ สาขาการพยาบาลสัตว์ มหาวิทยาลัยเกษตรศาสตร์ บางเขน สามารถใช้งานได้ทุกกลุ่มทุกวัย สัตวแพทย์ พยาบาลสัตว์ หรือเจ้าของสัตว์เลี้ยง 

หมายเหตุ ; จัดทำขึ้นเพื่อประกอบการเรียนวิชาสหกิจศึกษาโดยไม่มีจุดประสงค์เชิงพานิชย์</div>
        </Viewport>
        </>
    );
}

export default About;