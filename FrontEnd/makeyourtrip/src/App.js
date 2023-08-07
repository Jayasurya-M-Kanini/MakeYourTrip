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
import BookingConfirm from './Components/BookingConfirmPage/BookingConfirm';
import Package from './Components/Package/Package';
import TourPackage from './Components/Package/TourPackage';

function App() {
  return (
    <div>
      {/* <LandingPage/> */}
      {/* <Login/> */}
      {/* <Maps/> */}
      {/* <TourDestinationForm/> */}
      {/* <SearchPage/> */}
      {/* <TourPage/> */}
      {/* <BookingPage/> */}
      {/* <ProfilePage/> */}
      {/* <BookingTable/> */}
        {/* <ToastContainer /> */}
      {/* <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        
        <Route path="/searchPage" element={<SearchPage/>} />
        <Route path="/tourpage" element={<TourPage/>} />
        <Route path="/tourpage/bookingpage" element={<BookingPage/>} />
        <Route path="/tourpage/bookingpage/ticket" element={<BookingConfirm/>} />
        <Route path="/profile" element={<ProfilePage/>} /> */}


       
        {/* <Route path="/ResetPassword" element={<ResetPassword/>} /> */}

        {/* <Route path="/User/*" element={<Nav/>}/> */}

     {/* </Routes> 
    </BrowserRouter>   */}
      {/* <BookingPage/> */}
      {/* <BookingConfirm/> */}
      {/* <Package/> */}
      <TourPackage/>
    </div>
  );
}

export default App;
