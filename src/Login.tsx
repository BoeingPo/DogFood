import React, { useEffect, useState } from "react";

const Login = () => {
    const [Loginstatus, isLoginstatus] = useState(false)
  const [ErrorStatus,isErrorStatus] = useState(false)
  const [credentials, setCredentials] = useState({
    id: '',
    pass: '',
  });

  const handleID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      id: e.target.value,
    });
  };

  const handlePass = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      pass: e.target.value,
    });
  };

  const CheckID = () => {
    if(credentials.id === 'user01' && credentials.pass === '1234'){
      isLoginstatus(true)
    }
    else
    {
      isErrorStatus(true)
    }
    
  }

  useEffect(()=>{
    console.log(credentials)
  },[credentials])
    return(
        <div className='App'>
                <div className='LoginBlock'>
                  <div className='Header'>
                    Calculating the energy for dogs
                  </div>
                  <div className='InputLayout'>
                    <div className='Identify'>
                      ID :{' '}
                      <input
                        type='text'
                        onChange={handleID}
                      />
                    </div>
                    <div className='Identify'>
                      Password :{' '}
                      <input
                        type='password'
                        onChange={handlePass}
                      />
                    </div>
                  </div>
                  <button onClick={CheckID}>
                    Login
                  </button>
                  {ErrorStatus && <p style={{ color: 'rgb(255, 78, 78)' }}>Wrong ID or Password!</p>}
                </div>
              </div>
    );
}

export default Login;