import { Suspense } from "react";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import btmMascotVector from "./assets/svg/btmMascotVector.svg";
import Bubbles from "./components/Bubbles/Bubbles";
import UserDetails from "./contexts/UserContext";
import {
  MainPage,
  DoctorsList,
  Medicines,
  Profile,
  Predictor,
  Login,
  Signup,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import MainLayout from "./components/MainLayout/MainLayout";
function App() {
  return (
    <UserDetails>
      <div className="App">
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Navbar />
            <MainLayout>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/doctors" element={<DoctorsList />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/predictor" element={<Predictor />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
              </Routes>
            </MainLayout>
            <div className="btm__vector_c">
              <img src={btmMascotVector} alt="" />
            </div>
            <Bubbles />
          </Suspense>
        </BrowserRouter>
      </div>
    </UserDetails>
  );
}

export default App;
