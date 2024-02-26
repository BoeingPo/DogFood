import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AppMain from './AppMain';
import Identity from './views/Identity';
import Navbar from './Components/Navbar';
import About from './views/About';
import IdentityBio from './views/IdentityBio';
import IdentityShow from './views/IdentifyShow';

interface Form1Data {
  dogName: string;
  OwnerName: string;
  DogHn: string;
}

interface Form2Data {
  bodyWeight: number | '';
  bcs: number | '';
  foodME: number | '';
}

interface App2Props {
  onFormSubmit: (data: FormData) => void;
  // Other props with default values
}


function App() {
//   const [Loginstatus, isLoginstatus] = useState(false)
//   const [ErrorStatus, isErrorStatus] = useState(false)
//   const [credentials, setCredentials] = useState({
//     id: '',
//     pass: '',
//   });

//   const [Pass1Page,isPass1Page] = useState(false)
//   const [Pass2Page,isPass2Page] = useState(false)
//   const [Pass3Page,isPass3Page] = useState(false)

//   const [form1Data, setForm1Data] = useState<Form1Data>({
//     dogName: '',
//     OwnerName: '',
//     DogHn: ''
//   });

//   const [form2Data, setForm2Data] = useState<Form2Data>({
//     bodyWeight: '',
//     bcs: '',
//     foodME: ''
// });

//   console.log('form1Data inparetn',form1Data)

//   const handleFormSubmit = (formData: Form1Data,isSuccessful: boolean) => {
//     // Update the state with the form data from the child component
//     setForm1Data(formData);
//     if (isSuccessful) {
//       isPass1Page(true);
//     }

//   };

//   const handleFormSubmit2 = (formData: Form2Data, isSuccessful: boolean) => {
//     // Update the state with the form data from the child component
//     setForm2Data(formData);

//     // Perform further actions based on the submission status
//     if (isSuccessful) {
//       isPass2Page(true)
//     }
// };

  


//   const handleID = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCredentials({
//       ...credentials,
//       id: e.target.value,
//     });
//   };

//   const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCredentials({
//       ...credentials,
//       pass: e.target.value,
//     });
//   };

//   const CheckID = () => {
//     if (credentials.id === 'user01' && credentials.pass === '1234') {
//       isLoginstatus(true)
//     }
//     else {
//       isErrorStatus(true)
//     }

//   }

//   useEffect(() => {
//     console.log(credentials)
//   }, [credentials])

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' element={<AppMain/>} />
        <Route path='/Calculate' element={<Identity/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Calculate2' element={<IdentityBio/>} />
        <Route path='/Calculate3' element={<IdentityShow/>} />
        </Routes>
      </BrowserRouter>
      {/* {!Pass1Page && <App2 onFormSubmit={handleFormSubmit} />}
      {!Pass2Page && <App3 onFormSubmit={handleFormSubmit2}/>}
      {Pass2Page && <App4 form1Data={form1Data} form2Data={form2Data}  />} */}
    </>
  );
}

export default App;
