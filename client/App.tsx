import { Route, Routes } from 'react-router-dom'
import Navbar from "/client/components/Navbar"
import Error from '/client/components/Error'
import HomeContainer from '/client/containers/HomeContainer'

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<HomeContainer />} />



          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App
