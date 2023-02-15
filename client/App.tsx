import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Error from './components/Error'
import HomeContainer from './containers/HomeContainer';
import Register from './components/Register';
import ProfileForm from './components/ProfileForm';

function App() {
  return (
    <>
      <div className=" w-full">
          <NavBar />
          {/* <ProfileForm /> */}
          <Routes>
            <Route path='/register' element={<Register/>}/>
            {/* <Route path="/home" element={<ProfileCard/>} /> */}
            <Route path='/' element={<HomeContainer/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
      </div>
    </>
  );
}

export default App
