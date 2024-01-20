import './App.css';
import Routings from './Routes/Routings';
import { useState } from 'react';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const alterLoginStatus = (data) => {
    setLoginStatus(data);
    console.log(loginStatus)

  }
  return (
    <>
        <div className='app' >
          <Routings routeApp={alterLoginStatus} />
        </div>
    </>
  );
}
export default App;
