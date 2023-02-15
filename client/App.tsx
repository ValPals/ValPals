import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Error from './components/Error'
import HomeContainer from './containers/HomeContainer';
import Register from './components/Register';
import ProfileForm from './components/ProfileForm';
import Footer from './components/Footer';
import ProfileContainer from './containers/ProfileContainer';

function App() {
  return (
    <>
      <div className="main-container h-screen w-full">
          <NavBar />
        
          <Routes>
            
            <Route path='/form' element={<ProfileForm/>}/>
            <Route path="/profile" element={<ProfileContainer/>} />
            <Route path='/home' element={<HomeContainer/>}/>
            {/* <Route path='/profile' element={<Profile/>}/> */}
            <Route path='/' element={<Register/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
      </div>
    </>
  );
}

export default App

