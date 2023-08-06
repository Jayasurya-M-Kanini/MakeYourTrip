import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import Maps from './Maps/Maps';
import TourDestinationForm from './Components/dummy';
import SearchPage from './Components/SearchPage/SearchPage';
import ProductList from './Components/SearchAndFilters';
import OnlySearch from './Components/OnlySearch';
import TourPage from './Components/TourPage/TourPage';
import BookingPage from './Components/BookingPage/BookingPage';
import OTPVerification from './Components/OTPVerification/OTPVerification';
import ProfilePage from './Components/BasicCard/ProfilePage/ProfilePage';
import BookingTable from './Components/BasicCard/Tables/BookingTable';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      {/* <Login/> */}
      {/* <Maps/> */}
      {/* <TourDestinationForm/> */}
      {/* <SearchPage/>
      <TourPage/> */}
      {/* <BookingPage/> */}
      {/* <ProfilePage/> */}
      {/* <BookingTable/> */}
      <BrowserRouter>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<ProfilePage/>} />
        
        <Route path="/MyBooking" element={<BookingTable/>} />
        {/* <Route path="/ResetPassword" element={<ResetPassword/>} /> */}

        {/* <Route path="/User/*" element={<Nav/>}/> */}

      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
