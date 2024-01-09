import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.css';
import Routings from './routing/Routings';
import Header from './components/header/Header';
import { useState } from 'react';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const alterLoginStatus = (data) => {
    setLoginStatus(data);
    console.log(loginStatus)

  }
  return (
    <>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Header />
        <div className='app' >
          <Routings routeApp={alterLoginStatus} />
        </div>
      </ThemeProvider>

    </>
  );
}
export default App;
