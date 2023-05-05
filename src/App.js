import { Suspense } from "react";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import btmMascotVector from "./assets/svg/btmMascotVector.svg";
import Bubbles from "./components/Bubbles/Bubbles";
import UserDetails from "./contexts/UserContext";
import "./commonStyles.css";
import {
  MainPage,
  DoctorsList,
  Medicines,
  Profile,
  Login,
  Signup,
  Predictor,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Toaster from "react-hot-toast";
import MainLayout from "./components/MainLayout/MainLayout";
function App() {
  return (
    <UserDetails>
      <div className="App">
        <BrowserRouter>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                background: "#263743",
                color: "#ffff",
                padding: "10px",
                borderRadius: "8px",
                fontFamily: "Rhizome",
                fontSize: "1rem",
              },
            }}
            position="top-right"
          />
          <Suspense fallback={<Loader />}>
            <ScrollToTop />
            <Navbar />
            <MainLayout>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/doctors" element={<DoctorsList />} />
                <Route path="/medicines" element={<Medicines />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/predict" element={<Predictor />} />
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
